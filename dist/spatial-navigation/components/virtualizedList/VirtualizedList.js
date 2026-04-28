"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualizedList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const getRange_1 = require("./helpers/getRange");
const useVirtualizedListAnimation_1 = require("./hooks/useVirtualizedListAnimation");
const TypedMemo_1 = require("../../helpers/TypedMemo");
const getSizeInPxFromOneItemToAnother_1 = require("./helpers/getSizeInPxFromOneItemToAnother");
const createScrollOffsetArray_1 = require("./helpers/createScrollOffsetArray");
const getNumberOfItemsVisibleOnScreen_1 = require("./helpers/getNumberOfItemsVisibleOnScreen");
const getAdditionalNumberOfItemsRendered_1 = require("./helpers/getAdditionalNumberOfItemsRendered");
const useOnEndReached = ({ numberOfItems, range, currentlyFocusedItemIndex, onEndReachedThresholdItemsNumber, onEndReached, }) => {
    (0, react_1.useEffect)(() => {
        if (numberOfItems === 0 || range.end === 0) {
            return;
        }
        if (currentlyFocusedItemIndex >= Math.max(numberOfItems - 1 - onEndReachedThresholdItemsNumber, 0)) {
            onEndReached === null || onEndReached === void 0 ? void 0 : onEndReached();
        }
    }, [
        onEndReached,
        range.end,
        currentlyFocusedItemIndex,
        onEndReachedThresholdItemsNumber,
        numberOfItems,
    ]);
};
const ItemContainerWithAnimatedStyle = (0, TypedMemo_1.typedMemo)(({ item, index, renderItem, itemSize, vertical, data, }) => {
    const computeOffset = (0, react_1.useCallback)((item, index) => typeof itemSize === 'number'
        ? index * itemSize
        : data.slice(0, index).reduce((acc, item) => acc + itemSize(item), 0), [data, itemSize]);
    const style = (0, react_1.useMemo)(() => react_native_1.StyleSheet.flatten([
        styles.item,
        vertical
            ? { transform: [{ translateY: computeOffset(item, index) }] }
            : { transform: [{ translateX: computeOffset(item, index) }] },
    ]), [computeOffset, item, index, vertical]);
    return (0, jsx_runtime_1.jsx)(react_native_1.View, { style: style, children: renderItem({ item, index }) });
});
ItemContainerWithAnimatedStyle.displayName = 'ItemContainerWithAnimatedStyle';
/**
 * DO NOT use this component directly !
 * You should use the component SpatialNavigationVirtualizedList.tsx to render navigable lists of components.
 *
 * Why this has been made:
 *   - it gives us full control on the way we scroll (using CSS animations)
 *   - it is way more performant than a FlatList
 */
exports.VirtualizedList = (0, TypedMemo_1.typedMemo)(({ data, renderItem, itemSize, currentlyFocusedItemIndex, additionalItemsRendered = 2, onEndReached, onEndReachedThresholdItemsNumber = 3, style, orientation = 'horizontal', nbMaxOfItems, keyExtractor, scrollDuration = 200, listSizeInPx, scrollBehavior = 'stick-to-start', testID, }) => {
    const numberOfItemsVisibleOnScreen = (0, getNumberOfItemsVisibleOnScreen_1.getNumberOfItemsVisibleOnScreen)({
        data,
        listSizeInPx,
        itemSize,
    });
    const numberOfItemsToRender = (0, getAdditionalNumberOfItemsRendered_1.getAdditionalNumberOfItemsRendered)(scrollBehavior, numberOfItemsVisibleOnScreen, additionalItemsRendered);
    const range = (0, getRange_1.getRange)({
        data,
        currentlyFocusedItemIndex,
        numberOfRenderedItems: numberOfItemsToRender,
        numberOfItemsVisibleOnScreen,
        scrollBehavior,
    });
    const vertical = orientation === 'vertical';
    const totalVirtualizedListSize = (0, react_1.useMemo)(() => (0, getSizeInPxFromOneItemToAnother_1.getSizeInPxFromOneItemToAnother)(data, itemSize, 0, data.length), [data, itemSize]);
    const dataSliceToRender = data.slice(range.start, range.end + 1);
    const allScrollOffsets = (0, react_1.useMemo)(() => (0, createScrollOffsetArray_1.computeAllScrollOffsets)({
        itemSize: itemSize,
        nbMaxOfItems: nbMaxOfItems !== null && nbMaxOfItems !== void 0 ? nbMaxOfItems : data.length,
        numberOfItemsVisibleOnScreen: numberOfItemsVisibleOnScreen,
        scrollBehavior: scrollBehavior,
        data: data,
        listSizeInPx: listSizeInPx,
    }), [data, itemSize, listSizeInPx, nbMaxOfItems, numberOfItemsVisibleOnScreen, scrollBehavior]);
    useOnEndReached({
        numberOfItems: data.length,
        range,
        currentlyFocusedItemIndex,
        onEndReachedThresholdItemsNumber,
        onEndReached,
    });
    const animatedStyle = react_native_1.Platform.OS === 'web'
        ? (0, useVirtualizedListAnimation_1.useWebVirtualizedListAnimation)({
            currentlyFocusedItemIndex,
            vertical,
            scrollDuration,
            scrollOffsetsArray: allScrollOffsets,
        })
        : (0, useVirtualizedListAnimation_1.useVirtualizedListAnimation)({
            currentlyFocusedItemIndex,
            vertical,
            scrollDuration,
            scrollOffsetsArray: allScrollOffsets,
        });
    /*
     * This is a performance trick.
     * This custom key with a modulo is actually a "recycled" list implementation.
     *
     * Normally, if I scroll right, the first element needs to be unmounted and a new one needs to be mounted on the right side.
     * But with recycling, the first element won't be unmounted : it is moved to the end and its props are updated.
     * See https://medium.com/@moshe_31114/building-our-recycle-list-solution-in-react-17a21a9605a0  */
    const recycledKeyExtractor = (0, react_1.useCallback)((index) => `recycled_item_${index % numberOfItemsToRender}`, [numberOfItemsToRender]);
    const directionStyle = (0, react_1.useMemo)(() => ({ flexDirection: vertical ? 'column' : 'row' }), [vertical]);
    /**
     * If the view has the size of the screen, then it is dropped in the component hierarchy when scrolled for more than the screen size (scroll right).
     * To ensure that the view stays visible, we adat its size to the size of the virtualized list.
     * ```
     *                        Screen
     *                  ┌─────────────────────┐
     *  View(container) │                     │
     *        ┌─────────┼───────────────────┐ │
     *        │┌─┬─┬─┬─┬┼┬─┬─┬─┬─┬─┬─┬─┬─┬──┤ │
     *        ││┼│ │┼│ │┼│ │┼│ │┼│ │┼│ │┼│  │ │
     *        │└─┴─┴─┴─┴┼┴─┴─┴─┴─┴─┴─┴─┴─┴──┤ │
     *        └─────────┼───────────────────┘ │
     *                  │                     │
     *                  └─────────────────────┘
     *          ◄───────┼───────────────────►
     *   RowWidth = Screen Width + size of the item on left
     * ```
     */
    const dimensionStyle = (0, react_1.useMemo)(() => vertical
        ? {
            height: totalVirtualizedListSize,
        }
        : { width: totalVirtualizedListSize }, [totalVirtualizedListSize, vertical]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: [styles.container, animatedStyle, style, directionStyle, dimensionStyle], testID: testID, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { children: dataSliceToRender.map((item, virtualIndex) => {
                const index = range.start + virtualIndex;
                return ((0, jsx_runtime_1.jsx)(ItemContainerWithAnimatedStyle, { renderItem: renderItem, item: item, index: index, itemSize: itemSize, vertical: vertical, data: data }, keyExtractor ? keyExtractor(index) : recycledKeyExtractor(index)));
            }) }) }));
});
exports.VirtualizedList.displayName = 'VirtualizedList';
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        left: 0,
        position: 'absolute',
    },
});
//# sourceMappingURL=VirtualizedList.js.map
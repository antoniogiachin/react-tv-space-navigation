"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramsRow = exports.ProgramList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_1 = require("@emotion/react");
const native_2 = require("@react-navigation/native");
const react_2 = require("react");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const programInfos_1 = require("../infra/programInfos");
const ProgramNode_1 = require("./ProgramNode");
const scaledPixels_1 = require("../../../design-system/helpers/scaledPixels");
const Arrows_1 = require("../../../design-system/components/Arrows");
const react_native_1 = require("react-native");
const theme_1 = require("../../../design-system/theme/theme");
const SupportedKeys_1 = require("../../../components/remote-control/SupportedKeys");
const useKey_1 = require("../../../hooks/useKey");
const react_3 = __importDefault(require("react"));
const NUMBER_OF_ITEMS_VISIBLE_ON_SCREEN = 7;
const ROW_PADDING = (0, scaledPixels_1.scaledPixels)(70);
const GAP_BETWEEN_ELEMENTS = (0, scaledPixels_1.scaledPixels)(30);
const isItemLarge = (item) => {
    return parseInt(item.id, 10) % 2 === 0; // Arbitrary condition to decide size
};
exports.ProgramList = react_3.default.forwardRef(({ orientation, containerStyle, data, parentRef, isActive, variant, listSize = 1000 }, ref) => {
    const navigation = (0, native_2.useNavigation)();
    const theme = (0, react_1.useTheme)();
    const listRef = (0, react_2.useRef)(null);
    const renderItem = (0, react_2.useCallback)(({ item, index }) => ((0, jsx_runtime_1.jsx)(ProgramNode_1.ProgramNode, { programInfo: item, onSelect: () => navigation.push('ProgramDetail', { programInfo: item }), label: index.toString(), variant: variant === 'variable-size' && isItemLarge(item) ? 'landscape' : 'portrait' })), [navigation, variant]);
    const isScreenFocused = (0, native_2.useIsFocused)();
    const programInfos = (0, react_2.useMemo)(() => data !== null && data !== void 0 ? data : (0, programInfos_1.getPrograms)(listSize), [data, listSize]);
    const itemSize = (0, react_2.useMemo)(() => {
        if (variant === 'normal') {
            return theme.sizes.program.portrait.width + GAP_BETWEEN_ELEMENTS;
        }
        return (item) => isItemLarge(item)
            ? theme.sizes.program.landscape.width + GAP_BETWEEN_ELEMENTS
            : theme.sizes.program.portrait.width + GAP_BETWEEN_ELEMENTS;
    }, // Default item size for "normal"
    [theme.sizes.program.landscape.width, theme.sizes.program.portrait.width, variant]);
    const goToFirstItem = (0, react_2.useCallback)((pressedKey) => {
        var _a, _b;
        const isBackKey = pressedKey === SupportedKeys_1.SupportedKeys.Back;
        const isRowActive = isActive && isScreenFocused;
        const isFirstElementFocused = ((_a = listRef.current) === null || _a === void 0 ? void 0 : _a.currentlyFocusedItemIndex) === 0;
        if (!isBackKey || !isRowActive || isFirstElementFocused) {
            return false;
        }
        (_b = listRef.current) === null || _b === void 0 ? void 0 : _b.focus(0);
        return true;
    }, [isActive, isScreenFocused, listRef]);
    (0, useKey_1.useKey)(SupportedKeys_1.SupportedKeys.Back, goToFirstItem);
    return ((0, jsx_runtime_1.jsx)(Container, { isActive: isActive, style: containerStyle, ref: ref, children: (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationVirtualizedList, { orientation: orientation, data: programInfos, renderItem: renderItem, itemSize: itemSize, onEndReachedThresholdItemsNumber: NUMBER_OF_ITEMS_VISIBLE_ON_SCREEN, 
            // @ts-expect-error TODO change the type from ReactElement to ReactNode in the core
            descendingArrow: isActive ? (0, jsx_runtime_1.jsx)(Arrows_1.LeftArrow, {}) : null, descendingArrowContainerStyle: styles.leftArrowContainer, 
            // @ts-expect-error TODO change the type from ReactElement to ReactNode in the core
            ascendingArrow: isActive ? (0, jsx_runtime_1.jsx)(Arrows_1.RightArrow, {}) : null, ascendingArrowContainerStyle: styles.rightArrowContainer, ref: (elementRef) => {
                if (parentRef)
                    parentRef.current = elementRef;
                listRef.current = elementRef;
            } }) }));
});
exports.ProgramList.displayName = 'ProgramList';
const ProgramsRow = ({ containerStyle, variant = 'normal', listSize, parentRef, data, }) => {
    const theme = (0, react_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationNode, { children: ({ isActive }) => ((0, jsx_runtime_1.jsx)(exports.ProgramList, { containerStyle: Object.assign(Object.assign({}, containerStyle), { height: theme.sizes.program.portrait.height + ROW_PADDING }), variant: variant, listSize: listSize, parentRef: parentRef, isActive: isActive, data: data })) }));
};
exports.ProgramsRow = ProgramsRow;
const Container = native_1.default.View(({ isActive, theme }) => ({
    backgroundColor: isActive
        ? theme.colors.background.mainActive
        : theme.colors.background.mainHover,
    padding: theme.spacings.$8,
    borderRadius: (0, scaledPixels_1.scaledPixels)(20),
    overflow: 'hidden',
    width: '100%',
}));
const styles = react_native_1.StyleSheet.create({
    leftArrowContainer: {
        width: 120,
        height: (0, scaledPixels_1.scaledPixels)(260) + 2 * theme_1.theme.spacings.$8,
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        left: -theme_1.theme.spacings.$8,
    },
    rightArrowContainer: {
        width: 120,
        height: (0, scaledPixels_1.scaledPixels)(260) + 2 * theme_1.theme.spacings.$8,
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        right: -theme_1.theme.spacings.$8,
    },
});
//# sourceMappingURL=ProgramList.js.map
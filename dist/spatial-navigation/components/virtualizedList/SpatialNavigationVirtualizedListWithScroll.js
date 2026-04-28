"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialNavigationVirtualizedListWithScroll = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SpatialNavigationVirtualizedListWithVirtualNodes_1 = require("./SpatialNavigationVirtualizedListWithVirtualNodes");
const ParentScrollContext_1 = require("../../context/ParentScrollContext");
const TypedMemo_1 = require("../../helpers/TypedMemo");
const DeviceContext_1 = require("../../context/DeviceContext");
const react_native_1 = require("react-native");
const SpatialNavigatorContext_1 = require("../../context/SpatialNavigatorContext");
const react_2 = __importDefault(require("react"));
const TypedForwardRef_1 = require("../../helpers/TypedForwardRef");
const ItemWrapperWithScrollContext = (0, TypedMemo_1.typedMemo)(({ setCurrentlyFocusedItemIndex, item, index, renderItem, }) => {
    const { scrollToNodeIfNeeded: makeParentsScrollToNodeIfNeeded } = (0, ParentScrollContext_1.useSpatialNavigatorParentScroll)();
    const scrollToItem = (0, react_1.useCallback)((newlyFocusedElementRef, additionalOffset) => {
        setCurrentlyFocusedItemIndex(index);
        // We need to propagate the scroll event for parents if we have nested ScrollViews/VirtualizedLists.
        makeParentsScrollToNodeIfNeeded(newlyFocusedElementRef, additionalOffset);
    }, [makeParentsScrollToNodeIfNeeded, setCurrentlyFocusedItemIndex, index]);
    return ((0, jsx_runtime_1.jsx)(ParentScrollContext_1.SpatialNavigatorParentScrollContext.Provider, { value: scrollToItem, children: renderItem({ item, index }) }));
});
ItemWrapperWithScrollContext.displayName = 'ItemWrapperWithScrollContext';
const useRemotePointerVirtualizedListScrollProps = ({ setCurrentlyFocusedItemIndex, scrollInterval, data, }) => {
    const { deviceType, deviceTypeRef, getScrollingIntervalId: getScrollingId, setScrollingIntervalId: setScrollingId, } = (0, DeviceContext_1.useSpatialNavigationDeviceType)();
    const navigator = (0, SpatialNavigatorContext_1.useSpatialNavigator)();
    const idRef = (0, react_1.useRef)(null);
    const grabFocus = navigator.grabFocus;
    const onMouseEnterDescending = (0, react_1.useCallback)(() => {
        const callback = () => {
            setCurrentlyFocusedItemIndex((index) => {
                if (index > 0) {
                    if (idRef.current)
                        grabFocus(idRef.current.getNthVirtualNodeID(index - 1));
                    return index - 1;
                }
                else {
                    return index;
                }
            });
        };
        const id = setInterval(() => {
            callback();
        }, scrollInterval);
        setScrollingId(id);
    }, [grabFocus, scrollInterval, setCurrentlyFocusedItemIndex, setScrollingId]);
    const onMouseLeave = (0, react_1.useCallback)(() => {
        const intervalId = getScrollingId();
        if (intervalId) {
            clearInterval(intervalId);
            setScrollingId(null);
        }
    }, [getScrollingId, setScrollingId]);
    const onMouseEnterAscending = (0, react_1.useCallback)(() => {
        const callback = () => {
            setCurrentlyFocusedItemIndex((index) => {
                if (index < data.length - 1) {
                    if (idRef.current) {
                        grabFocus(idRef.current.getNthVirtualNodeID(index + 1));
                    }
                    return index + 1;
                }
                else {
                    return index;
                }
            });
        };
        const id = setInterval(() => {
            callback();
        }, scrollInterval);
        setScrollingId(id);
    }, [data.length, grabFocus, scrollInterval, setCurrentlyFocusedItemIndex, setScrollingId]);
    const descendingArrowProps = (0, react_1.useMemo)(() => react_native_1.Platform.select({
        web: {
            onMouseEnter: onMouseEnterDescending,
            onMouseLeave: onMouseLeave,
        },
    }), [onMouseEnterDescending, onMouseLeave]);
    const ascendingArrowProps = (0, react_1.useMemo)(() => react_native_1.Platform.select({
        web: {
            onMouseEnter: onMouseEnterAscending,
            onMouseLeave: onMouseLeave,
        },
    }), [onMouseEnterAscending, onMouseLeave]);
    return {
        descendingArrowProps,
        ascendingArrowProps,
        idRef,
        deviceType,
        deviceTypeRef,
    };
};
/**
 * This component wraps every item of a virtualizedList in a scroll handling context.
 */
exports.SpatialNavigationVirtualizedListWithScroll = (0, TypedMemo_1.typedMemo)((0, TypedForwardRef_1.typedForwardRef)((props, ref) => {
    const { data, renderItem, descendingArrow: descendingArrow, ascendingArrow: ascendingArrow, descendingArrowContainerStyle, ascendingArrowContainerStyle, scrollInterval = 100, } = props;
    const [currentlyFocusedItemIndex, setCurrentlyFocusedItemIndex] = (0, react_1.useState)(0);
    const spatialNavigator = (0, SpatialNavigatorContext_1.useSpatialNavigator)();
    const { deviceType, deviceTypeRef, descendingArrowProps, ascendingArrowProps, idRef } = useRemotePointerVirtualizedListScrollProps({
        setCurrentlyFocusedItemIndex,
        scrollInterval,
        data,
    });
    const setCurrentlyFocusedItemIndexCallback = (0, react_1.useCallback)((index) => {
        deviceTypeRef.current === 'remoteKeys' ? setCurrentlyFocusedItemIndex(index) : null;
    }, [deviceTypeRef]);
    const scrollTo = (0, react_1.useCallback)((index) => {
        if (idRef.current) {
            const newId = idRef.current.getNthVirtualNodeID(index);
            spatialNavigator.grabFocusDeferred(newId);
        }
    }, [idRef, spatialNavigator]);
    (0, react_1.useImperativeHandle)(ref, () => ({
        focus: (index) => {
            setCurrentlyFocusedItemIndex(index);
            scrollTo(index);
        },
        scrollTo,
        currentlyFocusedItemIndex,
    }), [currentlyFocusedItemIndex, scrollTo]);
    const renderWrappedItem = (0, react_1.useCallback)(({ item, index }) => ((0, jsx_runtime_1.jsx)(ItemWrapperWithScrollContext, { setCurrentlyFocusedItemIndex: setCurrentlyFocusedItemIndexCallback, renderItem: renderItem, item: item, index: index })), [setCurrentlyFocusedItemIndexCallback, renderItem]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SpatialNavigationVirtualizedListWithVirtualNodes_1.SpatialNavigationVirtualizedListWithVirtualNodes, Object.assign({}, props, { getNodeIdRef: idRef, currentlyFocusedItemIndex: currentlyFocusedItemIndex, renderItem: renderWrappedItem })), deviceType === 'remotePointer' ? ((0, jsx_runtime_1.jsx)(PointerScrollArrows, { descendingArrowContainerStyle: descendingArrowContainerStyle, descendingArrowProps: descendingArrowProps, descendingArrow: descendingArrow, ascendingArrowContainerStyle: ascendingArrowContainerStyle, ascendingArrowProps: ascendingArrowProps, ascendingArrow: ascendingArrow })) : undefined] }));
}));
exports.SpatialNavigationVirtualizedListWithScroll.displayName =
    'SpatialNavigationVirtualizedListWithScroll';
const PointerScrollArrows = react_2.default.memo(({ ascendingArrow, ascendingArrowProps, ascendingArrowContainerStyle, descendingArrow, descendingArrowProps, descendingArrowContainerStyle, }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.View, Object.assign({ style: descendingArrowContainerStyle }, descendingArrowProps, { children: descendingArrow })), (0, jsx_runtime_1.jsx)(react_native_1.View, Object.assign({ style: ascendingArrowContainerStyle }, ascendingArrowProps, { children: ascendingArrow }))] }));
});
PointerScrollArrows.displayName = 'PointerScrollArrows';
//# sourceMappingURL=SpatialNavigationVirtualizedListWithScroll.js.map
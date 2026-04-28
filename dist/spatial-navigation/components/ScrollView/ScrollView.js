"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialNavigationScrollView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const ParentScrollContext_1 = require("../../context/ParentScrollContext");
const scrollToNewlyfocusedElement_1 = require("../../helpers/scrollToNewlyfocusedElement");
const mergeRefs_1 = require("../../helpers/mergeRefs");
const useRemotePointerScrollviewScrollProps_1 = require("./pointer/useRemotePointerScrollviewScrollProps");
const PointerScrollArrows_1 = require("./pointer/PointerScrollArrows");
const AnyScrollView_1 = require("./AnyScrollView");
const getNodeRef = (node) => {
    if (react_native_1.Platform.OS === 'web') {
        return node === null || node === void 0 ? void 0 : node.getInnerViewNode();
    }
    return node;
};
exports.SpatialNavigationScrollView = (0, react_1.forwardRef)(({ horizontal = false, style, offsetFromStart = 0, children, ascendingArrow, ascendingArrowContainerStyle, descendingArrow, descendingArrowContainerStyle, pointerScrollSpeed = 10, contentContainerStyle, useNativeScroll = false, scrollDuration = 200, testID, }, ref) => {
    const { scrollToNodeIfNeeded: makeParentsScrollToNodeIfNeeded } = (0, ParentScrollContext_1.useSpatialNavigatorParentScroll)();
    const scrollViewRef = (0, react_1.useRef)(null);
    const scrollY = (0, react_1.useRef)(0);
    const { ascendingArrowProps, descendingArrowProps, deviceType, deviceTypeRef } = (0, useRemotePointerScrollviewScrollProps_1.useRemotePointerScrollviewScrollProps)({ pointerScrollSpeed, scrollY, scrollViewRef });
    const scrollToNode = (0, react_1.useCallback)((newlyFocusedElementRef, additionalOffset = 0) => {
        var _a;
        try {
            if (deviceTypeRef.current === 'remoteKeys') {
                (_a = newlyFocusedElementRef === null || newlyFocusedElementRef === void 0 ? void 0 : newlyFocusedElementRef.current) === null || _a === void 0 ? void 0 : _a.measureLayout(getNodeRef(scrollViewRef === null || scrollViewRef === void 0 ? void 0 : scrollViewRef.current), (left, top) => (0, scrollToNewlyfocusedElement_1.scrollToNewlyFocusedElement)({
                    newlyFocusedElementDistanceToLeftRelativeToLayout: left,
                    newlyFocusedElementDistanceToTopRelativeToLayout: top,
                    horizontal,
                    offsetFromStart: offsetFromStart + additionalOffset,
                    scrollViewRef,
                }), () => { });
            }
        }
        catch (_b) {
            // A crash can happen when calling measureLayout when a page unmounts. No impact on focus detected in regular use cases.
        }
        makeParentsScrollToNodeIfNeeded(newlyFocusedElementRef, additionalOffset); // We need to propagate the scroll event for parents if we have nested ScrollViews/VirtualizedLists.
    }, [makeParentsScrollToNodeIfNeeded, horizontal, offsetFromStart, deviceTypeRef]);
    const onScroll = (0, react_1.useCallback)((event) => {
        scrollY.current = event.nativeEvent.contentOffset.y;
    }, [scrollY]);
    return ((0, jsx_runtime_1.jsxs)(ParentScrollContext_1.SpatialNavigatorParentScrollContext.Provider, { value: scrollToNode, children: [(0, jsx_runtime_1.jsx)(AnyScrollView_1.AnyScrollView, { useNativeScroll: useNativeScroll, scrollDuration: scrollDuration, ref: (0, mergeRefs_1.mergeRefs)([ref, scrollViewRef]), horizontal: horizontal, style: style, contentContainerStyle: contentContainerStyle, onScroll: onScroll, testID: testID, children: children }), deviceType === 'remotePointer' ? ((0, jsx_runtime_1.jsx)(PointerScrollArrows_1.PointerScrollArrows, { descendingArrow: descendingArrow, ascendingArrow: ascendingArrow, descendingArrowContainerStyle: descendingArrowContainerStyle, ascendingArrowContainerStyle: ascendingArrowContainerStyle, ascendingArrowProps: ascendingArrowProps, descendingArrowProps: descendingArrowProps })) : undefined] }));
});
exports.SpatialNavigationScrollView.displayName = 'SpatialNavigationScrollView';
//# sourceMappingURL=ScrollView.js.map
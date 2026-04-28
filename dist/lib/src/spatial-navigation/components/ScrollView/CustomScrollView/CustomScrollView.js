"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomScrollView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react-native/no-inline-styles */
const react_native_1 = require("react-native");
const react_1 = require("react");
const CustomScrollView_hooks_1 = require("./CustomScrollView.hooks");
exports.CustomScrollView = (0, react_1.forwardRef)(({ style, contentContainerStyle, children, onScroll, horizontal = false, scrollDuration = 200, testID, }, ref) => {
    const [scroll, setScroll] = (0, react_1.useState)(0);
    const contentSize = (0, react_1.useRef)(0);
    const parentSize = (0, react_1.useRef)(0);
    const animationStyle = (0, CustomScrollView_hooks_1.useStyle)(horizontal, scroll, scrollDuration);
    const onContentContainerLayout = (0, react_1.useCallback)((event) => {
        contentSize.current = event.nativeEvent.layout[horizontal ? 'width' : 'height'];
    }, [horizontal]);
    const onParentLayout = (0, react_1.useCallback)((event) => {
        parentSize.current = event.nativeEvent.layout[horizontal ? 'width' : 'height'];
    }, [horizontal]);
    const updateRef = (currentRef) => {
        if (!currentRef)
            return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- couldn't find another way than a mutation... copying the ref makes it not work with measureLayout anymore
        const newRef = currentRef;
        newRef.getInnerViewNode = () => currentRef;
        newRef.scrollTo = ({ x, y }) => {
            let scrollValue = 0;
            if (parentSize.current < contentSize.current) {
                if (x !== undefined) {
                    scrollValue = Math.min(Math.max(0, x), contentSize.current);
                }
                else if (y !== undefined) {
                    scrollValue = Math.min(Math.max(0, y), contentSize.current);
                }
                // Prevent from scrolling too far when reaching the end
                scrollValue = Math.min(scrollValue, contentSize.current - parentSize.current);
            }
            setScroll(scrollValue);
            const event = { nativeEvent: { contentOffset: { y: scrollValue, x: scrollValue } } };
            onScroll === null || onScroll === void 0 ? void 0 : onScroll(event);
        };
        if (typeof ref === 'function')
            ref === null || ref === void 0 ? void 0 : ref(newRef);
        else if (ref)
            ref.current = newRef;
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
            { flex: 1, overflow: 'hidden', flexDirection: horizontal ? 'row' : 'column' },
            style,
        ], onLayout: onParentLayout, testID: testID, children: (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { onLayout: onContentContainerLayout, style: [contentContainerStyle, animationStyle], ref: updateRef, testID: testID ? `${testID}-content` : undefined, children: children }) }));
});
exports.CustomScrollView.displayName = 'CustomScrollView';
//# sourceMappingURL=CustomScrollView.js.map
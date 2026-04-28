"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramNode = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const Program_1 = require("./Program");
const react_1 = require("react");
const useRotateAnimation_1 = require("./useRotateAnimation");
const react_native_1 = require("react-native");
exports.ProgramNode = (0, react_1.forwardRef)(({ programInfo, onSelect, indexRange, label, variant }, ref) => {
    const { rotate360, animatedStyle } = (0, useRotateAnimation_1.useRotateAnimation)();
    return ((0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationFocusableView, { onSelect: onSelect, onLongSelect: rotate360, indexRange: indexRange, viewProps: { accessibilityLabel: programInfo.title }, ref: ref, children: ({ isFocused, isRootActive }) => ((0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: animatedStyle, children: (0, jsx_runtime_1.jsx)(Program_1.Program, { isFocused: isFocused && isRootActive, programInfo: programInfo, label: label, variant: variant }) })) }));
});
exports.ProgramNode.displayName = 'ProgramNode';
//# sourceMappingURL=ProgramNode.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const Typography_1 = require("./Typography");
const native_1 = __importDefault(require("@emotion/native"));
const useFocusAnimation_1 = require("../helpers/useFocusAnimation");
const scaledPixels_1 = require("../helpers/scaledPixels");
const ButtonContent = (0, react_1.forwardRef)((props, ref) => {
    const { isFocused, label } = props;
    const anim = (0, useFocusAnimation_1.useFocusAnimation)(isFocused);
    return ((0, jsx_runtime_1.jsx)(Container, { style: anim, isFocused: isFocused, ref: ref, children: (0, jsx_runtime_1.jsx)(ColoredTypography, { isFocused: isFocused, children: label }) }));
});
ButtonContent.displayName = 'ButtonContent';
const Button = ({ label, onSelect }) => {
    return ((0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationFocusableView, { onSelect: onSelect, children: ({ isFocused, isRootActive }) => ((0, jsx_runtime_1.jsx)(ButtonContent, { label: label, isFocused: isFocused && isRootActive })) }));
};
exports.Button = Button;
const Container = (0, native_1.default)(react_native_1.Animated.View)(({ isFocused, theme }) => ({
    alignSelf: 'baseline',
    backgroundColor: isFocused ? 'white' : 'black',
    padding: theme.spacings.$4,
    borderRadius: (0, scaledPixels_1.scaledPixels)(12),
    cursor: 'pointer',
}));
const ColoredTypography = (0, native_1.default)(Typography_1.Typography)(({ isFocused }) => ({
    color: isFocused ? 'black' : 'white',
}));
//# sourceMappingURL=Button.js.map
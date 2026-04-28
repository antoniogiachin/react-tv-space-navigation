"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_1 = require("react");
const react_native_1 = require("react-native");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const scaledPixels_1 = require("../../design-system/helpers/scaledPixels");
const useFocusAnimation_1 = require("../../design-system/helpers/useFocusAnimation");
const theme_1 = require("../../design-system/theme/theme");
const Icons_1 = require("../../design-system/helpers/Icons");
const ButtonContent = (0, react_1.forwardRef)((props, ref) => {
    const { isFocused, icon, isMenuOpen } = props;
    const anim = (0, useFocusAnimation_1.useFocusAnimation)(isFocused && isMenuOpen);
    return ((0, jsx_runtime_1.jsx)(Container, { style: anim, isFocused: isFocused, isMenuOpen: isMenuOpen, ref: ref, children: (0, jsx_runtime_1.jsx)(Icons_1.Icon, { icon: icon, size: theme_1.theme.sizes.menu.icon, color: isFocused && isMenuOpen
                ? theme_1.theme.colors.background.main
                : theme_1.theme.colors.background.contrastText }) }));
});
ButtonContent.displayName = 'ButtonContent';
const MenuButton = ({ icon, isMenuOpen, onSelect }) => {
    return ((0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationFocusableView, { onSelect: onSelect, children: ({ isFocused }) => ((0, jsx_runtime_1.jsx)(ButtonContent, { icon: icon, isFocused: isFocused, isMenuOpen: isMenuOpen })) }));
};
exports.MenuButton = MenuButton;
const Container = (0, native_1.default)(react_native_1.Animated.View)(({ isFocused, isMenuOpen, theme }) => ({
    alignSelf: 'baseline',
    backgroundColor: isFocused && isMenuOpen ? 'white' : 'black',
    padding: theme.spacings.$4,
    borderRadius: (0, scaledPixels_1.scaledPixels)(12),
    cursor: 'pointer',
}));
//# sourceMappingURL=MenuButton.js.map
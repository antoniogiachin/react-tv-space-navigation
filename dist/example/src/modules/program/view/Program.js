"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Program = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const useFocusAnimation_1 = require("../../../design-system/helpers/useFocusAnimation");
const Typography_1 = require("../../../design-system/components/Typography");
const Label = react_1.default.memo(({ label }) => {
    return (0, jsx_runtime_1.jsx)(Typography_1.Typography, { children: label });
});
Label.displayName = 'Label';
exports.Program = react_1.default.memo(react_1.default.forwardRef(({ isFocused = false, programInfo, label, variant = 'portrait' }, ref) => {
    const imageSource = programInfo.image;
    const scaleAnimation = (0, useFocusAnimation_1.useFocusAnimation)(isFocused);
    return ((0, jsx_runtime_1.jsxs)(ProgramContainer, { style: scaleAnimation, ref: ref, isFocused: isFocused, variant: variant, children: [(0, jsx_runtime_1.jsx)(ProgramImage, { source: imageSource, accessible: true }), label ? ((0, jsx_runtime_1.jsx)(Overlay, { children: (0, jsx_runtime_1.jsx)(Label, { label: label }) })) : null] }));
}));
exports.Program.displayName = 'Program';
const ProgramContainer = (0, native_1.default)(react_native_1.Animated.View)(({ isFocused, variant, theme }) => ({
    height: theme.sizes.program.portrait.height, // Height is the same for both variants
    width: variant === 'landscape'
        ? theme.sizes.program.landscape.width
        : theme.sizes.program.portrait.width,
    overflow: 'hidden',
    borderRadius: 20,
    borderColor: isFocused ? theme.colors.primary.light : 'transparent',
    borderWidth: 3,
    cursor: 'pointer',
}));
const ProgramImage = react_1.default.memo((0, native_1.default)(react_native_1.Image)({
    height: '100%',
    width: '100%',
}));
const Overlay = react_1.default.memo(native_1.default.View({
    position: 'absolute',
    bottom: 12,
    left: 12,
}));
//# sourceMappingURL=Program.js.map
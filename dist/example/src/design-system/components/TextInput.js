"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const react_native_1 = require("react-native");
const react_1 = require("react");
const Typography_1 = require("./Typography");
const Box_1 = require("./Box");
/**
 * It works, but it's not perfect.
 * If you press the back button on Android to dismiss the keyboard,
 * focus is in a weird state where we keep listening to remote control arrow movements.
 * Ideally, we'd like to always remove the native focus when the keyboard is dismissed.
 */
const TextInput = ({ label }) => {
    const ref = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, { children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, { children: label }), (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationNode, { isFocusable: true, onSelect: () => {
                    var _a;
                    (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.focus();
                }, onFocus: () => {
                    var _a;
                    (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.focus();
                }, onBlur: () => {
                    var _a;
                    (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.blur();
                }, children: ({ isFocused }) => (0, jsx_runtime_1.jsx)(StyledTextInput, { ref: ref, isFocused: isFocused }) })] }));
};
exports.TextInput = TextInput;
const StyledTextInput = (0, native_1.default)(react_native_1.TextInput)(({ isFocused, theme }) => ({
    borderColor: isFocused ? 'white' : 'black',
    borderWidth: 2,
    borderRadius: 8,
    color: 'white',
    backgroundColor: theme.colors.background.mainHover,
}));
//# sourceMappingURL=TextInput.js.map
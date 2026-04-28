"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_native_1 = require("react-native");
const Node_1 = require("../Node");
const TestButton = ({ onSelect, title }) => {
    return ((0, jsx_runtime_1.jsx)(Node_1.SpatialNavigationNode, { onSelect: onSelect, isFocusable: true, children: ({ isFocused }) => ((0, jsx_runtime_1.jsx)(TextContainer, { isFocused: isFocused, accessible: true, accessibilityState: { selected: isFocused }, accessibilityLabel: title, accessibilityHint: title, accessibilityRole: "button", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: title }) })) }));
};
exports.TestButton = TestButton;
const TextContainer = native_1.default.View(({ isFocused }) => ({
    borderRadius: 100,
    padding: 6,
    backgroundColor: isFocused ? 'red' : 'transparent',
}));
//# sourceMappingURL=TestButton.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopArrow = exports.BottomArrow = exports.RightArrow = exports.LeftArrow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_native_1 = require("react-native");
const arrow_left_png_1 = __importDefault(require("../assets/arrow-left.png"));
const react_1 = __importDefault(require("react"));
const LeftArrowImage = (0, native_1.default)(react_native_1.Image)({
    height: 70,
    width: 50,
    transform: [{ rotate: '180deg' }],
});
const RightArrowImage = (0, native_1.default)(react_native_1.Image)({
    height: 70,
    width: 50,
});
exports.LeftArrow = react_1.default.memo(() => {
    return (0, jsx_runtime_1.jsx)(LeftArrowImage, { resizeMode: "stretch", tintColor: 'white', source: arrow_left_png_1.default });
});
exports.LeftArrow.displayName = 'LeftArrow';
exports.RightArrow = react_1.default.memo(() => {
    return (0, jsx_runtime_1.jsx)(RightArrowImage, { resizeMode: "stretch", tintColor: 'white', source: arrow_left_png_1.default });
});
exports.RightArrow.displayName = 'RightArrow';
const BottomArrowImage = (0, native_1.default)(react_native_1.Image)({
    height: 70,
    width: 50,
    transform: [{ rotate: '90deg' }],
});
const TopArrowImage = (0, native_1.default)(react_native_1.Image)({
    height: 70,
    width: 50,
    transform: [{ rotate: '270deg' }],
});
exports.BottomArrow = react_1.default.memo(() => {
    return (0, jsx_runtime_1.jsx)(BottomArrowImage, { resizeMode: "stretch", tintColor: 'white', source: arrow_left_png_1.default });
});
exports.BottomArrow.displayName = 'BottomArrow';
exports.TopArrow = react_1.default.memo(() => {
    return (0, jsx_runtime_1.jsx)(TopArrowImage, { resizeMode: "stretch", tintColor: 'white', source: arrow_left_png_1.default });
});
exports.TopArrow.displayName = 'TopArrow';
//# sourceMappingURL=Arrows.js.map
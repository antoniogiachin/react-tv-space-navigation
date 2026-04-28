"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointerScrollArrows = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
exports.PointerScrollArrows = react_1.default.memo(({ ascendingArrow, descendingArrowProps, ascendingArrowContainerStyle, descendingArrow, ascendingArrowProps, descendingArrowContainerStyle, }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.View, Object.assign({ style: [styles.arrowContainer, descendingArrowContainerStyle] }, descendingArrowProps, { children: descendingArrow })), (0, jsx_runtime_1.jsx)(react_native_1.View, Object.assign({ style: ascendingArrowContainerStyle }, ascendingArrowProps, { children: ascendingArrow }))] }));
});
exports.PointerScrollArrows.displayName = 'PointerScrollArrows';
const styles = react_native_1.StyleSheet.create({
    arrowContainer: {
        position: 'absolute',
    },
});
//# sourceMappingURL=PointerScrollArrows.js.map
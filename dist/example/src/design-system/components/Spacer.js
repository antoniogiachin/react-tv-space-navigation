"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SpacerToMemoize = ({ direction = 'vertical', gap, flex }) => {
    if (typeof flex === 'number') {
        return (0, jsx_runtime_1.jsx)(FlexSpacer, { flex: flex });
    }
    return (0, jsx_runtime_1.jsx)(GridSpacer, { direction: direction, gap: gap });
};
const FlexSpacer = native_1.default.View(({ flex }) => ({
    flex,
}));
const GridSpacer = (0, native_1.default)(react_native_1.View, {
    // flex and direction props are reserved props in React Native and should therefore not be forwarded !
    shouldForwardProp: (propName) => propName !== 'direction' && propName !== 'gap',
})(({ direction, gap, theme }) => (Object.assign({}, (direction === 'vertical' ? { height: theme.spacings[gap] } : { width: theme.spacings[gap] }))));
exports.Spacer = react_1.default.memo(SpacerToMemoize);
//# sourceMappingURL=Spacer.js.map
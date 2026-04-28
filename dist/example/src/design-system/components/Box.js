"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_native_1 = require("react-native");
const Box = (_a) => {
    var { direction = 'vertical', children } = _a, otherProps = __rest(_a, ["direction", "children"]);
    return ((0, jsx_runtime_1.jsx)(StyledView, Object.assign({ direction: direction }, otherProps, { children: children })));
};
exports.Box = Box;
const StyledView = (0, native_1.default)(react_native_1.View, {
    // direction prop is a reserved prop in React Native and should therefore not be forwarded !
    shouldForwardProp: (propName) => propName !== 'direction',
})(({ direction, flex, flexWrap, alignItems, justifyContent, paddingHorizontal, paddingVertical, paddingBottom, paddingRight, paddingLeft, paddingTop, padding, theme, }) => (Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ flexDirection: direction === 'vertical' ? 'column' : 'row' }, (flex && { flex })), (flexWrap && { flexWrap })), (alignItems && { alignItems })), (justifyContent && { justifyContent })), { paddingHorizontal: paddingHorizontal && theme.spacings[paddingHorizontal], paddingVertical: paddingVertical && theme.spacings[paddingVertical], paddingBottom: paddingBottom && theme.spacings[paddingBottom], paddingRight: paddingRight && theme.spacings[paddingRight], paddingLeft: paddingLeft && theme.spacings[paddingLeft], paddingTop: paddingTop && theme.spacings[paddingTop], padding: padding && theme.spacings[padding] })));
//# sourceMappingURL=Box.js.map
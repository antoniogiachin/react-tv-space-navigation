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
exports.Typography = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const Typography = (_a) => {
    var { variant = 'body', fontWeight = 'regular', children } = _a, textProps = __rest(_a, ["variant", "fontWeight", "children"]);
    return ((0, jsx_runtime_1.jsx)(StyledText, Object.assign({ variant: variant, fontWeight: fontWeight }, textProps, { children: children })));
};
exports.Typography = Typography;
const StyledText = native_1.default.Text(({ variant, fontWeight, theme }) => (Object.assign(Object.assign({}, theme.typography[variant][fontWeight]), { color: 'white', flexWrap: 'wrap' })));
//# sourceMappingURL=Typography.js.map
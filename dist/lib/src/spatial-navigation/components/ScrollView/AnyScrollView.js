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
exports.AnyScrollView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CustomScrollView_1 = require("./CustomScrollView/CustomScrollView");
exports.AnyScrollView = react_1.default.forwardRef((_a, ref) => {
    var { useNativeScroll } = _a, props = __rest(_a, ["useNativeScroll"]);
    if (useNativeScroll) {
        return ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, Object.assign({ ref: ref, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, scrollEnabled: false, scrollEventThrottle: 16 }, props)));
    }
    return (0, jsx_runtime_1.jsx)(CustomScrollView_1.CustomScrollView, Object.assign({ ref: ref }, props));
});
exports.AnyScrollView.displayName = 'AnyScrollView';
//# sourceMappingURL=AnyScrollView.js.map
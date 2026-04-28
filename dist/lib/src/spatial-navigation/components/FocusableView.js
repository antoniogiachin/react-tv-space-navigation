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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialNavigationFocusableView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Node_1 = require("./Node");
const react_native_1 = require("react-native");
const react_1 = require("react");
const DeviceContext_1 = require("../context/DeviceContext");
const useSpatialNavigatorFocusableAccessibilityProps_1 = require("../hooks/useSpatialNavigatorFocusableAccessibilityProps");
exports.SpatialNavigationFocusableView = (0, react_1.forwardRef)((_a, ref) => {
    var { children, style, viewProps } = _a, props = __rest(_a, ["children", "style", "viewProps"]);
    const { deviceTypeRef } = (0, DeviceContext_1.useSpatialNavigationDeviceType)();
    const nodeRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, () => ({
        focus: () => { var _a; return (_a = nodeRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
    }), [nodeRef]);
    const webProps = react_native_1.Platform.select({
        web: {
            onMouseEnter: () => {
                var _a;
                if (viewProps === null || viewProps === void 0 ? void 0 : viewProps.onMouseEnter) {
                    viewProps === null || viewProps === void 0 ? void 0 : viewProps.onMouseEnter();
                }
                if (deviceTypeRef.current === 'remotePointer') {
                    (_a = nodeRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                }
            },
            onClick: () => {
                var _a;
                (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props);
            },
        },
        default: {},
    });
    return ((0, jsx_runtime_1.jsx)(Node_1.SpatialNavigationNode, Object.assign({ isFocusable: true }, props, { ref: nodeRef, children: (nodeState) => ((0, jsx_runtime_1.jsx)(InnerFocusableView, { viewProps: viewProps, webProps: webProps, style: style, nodeState: nodeState, children: children })) })));
});
exports.SpatialNavigationFocusableView.displayName = 'SpatialNavigationFocusableView';
const InnerFocusableView = (0, react_1.forwardRef)(({ viewProps, webProps, children, nodeState, style }, ref) => {
    const accessibilityProps = (0, useSpatialNavigatorFocusableAccessibilityProps_1.useSpatialNavigatorFocusableAccessibilityProps)();
    const accessibilityState = (0, react_1.useMemo)(() => ({ selected: nodeState.isFocused }), [nodeState.isFocused]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, Object.assign({ ref: ref, style: style, accessibilityState: accessibilityState }, accessibilityProps, viewProps, webProps, { children: typeof children === 'function' ? children(nodeState) : children })));
});
InnerFocusableView.displayName = 'InnerFocusableView';
//# sourceMappingURL=FocusableView.js.map
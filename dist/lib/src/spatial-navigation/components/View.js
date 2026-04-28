"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialNavigationView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const Node_1 = require("./Node");
const react_1 = require("react");
exports.SpatialNavigationView = (0, react_1.forwardRef)(({ direction = 'horizontal', alignInGrid = false, children, style }, ref) => {
    return ((0, jsx_runtime_1.jsx)(Node_1.SpatialNavigationNode, { orientation: direction, alignInGrid: alignInGrid, ref: ref, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [style, direction === 'horizontal' ? styles.viewHorizontal : styles.viewVertical], children: children }) }));
});
exports.SpatialNavigationView.displayName = 'SpatialNavigationView';
const styles = react_native_1.StyleSheet.create({
    viewVertical: {
        display: 'flex',
        flexDirection: 'column',
    },
    viewHorizontal: {
        display: 'flex',
        flexDirection: 'row',
    },
});
//# sourceMappingURL=View.js.map
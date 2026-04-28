"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialNavigationVirtualizedList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Node_1 = require("../Node");
const SpatialNavigationVirtualizedListWithScroll_1 = require("./SpatialNavigationVirtualizedListWithScroll");
const TypedMemo_1 = require("../../helpers/TypedMemo");
const TypedForwardRef_1 = require("../../helpers/TypedForwardRef");
/**
 * Use this component to render horizontally or vertically virtualized lists with spatial navigation
 * This component wraps the virtualized list inside a parent navigation node.
 * */
exports.SpatialNavigationVirtualizedList = (0, TypedMemo_1.typedMemo)((0, TypedForwardRef_1.typedForwardRef)((props, ref) => {
    var _a, _b;
    return ((0, jsx_runtime_1.jsx)(Node_1.SpatialNavigationNode, { alignInGrid: (_a = props.isGrid) !== null && _a !== void 0 ? _a : false, orientation: (_b = props.orientation) !== null && _b !== void 0 ? _b : 'horizontal', children: (0, jsx_runtime_1.jsx)(SpatialNavigationVirtualizedListWithScroll_1.SpatialNavigationVirtualizedListWithScroll, Object.assign({}, props, { ref: ref })) }));
}));
exports.SpatialNavigationVirtualizedList.displayName = 'SpatialNavigationVirtualizedList';
//# sourceMappingURL=SpatialNavigationVirtualizedList.js.map
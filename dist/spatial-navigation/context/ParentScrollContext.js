"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpatialNavigatorParentScroll = exports.SpatialNavigatorParentScrollContext = void 0;
const react_1 = require("react");
exports.SpatialNavigatorParentScrollContext = (0, react_1.createContext)(() => { });
const useSpatialNavigatorParentScroll = () => {
    const scrollToNodeIfNeeded = (0, react_1.useContext)(exports.SpatialNavigatorParentScrollContext);
    return { scrollToNodeIfNeeded };
};
exports.useSpatialNavigatorParentScroll = useSpatialNavigatorParentScroll;
//# sourceMappingURL=ParentScrollContext.js.map
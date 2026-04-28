"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpatialNavigator = exports.SpatialNavigatorContext = void 0;
const react_1 = require("react");
exports.SpatialNavigatorContext = (0, react_1.createContext)(null);
const useSpatialNavigator = () => {
    const spatialNavigator = (0, react_1.useContext)(exports.SpatialNavigatorContext);
    if (!spatialNavigator)
        throw new Error('No registered spatial navigator on this page. Use the <SpatialNavigationRoot /> component.');
    return spatialNavigator;
};
exports.useSpatialNavigator = useSpatialNavigator;
//# sourceMappingURL=SpatialNavigatorContext.js.map
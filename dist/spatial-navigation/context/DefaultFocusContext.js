"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFocus = exports.useSpatialNavigatorDefaultFocus = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SpatialNavigatorDefaultFocusContext = (0, react_1.createContext)(false);
const useSpatialNavigatorDefaultFocus = () => {
    const spatialNavigatorDefaultFocus = (0, react_1.useContext)(SpatialNavigatorDefaultFocusContext);
    return spatialNavigatorDefaultFocus;
};
exports.useSpatialNavigatorDefaultFocus = useSpatialNavigatorDefaultFocus;
const DefaultFocus = ({ children, enable = true }) => {
    return ((0, jsx_runtime_1.jsx)(SpatialNavigatorDefaultFocusContext.Provider, { value: enable, children: children }));
};
exports.DefaultFocus = DefaultFocus;
//# sourceMappingURL=DefaultFocusContext.js.map
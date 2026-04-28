"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialNavigationOverlay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Root_1 = require("../../../../../lib/src/spatial-navigation/components/Root");
const useLockOverlay_1 = require("./useLockOverlay");
const SpatialNavigationOverlay = ({ isModalVisible, hideModal, children, }) => {
    (0, useLockOverlay_1.useLockOverlay)({ isModalVisible, hideModal });
    return (0, jsx_runtime_1.jsx)(Root_1.SpatialNavigationRoot, { children: children });
};
exports.SpatialNavigationOverlay = SpatialNavigationOverlay;
//# sourceMappingURL=SpatialNavigationOverlay.js.map
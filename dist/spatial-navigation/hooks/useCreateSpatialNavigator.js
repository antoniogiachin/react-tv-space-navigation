"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateSpatialNavigator = void 0;
const SpatialNavigator_1 = __importDefault(require("../SpatialNavigator"));
const react_1 = require("react");
const useCreateSpatialNavigator = ({ onDirectionHandledWithoutMovementRef, }) => {
    const spatialNavigator = (0, react_1.useMemo)(() => new SpatialNavigator_1.default({
        onDirectionHandledWithoutMovementRef,
    }), 
    // This dependency should be safe and won't recreate a navigator every time since it's a ref
    [onDirectionHandledWithoutMovementRef]);
    return spatialNavigator;
};
exports.useCreateSpatialNavigator = useCreateSpatialNavigator;
//# sourceMappingURL=useCreateSpatialNavigator.js.map
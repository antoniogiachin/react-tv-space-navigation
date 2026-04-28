"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialNavigationRoot = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ParentIdContext_1 = require("../context/ParentIdContext");
const SpatialNavigatorContext_1 = require("../context/SpatialNavigatorContext");
const useCreateSpatialNavigator_1 = require("../hooks/useCreateSpatialNavigator");
const useRemoteControl_1 = require("../hooks/useRemoteControl");
const LockSpatialNavigationContext_1 = require("../context/LockSpatialNavigationContext");
const IsRootActiveContext_1 = require("../context/IsRootActiveContext");
const ROOT_ID = 'root';
const SpatialNavigationRoot = ({ isActive = true, onDirectionHandledWithoutMovement = () => undefined, children, }) => {
    // We can't follow the react philosophy here: we can't recreate a navigator if this function changes
    // so we'll have to store its ref and update the ref if there is a new value to this function
    const onDirectionHandledWithoutMovementRef = (0, react_1.useRef)(() => undefined);
    // Update the ref at every render
    onDirectionHandledWithoutMovementRef.current = onDirectionHandledWithoutMovement;
    const spatialNavigator = (0, useCreateSpatialNavigator_1.useCreateSpatialNavigator)({
        onDirectionHandledWithoutMovementRef,
    });
    const { isLocked, lockActions } = (0, LockSpatialNavigationContext_1.useIsLocked)();
    const isRootActive = isActive && !isLocked;
    (0, useRemoteControl_1.useRemoteControl)({ spatialNavigator, isActive: isRootActive });
    (0, react_1.useEffect)(() => {
        spatialNavigator.registerNode(ROOT_ID, { orientation: 'vertical' });
        return () => spatialNavigator.unregisterNode(ROOT_ID);
    }, [spatialNavigator]);
    return ((0, jsx_runtime_1.jsx)(SpatialNavigatorContext_1.SpatialNavigatorContext.Provider, { value: spatialNavigator, children: (0, jsx_runtime_1.jsx)(LockSpatialNavigationContext_1.LockSpatialNavigationContext.Provider, { value: lockActions, children: (0, jsx_runtime_1.jsx)(IsRootActiveContext_1.IsRootActiveContext.Provider, { value: isRootActive, children: (0, jsx_runtime_1.jsx)(ParentIdContext_1.ParentIdContext.Provider, { value: ROOT_ID, children: children }) }) }) }));
};
exports.SpatialNavigationRoot = SpatialNavigationRoot;
//# sourceMappingURL=Root.js.map
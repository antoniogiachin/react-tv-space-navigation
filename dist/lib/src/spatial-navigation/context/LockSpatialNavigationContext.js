"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLockSpatialNavigation = exports.LockSpatialNavigationContext = exports.useIsLocked = void 0;
const react_1 = require("react");
/**
 * We store the number of times that we have been asked to lock the navigator
 * to avoid any race conditions
 *
 * It's more reliable than a simple boolean
 */
const lockReducer = (state, action) => {
    switch (action) {
        case 'lock':
            return state + 1;
        case 'unlock':
            return state - 1;
        default:
            return state;
    }
};
const useIsLocked = () => {
    const [lockAmount, dispatch] = (0, react_1.useReducer)(lockReducer, 0);
    const lockActions = (0, react_1.useMemo)(() => ({
        lock: () => dispatch('lock'),
        unlock: () => dispatch('unlock'),
    }), [dispatch]);
    return {
        isLocked: lockAmount !== 0,
        lockActions,
    };
};
exports.useIsLocked = useIsLocked;
exports.LockSpatialNavigationContext = (0, react_1.createContext)({
    lock: () => undefined,
    unlock: () => undefined,
});
const useLockSpatialNavigation = () => {
    const { lock, unlock } = (0, react_1.useContext)(exports.LockSpatialNavigationContext);
    return { lock, unlock };
};
exports.useLockSpatialNavigation = useLockSpatialNavigation;
//# sourceMappingURL=LockSpatialNavigationContext.js.map
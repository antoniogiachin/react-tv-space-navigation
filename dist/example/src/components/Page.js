"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = require("@react-navigation/native");
const react_1 = require("react");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const MenuContext_1 = require("./Menu/MenuContext");
const react_native_1 = require("react-native");
const GoBackConfiguration_1 = require("./GoBackConfiguration");
/**
 * Locks/unlocks the navigator when the native keyboard is shown/hidden.
 * Allows for the native focus to take over when the keyboard is open,
 * and to go back to our own system when the keyboard is closed.
 */
const SpatialNavigationKeyboardLocker = () => {
    const lockActions = (0, react_tv_space_navigation_1.useLockSpatialNavigation)();
    (0, react_1.useEffect)(() => {
        const showSubscription = react_native_1.Keyboard.addListener('keyboardDidShow', () => {
            lockActions.lock();
        });
        const hideSubscription = react_native_1.Keyboard.addListener('keyboardDidHide', () => {
            lockActions.unlock();
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, [lockActions]);
    return null;
};
const Page = ({ children }) => {
    const isFocused = (0, native_1.useIsFocused)();
    const { isOpen: isMenuOpen, toggleMenu } = (0, MenuContext_1.useMenuContext)();
    const isActive = isFocused && !isMenuOpen;
    const onDirectionHandledWithoutMovement = (0, react_1.useCallback)((movement) => {
        if (movement === 'left') {
            toggleMenu(true);
        }
    }, [toggleMenu]);
    return ((0, jsx_runtime_1.jsxs)(react_tv_space_navigation_1.SpatialNavigationRoot, { isActive: isActive, onDirectionHandledWithoutMovement: onDirectionHandledWithoutMovement, children: [(0, jsx_runtime_1.jsx)(GoBackConfiguration_1.GoBackConfiguration, {}), (0, jsx_runtime_1.jsx)(SpatialNavigationKeyboardLocker, {}), children] }));
};
exports.Page = Page;
//# sourceMappingURL=Page.js.map
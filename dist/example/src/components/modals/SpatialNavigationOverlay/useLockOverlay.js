"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLockOverlay = void 0;
const react_1 = require("react");
const LockSpatialNavigationContext_1 = require("../../../../../lib/src/spatial-navigation/context/LockSpatialNavigationContext");
const useKey_1 = require("../../../hooks/useKey");
const SupportedKeys_1 = require("../../remote-control/SupportedKeys");
// This hook is used to lock the spatial navigation of parent navigator when a modal is open
// and to prevent the user from closing the modal by pressing the back button
const useLockOverlay = ({ isModalVisible, hideModal }) => {
    useLockParentSpatialNavigator(isModalVisible);
    usePreventNavigationGoBack(isModalVisible, hideModal);
};
exports.useLockOverlay = useLockOverlay;
const useLockParentSpatialNavigator = (isModalVisible) => {
    const { lock, unlock } = (0, LockSpatialNavigationContext_1.useLockSpatialNavigation)();
    (0, react_1.useEffect)(() => {
        if (isModalVisible) {
            lock();
            return () => {
                unlock();
            };
        }
    }, [isModalVisible, lock, unlock]);
};
const usePreventNavigationGoBack = (isModalVisible, hideModal) => {
    const hideModalListener = (0, react_1.useCallback)(() => {
        if (isModalVisible) {
            hideModal();
            return true;
        }
        return false;
    }, [isModalVisible, hideModal]);
    (0, useKey_1.useKey)(SupportedKeys_1.SupportedKeys.Back, hideModalListener);
};
//# sourceMappingURL=useLockOverlay.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRemoteControl = void 0;
const react_1 = require("react");
const configureRemoteControl_1 = require("../configureRemoteControl");
const DeviceContext_1 = require("../context/DeviceContext");
const useRemoteControl = ({ spatialNavigator, isActive, }) => {
    const { setDeviceType, setScrollingIntervalId: setScrollingId } = (0, DeviceContext_1.useSpatialNavigationDeviceType)();
    (0, react_1.useEffect)(() => {
        var _a;
        if (!(0, configureRemoteControl_1.getRemoteControlSubscriber)()) {
            console.warn('[React Spatial Navigation] You probably forgot to configure the remote control. Please call the configuration function.');
            return;
        }
        if (!isActive) {
            return () => undefined;
        }
        const listener = (_a = (0, configureRemoteControl_1.getRemoteControlSubscriber)()) === null || _a === void 0 ? void 0 : _a((direction) => {
            setDeviceType('remoteKeys');
            spatialNavigator.handleKeyDown(direction);
            setScrollingId(null);
        });
        return () => {
            var _a;
            if (!(0, configureRemoteControl_1.getRemoteControlUnsubscriber)()) {
                console.warn('[React Spatial Navigation] You did not provide a remote control unsubscriber. Are you sure you called configuration correctly?');
                return;
            }
            (_a = (0, configureRemoteControl_1.getRemoteControlUnsubscriber)()) === null || _a === void 0 ? void 0 : _a(listener);
        };
    }, [spatialNavigator, isActive, setDeviceType, setScrollingId]);
};
exports.useRemoteControl = useRemoteControl;
//# sourceMappingURL=useRemoteControl.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpatialNavigationDeviceType = exports.SpatialNavigationDeviceTypeProvider = exports.DeviceContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
exports.DeviceContext = (0, react_1.createContext)({
    deviceType: 'remoteKeys',
    deviceTypeRef: { current: 'remoteKeys' },
    setDeviceType: () => { },
    getScrollingIntervalId: () => null,
    setScrollingIntervalId: () => { },
});
const SpatialNavigationDeviceTypeProvider = ({ children }) => {
    const [deviceType, setDeviceTypeWithoutRef] = (0, react_1.useState)('remoteKeys');
    const deviceTypeRef = (0, react_1.useRef)(deviceType);
    const scrollingId = (0, react_1.useRef)(null);
    const setDeviceType = (0, react_1.useCallback)((deviceType) => {
        deviceTypeRef.current = deviceType;
        setDeviceTypeWithoutRef(deviceType);
    }, []);
    const setScrollingIntervalId = (0, react_1.useCallback)((id) => {
        if (scrollingId.current) {
            clearInterval(scrollingId.current);
        }
        scrollingId.current = id;
    }, []);
    const getScrollingIntervalId = (0, react_1.useCallback)(() => scrollingId.current, []);
    (0, react_1.useEffect)(() => {
        if (deviceType === 'remotePointer' || react_native_1.Platform.OS !== 'web')
            return;
        const callback = () => {
            setDeviceType('remotePointer');
        };
        window.addEventListener('mousemove', callback);
        return () => window.removeEventListener('mousemove', callback);
    }, [deviceType, setDeviceType]);
    const value = (0, react_1.useMemo)(() => ({
        deviceType,
        deviceTypeRef,
        setDeviceType,
        getScrollingIntervalId,
        setScrollingIntervalId,
    }), [deviceType, setDeviceType, getScrollingIntervalId, setScrollingIntervalId]);
    return (0, jsx_runtime_1.jsx)(exports.DeviceContext.Provider, { value: value, children: children });
};
exports.SpatialNavigationDeviceTypeProvider = SpatialNavigationDeviceTypeProvider;
const useSpatialNavigationDeviceType = () => (0, react_1.useContext)(exports.DeviceContext);
exports.useSpatialNavigationDeviceType = useSpatialNavigationDeviceType;
//# sourceMappingURL=DeviceContext.js.map
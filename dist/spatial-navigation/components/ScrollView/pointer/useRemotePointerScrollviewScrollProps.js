"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRemotePointerScrollviewScrollProps = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const DeviceContext_1 = require("../../../context/DeviceContext");
const useRemotePointerScrollviewScrollProps = ({ pointerScrollSpeed, scrollY, scrollViewRef, }) => {
    const { deviceType, deviceTypeRef, getScrollingIntervalId: getScrollingId, setScrollingIntervalId: setScrollingId, } = (0, DeviceContext_1.useSpatialNavigationDeviceType)();
    const onMouseEnterTop = (0, react_1.useCallback)(() => {
        if (deviceTypeRef.current === 'remotePointer') {
            let currentScrollPosition = scrollY.current;
            const id = setInterval(() => {
                var _a;
                currentScrollPosition -= pointerScrollSpeed;
                (_a = scrollViewRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                    y: currentScrollPosition,
                    animated: false,
                });
            }, 10);
            setScrollingId(id);
        }
    }, [deviceTypeRef, pointerScrollSpeed, scrollY, scrollViewRef, setScrollingId]);
    const onMouseEnterBottom = (0, react_1.useCallback)(() => {
        if (deviceTypeRef.current === 'remotePointer') {
            let currentScrollPosition = scrollY.current;
            const id = setInterval(() => {
                var _a;
                currentScrollPosition += pointerScrollSpeed;
                (_a = scrollViewRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                    y: currentScrollPosition,
                    animated: false,
                });
            }, 10);
            setScrollingId(id);
        }
    }, [deviceTypeRef, pointerScrollSpeed, scrollY, scrollViewRef, setScrollingId]);
    const onMouseLeave = (0, react_1.useCallback)(() => {
        if (deviceTypeRef.current === 'remotePointer') {
            const intervalId = getScrollingId();
            if (intervalId) {
                clearInterval(intervalId);
                setScrollingId(null);
            }
        }
    }, [deviceTypeRef, getScrollingId, setScrollingId]);
    const ascendingArrowProps = (0, react_1.useMemo)(() => react_native_1.Platform.select({
        web: { onMouseEnter: onMouseEnterBottom, onMouseLeave: onMouseLeave },
    }), [onMouseEnterBottom, onMouseLeave]);
    const descendingArrowProps = (0, react_1.useMemo)(() => react_native_1.Platform.select({
        web: { onMouseEnter: onMouseEnterTop, onMouseLeave: onMouseLeave },
    }), [onMouseEnterTop, onMouseLeave]);
    return {
        deviceType,
        deviceTypeRef,
        ascendingArrowProps,
        descendingArrowProps,
    };
};
exports.useRemotePointerScrollviewScrollProps = useRemotePointerScrollviewScrollProps;
//# sourceMappingURL=useRemotePointerScrollviewScrollProps.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTVPanEvent = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const panEventHandler_1 = require("./panEventHandler");
const useTVPanEvent = () => {
    (0, react_1.useEffect)(() => {
        react_native_1.TVEventControl.enableTVPanGesture();
        return () => {
            react_native_1.TVEventControl.disableTVPanGesture();
        };
    }, []);
    (0, react_native_1.useTVEventHandler)(panEventHandler_1.panEventHandler);
};
exports.useTVPanEvent = useTVPanEvent;
//# sourceMappingURL=useTVPanEvent.ios.js.map
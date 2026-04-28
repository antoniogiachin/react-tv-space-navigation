"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKey = void 0;
const react_1 = require("react");
const RemoteControlManager_1 = __importDefault(require("../components/remote-control/RemoteControlManager"));
/**
 * A convenient hook to listen to a key and react to it
 *
 * @example useKey(SupportedKeys.Back, () => { console.log('pressed back!') })
 */
const useKey = (key, callback) => {
    (0, react_1.useEffect)(() => {
        const remoteControlListener = (actualKey) => {
            if (actualKey !== key)
                return false;
            return callback(key);
        };
        RemoteControlManager_1.default.addKeydownListener(remoteControlListener);
        return () => RemoteControlManager_1.default.removeKeydownListener(remoteControlListener);
    }, [key, callback]);
};
exports.useKey = useKey;
//# sourceMappingURL=useKey.js.map
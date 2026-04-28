"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SupportedKeys_1 = require("./SupportedKeys");
const react_native_1 = require("react-native");
const CustomEventEmitter_1 = __importDefault(require("./CustomEventEmitter"));
class RemoteControlManager {
    constructor() {
        this.eventEmitter = new CustomEventEmitter_1.default();
        this.handleBackPress = () => {
            this.eventEmitter.emit('keyDown', SupportedKeys_1.SupportedKeys.Back);
            return false;
        };
        this.handleKeyDown = (evt) => {
            if (!evt)
                return;
            const mappedKey = {
                right: SupportedKeys_1.SupportedKeys.Right,
                left: SupportedKeys_1.SupportedKeys.Left,
                up: SupportedKeys_1.SupportedKeys.Up,
                down: SupportedKeys_1.SupportedKeys.Down,
                select: SupportedKeys_1.SupportedKeys.Enter,
                longSelect: SupportedKeys_1.SupportedKeys.LongEnter,
            }[evt.eventType];
            if (!mappedKey) {
                return;
            }
            if (mappedKey === SupportedKeys_1.SupportedKeys.LongEnter && evt.eventKeyAction === 1) {
                return;
            }
            this.eventEmitter.emit('keyDown', mappedKey);
        };
        this.addKeydownListener = (listener) => {
            this.eventEmitter.on('keyDown', listener);
            return listener;
        };
        this.removeKeydownListener = (listener) => {
            this.eventEmitter.off('keyDown', listener);
        };
        this.emitKeyDown = (key) => {
            this.eventEmitter.emit('keyDown', key);
        };
        react_native_1.TVEventHandler.addListener(this.handleKeyDown);
        react_native_1.BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
}
exports.default = new RemoteControlManager();
//# sourceMappingURL=RemoteControlManager.native.js.map
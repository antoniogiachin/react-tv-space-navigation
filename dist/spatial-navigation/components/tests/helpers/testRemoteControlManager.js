"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedKeys = void 0;
const react_native_1 = require("@testing-library/react-native");
const mitt_1 = __importDefault(require("mitt"));
var SupportedKeys;
(function (SupportedKeys) {
    SupportedKeys["Up"] = "Up";
    SupportedKeys["Down"] = "Down";
    SupportedKeys["Left"] = "Left";
    SupportedKeys["Right"] = "Right";
    SupportedKeys["Enter"] = "Enter";
    SupportedKeys["Back"] = "Back";
})(SupportedKeys || (exports.SupportedKeys = SupportedKeys = {}));
class TestRemoteControlManager {
    constructor() {
        this.eventEmitter = (0, mitt_1.default)();
        this.handleUp = () => {
            (0, react_native_1.act)(() => {
                this.eventEmitter.emit('keyDown', SupportedKeys.Up);
                jest.runAllTimers();
            });
            (0, react_native_1.act)(() => jest.runAllTimers());
        };
        this.handleDown = () => {
            (0, react_native_1.act)(() => {
                this.eventEmitter.emit('keyDown', SupportedKeys.Down);
            });
            (0, react_native_1.act)(() => jest.runAllTimers());
        };
        this.handleLeft = () => {
            (0, react_native_1.act)(() => {
                this.eventEmitter.emit('keyDown', SupportedKeys.Left);
            });
            (0, react_native_1.act)(() => jest.runAllTimers());
        };
        this.handleRight = () => {
            (0, react_native_1.act)(() => {
                this.eventEmitter.emit('keyDown', SupportedKeys.Right);
            });
            (0, react_native_1.act)(() => jest.runAllTimers());
        };
        this.handleEnter = () => {
            (0, react_native_1.act)(() => {
                this.eventEmitter.emit('keyDown', SupportedKeys.Enter);
            });
            (0, react_native_1.act)(() => jest.runAllTimers());
        };
        this.handleBackSpace = () => {
            (0, react_native_1.act)(() => {
                this.eventEmitter.emit('keyDown', SupportedKeys.Back);
            });
            (0, react_native_1.act)(() => jest.runAllTimers());
        };
        this.addKeydownListener = (listener) => {
            this.eventEmitter.on('keyDown', listener);
            return listener;
        };
        this.removeKeydownListener = (listener) => {
            this.eventEmitter.off('keyDown', listener);
        };
    }
}
exports.default = new TestRemoteControlManager();
//# sourceMappingURL=testRemoteControlManager.js.map
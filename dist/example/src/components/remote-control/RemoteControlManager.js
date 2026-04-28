"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SupportedKeys_1 = require("./SupportedKeys");
const CustomEventEmitter_1 = __importDefault(require("./CustomEventEmitter"));
const LONG_PRESS_DURATION = 500;
class RemoteControlManager {
    constructor() {
        this.eventEmitter = new CustomEventEmitter_1.default();
        this.isEnterKeyDown = false;
        this.longEnterTimeout = null;
        this.handleLongEnter = () => {
            this.longEnterTimeout = setTimeout(() => {
                this.eventEmitter.emit('keyDown', SupportedKeys_1.SupportedKeys.LongEnter);
                this.longEnterTimeout = null;
            }, LONG_PRESS_DURATION);
        };
        this.handleKeyDown = (event) => {
            const mappedKey = {
                ArrowRight: SupportedKeys_1.SupportedKeys.Right,
                ArrowLeft: SupportedKeys_1.SupportedKeys.Left,
                ArrowUp: SupportedKeys_1.SupportedKeys.Up,
                ArrowDown: SupportedKeys_1.SupportedKeys.Down,
                Enter: SupportedKeys_1.SupportedKeys.Enter,
                Backspace: SupportedKeys_1.SupportedKeys.Back,
            }[event.code];
            if (!mappedKey) {
                return;
            }
            if (mappedKey === SupportedKeys_1.SupportedKeys.Enter) {
                if (!this.isEnterKeyDown) {
                    this.isEnterKeyDown = true;
                    this.handleLongEnter();
                }
                return;
            }
            this.eventEmitter.emit('keyDown', mappedKey);
        };
        this.handleKeyUp = (event) => {
            const mappedKey = {
                Enter: SupportedKeys_1.SupportedKeys.Enter,
            }[event.code];
            if (!mappedKey) {
                return;
            }
            if (mappedKey === SupportedKeys_1.SupportedKeys.Enter) {
                this.isEnterKeyDown = false;
                if (this.longEnterTimeout) {
                    clearTimeout(this.longEnterTimeout);
                    this.eventEmitter.emit('keyDown', mappedKey);
                }
            }
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
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }
}
exports.default = new RemoteControlManager();
//# sourceMappingURL=RemoteControlManager.js.map
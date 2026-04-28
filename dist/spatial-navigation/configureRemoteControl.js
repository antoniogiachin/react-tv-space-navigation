"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRemoteControlUnsubscriber = exports.getRemoteControlSubscriber = exports.configureRemoteControl = void 0;
const config = {};
const configureRemoteControl = (options) => {
    config.remoteControlSubscriber = options.remoteControlSubscriber;
    config.remoteControlUnsubscriber = options.remoteControlUnsubscriber;
};
exports.configureRemoteControl = configureRemoteControl;
const getRemoteControlSubscriber = () => config.remoteControlSubscriber;
exports.getRemoteControlSubscriber = getRemoteControlSubscriber;
const getRemoteControlUnsubscriber = () => config.remoteControlUnsubscriber;
exports.getRemoteControlUnsubscriber = getRemoteControlUnsubscriber;
//# sourceMappingURL=configureRemoteControl.js.map
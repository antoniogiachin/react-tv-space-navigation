"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../../../../lib/src");
const testRemoteControlManager_1 = __importStar(require("./testRemoteControlManager"));
src_1.SpatialNavigation.configureRemoteControl({
    remoteControlSubscriber: (callback) => {
        const mapping = {
            [testRemoteControlManager_1.SupportedKeys.Right]: src_1.Directions.RIGHT,
            [testRemoteControlManager_1.SupportedKeys.Left]: src_1.Directions.LEFT,
            [testRemoteControlManager_1.SupportedKeys.Up]: src_1.Directions.UP,
            [testRemoteControlManager_1.SupportedKeys.Down]: src_1.Directions.DOWN,
            [testRemoteControlManager_1.SupportedKeys.Enter]: src_1.Directions.ENTER,
            [testRemoteControlManager_1.SupportedKeys.Back]: null,
        };
        const remoteControlListener = (keyEvent) => {
            callback(mapping[keyEvent]);
            return false;
        };
        return testRemoteControlManager_1.default.addKeydownListener(remoteControlListener);
    },
    remoteControlUnsubscriber: (remoteControlListener) => {
        testRemoteControlManager_1.default.removeKeydownListener(remoteControlListener);
    },
});
//# sourceMappingURL=configureTestRemoteControl.js.map
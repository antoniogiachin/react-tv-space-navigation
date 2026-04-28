"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.panEventHandler = void 0;
const throttle_1 = require("../../utils/throttle");
const PanEvent_1 = __importDefault(require("./PanEvent"));
const PanEvent_constants_1 = require("./PanEvent.constants");
const myPanEvent = new PanEvent_1.default();
const panEventHandler = (event) => {
    (0, throttle_1.throttle)(() => {
        if (event.eventType === 'pan') {
            if (!event.body)
                return;
            if (event.body.state === 'Began') {
                myPanEvent.reset();
            }
            if (event.body.state === 'Changed') {
                myPanEvent.handlePanEvent({ x: event.body.x, y: event.body.y });
            }
        }
    }, PanEvent_constants_1.THROTTLE_DELAY_MS)();
};
exports.panEventHandler = panEventHandler;
//# sourceMappingURL=panEventHandler.js.map
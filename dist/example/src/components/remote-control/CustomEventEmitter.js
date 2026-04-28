"use strict";
/**
 * This event emitter is a minimal reimplementation of `mitt` with the support of stoppable event propagation
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CustomEventEmitter {
    constructor() {
        this.handlers = new Map();
        this.on = (eventType, handler) => {
            const eventTypeHandlers = this.handlers.get(eventType);
            if (!Array.isArray(eventTypeHandlers))
                this.handlers.set(eventType, [handler]);
            else
                eventTypeHandlers.push(handler);
        };
        this.off = (eventType, handler) => {
            this.handlers.set(eventType, 
            // @ts-expect-error TODO fix the type error
            this.handlers.get(eventType).filter((h) => h !== handler));
        };
        this.emit = (eventType, evt) => {
            const eventTypeHandlers = this.handlers.get(eventType);
            // @ts-expect-error TODO fix the type error
            for (let index = eventTypeHandlers.length - 1; index >= 0; index--) {
                // @ts-expect-error TODO fix the type error
                const handler = eventTypeHandlers[index];
                // @ts-expect-error TODO fix the type error
                if (handler(evt)) {
                    return;
                }
            }
        };
    }
}
exports.default = CustomEventEmitter;
//# sourceMappingURL=CustomEventEmitter.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
const throttle = (callback, delay) => {
    let wait = false;
    return (...args) => {
        if (wait) {
            return;
        }
        callback(...args);
        wait = true;
        setTimeout(() => {
            wait = false;
        }, delay);
    };
};
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = void 0;
const repeat = (callback, delay, repetitions) => {
    let repeatsLeft = repetitions;
    const interval = setInterval(() => {
        if (repeatsLeft === 0) {
            clearInterval(interval);
            return;
        }
        callback();
        repeatsLeft--;
    }, delay);
};
exports.repeat = repeat;
//# sourceMappingURL=repeat.js.map
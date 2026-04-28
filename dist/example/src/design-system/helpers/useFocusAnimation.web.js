"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocusAnimation = void 0;
const useFocusAnimation = (isFocused) => {
    return {
        transition: 'transform 0.4s ease-in-out',
        transform: [{ scale: isFocused ? 1.1 : 1 }],
    };
};
exports.useFocusAnimation = useFocusAnimation;
//# sourceMappingURL=useFocusAnimation.web.js.map
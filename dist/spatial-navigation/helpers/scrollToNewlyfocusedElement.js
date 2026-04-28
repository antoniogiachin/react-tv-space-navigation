"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollToNewlyFocusedElement = void 0;
const scrollToNewlyFocusedElement = ({ newlyFocusedElementDistanceToLeftRelativeToLayout, newlyFocusedElementDistanceToTopRelativeToLayout, horizontal, offsetFromStart, scrollViewRef, }) => {
    var _a, _b;
    if (horizontal) {
        (_a = scrollViewRef === null || scrollViewRef === void 0 ? void 0 : scrollViewRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
            x: newlyFocusedElementDistanceToLeftRelativeToLayout - offsetFromStart,
            // @todo make this a props of the component
            animated: true,
        });
    }
    else {
        (_b = scrollViewRef === null || scrollViewRef === void 0 ? void 0 : scrollViewRef.current) === null || _b === void 0 ? void 0 : _b.scrollTo({
            y: newlyFocusedElementDistanceToTopRelativeToLayout - offsetFromStart,
            // @todo make this a props of the component
            animated: true,
        });
    }
};
exports.scrollToNewlyFocusedElement = scrollToNewlyFocusedElement;
//# sourceMappingURL=scrollToNewlyfocusedElement.js.map
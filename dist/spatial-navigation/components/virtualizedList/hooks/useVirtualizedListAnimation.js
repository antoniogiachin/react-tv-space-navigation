"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebVirtualizedListAnimation = exports.useVirtualizedListAnimation = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const useVirtualizedListAnimation = ({ currentlyFocusedItemIndex, vertical = false, scrollDuration, scrollOffsetsArray, }) => {
    const translation = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    const newTranslationValue = scrollOffsetsArray[currentlyFocusedItemIndex];
    (0, react_1.useEffect)(() => {
        react_native_1.Animated.timing(translation, {
            toValue: newTranslationValue,
            duration: scrollDuration,
            useNativeDriver: true,
            easing: react_native_1.Easing.out(react_native_1.Easing.sin),
        }).start();
    }, [translation, newTranslationValue, scrollDuration]);
    return {
        transform: [vertical ? { translateY: translation } : { translateX: translation }],
    };
};
exports.useVirtualizedListAnimation = useVirtualizedListAnimation;
const useWebVirtualizedListAnimation = ({ currentlyFocusedItemIndex, vertical = false, scrollDuration, scrollOffsetsArray, }) => {
    const animationDuration = `${scrollDuration}ms`;
    const newTranslationValue = scrollOffsetsArray[currentlyFocusedItemIndex];
    return {
        transitionDuration: animationDuration,
        transitionProperty: 'transform',
        transitionTimingFunction: 'ease-out',
        transform: [
            vertical ? { translateY: newTranslationValue } : { translateX: newTranslationValue },
        ],
    };
};
exports.useWebVirtualizedListAnimation = useWebVirtualizedListAnimation;
//# sourceMappingURL=useVirtualizedListAnimation.js.map
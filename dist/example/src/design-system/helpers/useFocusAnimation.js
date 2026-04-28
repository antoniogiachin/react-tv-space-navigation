"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocusAnimation = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const useFocusAnimation = (isFocused) => {
    const scaleAnimation = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useEffect)(() => {
        react_native_1.Animated.spring(scaleAnimation, {
            toValue: isFocused ? 1.1 : 1,
            useNativeDriver: true,
            damping: 10,
            stiffness: 100,
        }).start();
    }, [isFocused, scaleAnimation]);
    return { transform: [{ scale: scaleAnimation }] };
};
exports.useFocusAnimation = useFocusAnimation;
//# sourceMappingURL=useFocusAnimation.js.map
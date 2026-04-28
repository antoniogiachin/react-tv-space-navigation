"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRotateAnimation = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const useRotateAnimation = () => {
    const rotationZ = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    const rotate360 = () => {
        react_native_1.Animated.timing(rotationZ, {
            toValue: 360,
            duration: 1000, // Adjust duration as needed
            useNativeDriver: true,
        }).start(() => {
            rotationZ.setValue(0); // Reset to 0 after completing a full rotation
        });
    };
    const animatedStyle = {
        transform: [
            {
                rotateZ: rotationZ.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                }),
            },
        ],
    };
    return { rotate360, animatedStyle };
};
exports.useRotateAnimation = useRotateAnimation;
//# sourceMappingURL=useRotateAnimation.js.map
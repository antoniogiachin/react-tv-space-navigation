"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyle = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const useStyleNative = (horizontal, scroll, scrollDuration) => {
    const animation = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useEffect)(() => {
        react_native_1.Animated.timing(animation, {
            toValue: -scroll,
            duration: scrollDuration,
            useNativeDriver: true,
        }).start();
    }, [animation, scroll, scrollDuration]);
    return {
        transform: [horizontal ? { translateX: animation } : { translateY: animation }],
    };
};
const useStyleWeb = (horizontal, scroll, scrollDuration) => {
    return [
        {
            transform: [horizontal ? { translateX: -scroll } : { translateY: -scroll }],
        },
        {
            transitionDuration: `${scrollDuration}ms`,
            transitionProperty: 'transform',
            transitionTimingFunction: 'ease-out',
            transform: [horizontal ? { translateX: -scroll } : { translateY: -scroll }],
        },
    ];
};
const useStyle = (horizontal, scroll, scrollDuration) => {
    if (react_native_1.Platform.OS === 'web') {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- it's okay because Platform.OS is a constant
        return useStyleWeb(horizontal, scroll, scrollDuration);
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks -- it's okay because Platform.OS is a constant
    return useStyleNative(horizontal, scroll, scrollDuration);
};
exports.useStyle = useStyle;
//# sourceMappingURL=CustomScrollView.hooks.js.map
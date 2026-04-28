import { Animated } from 'react-native';
export declare const useStyle: (horizontal: boolean, scroll: number, scrollDuration: number) => ({
    transform: ({
        translateX: number;
        translateY?: undefined;
    } | {
        translateY: number;
        translateX?: undefined;
    })[];
    transitionDuration?: undefined;
    transitionProperty?: undefined;
    transitionTimingFunction?: undefined;
} | {
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction: string;
    transform: ({
        translateX: number;
        translateY?: undefined;
    } | {
        translateY: number;
        translateX?: undefined;
    })[];
})[] | {
    transform: ({
        translateX: Animated.Value;
        translateY?: undefined;
    } | {
        translateY: Animated.Value;
        translateX?: undefined;
    })[];
};

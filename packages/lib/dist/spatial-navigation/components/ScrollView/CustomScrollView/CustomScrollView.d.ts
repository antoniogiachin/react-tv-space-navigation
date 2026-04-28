import { ViewStyle } from 'react-native';
import { CustomScrollViewRef } from '../types';
type Props = {
    horizontal?: boolean;
    children: React.ReactNode;
    style?: ViewStyle;
    contentContainerStyle?: ViewStyle;
    scrollDuration?: number;
    onScroll?: (event: {
        nativeEvent: {
            contentOffset: {
                y: number;
                x: number;
            };
        };
    }) => void;
    testID?: string;
};
export declare const CustomScrollView: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<CustomScrollViewRef>>;
export {};

import React from 'react';
import { ViewStyle } from 'react-native';
import { CustomScrollViewRef } from './types';
type Props = {
    useNativeScroll: boolean;
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
export declare const AnyScrollView: React.ForwardRefExoticComponent<Props & React.RefAttributes<CustomScrollViewRef>>;
export {};

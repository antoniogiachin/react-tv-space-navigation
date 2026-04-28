import React, { ReactElement, ReactNode } from 'react';
import { ViewStyle } from 'react-native';
export declare const PointerScrollArrows: React.MemoExoticComponent<({ ascendingArrow, descendingArrowProps, ascendingArrowContainerStyle, descendingArrow, ascendingArrowProps, descendingArrowContainerStyle, }: {
    ascendingArrow?: ReactElement;
    ascendingArrowProps?: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
    ascendingArrowContainerStyle?: ViewStyle;
    descendingArrow?: ReactNode;
    descendingArrowProps?: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
    descendingArrowContainerStyle?: ViewStyle;
}) => import("react/jsx-runtime").JSX.Element>;

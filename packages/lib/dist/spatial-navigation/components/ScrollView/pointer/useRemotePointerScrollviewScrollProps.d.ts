import React from 'react';
import { CustomScrollViewRef } from '../types';
export declare const useRemotePointerScrollviewScrollProps: ({ pointerScrollSpeed, scrollY, scrollViewRef, }: {
    pointerScrollSpeed: number;
    scrollY: React.MutableRefObject<number>;
    scrollViewRef: React.MutableRefObject<CustomScrollViewRef | null>;
}) => {
    deviceType: "remoteKeys" | "remotePointer";
    deviceTypeRef: React.MutableRefObject<"remoteKeys" | "remotePointer">;
    ascendingArrowProps: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    } | undefined;
    descendingArrowProps: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    } | undefined;
};

import { RefObject } from 'react';
import { CustomScrollViewRef } from '../components/ScrollView/types';
export type Props = {
    newlyFocusedElementDistanceToLeftRelativeToLayout: number;
    newlyFocusedElementDistanceToTopRelativeToLayout: number;
    horizontal?: boolean;
    offsetFromStart: number;
    scrollViewRef: RefObject<CustomScrollViewRef | null>;
};
export declare const scrollToNewlyFocusedElement: ({ newlyFocusedElementDistanceToLeftRelativeToLayout, newlyFocusedElementDistanceToTopRelativeToLayout, horizontal, offsetFromStart, scrollViewRef, }: Props) => void;

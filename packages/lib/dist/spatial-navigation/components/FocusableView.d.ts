import { FocusableNodeState } from './Node';
import { ViewStyle, ViewProps } from 'react-native';
import { SpatialNavigationNodeRef } from '../types/SpatialNavigationNodeRef';
type FocusableViewProps = {
    style?: ViewStyle;
    children: React.ReactElement | ((props: FocusableNodeState) => React.ReactElement);
    viewProps?: ViewProps & {
        onMouseEnter?: () => void;
    };
};
export declare const SpatialNavigationFocusableView: import("react").ForwardRefExoticComponent<{
    onFocus?: () => void;
    onBlur?: () => void;
    onSelect?: () => void;
    onLongSelect?: () => void;
    onActive?: () => void;
    onInactive?: () => void;
    orientation?: import("../types/orientation").NodeOrientation;
    alignInGrid?: boolean;
    indexRange?: import("@bam.tech/lrud").NodeIndexRange;
    additionalOffset?: number;
} & FocusableViewProps & import("react").RefAttributes<SpatialNavigationNodeRef>>;
export {};

import React from 'react';
import { NodeOrientation } from '../types/orientation';
import { NodeIndexRange } from '@bam.tech/lrud';
import { SpatialNavigationNodeRef } from '../types/SpatialNavigationNodeRef';
type NonFocusableNodeState = {
    /** Returns whether the root is active or not. An active node is active if one of its children is focused. */
    isActive: boolean;
    /** Returns whether the root is active or not.
     * This is very handy if you want to hide the focus on your page elements when
     * the side-menu is focused (since it is a different root navigator) */
    isRootActive: boolean;
};
export type FocusableNodeState = NonFocusableNodeState & {
    /** Returns whether the root is focused or not. */
    isFocused: boolean;
};
type FocusableProps = {
    isFocusable: true;
    children: (props: FocusableNodeState) => React.ReactElement;
};
type NonFocusableProps = {
    isFocusable?: false;
    children: React.ReactElement | ((props: NonFocusableNodeState) => React.ReactElement);
};
type DefaultProps = {
    onFocus?: () => void;
    onBlur?: () => void;
    onSelect?: () => void;
    onLongSelect?: () => void;
    onActive?: () => void;
    onInactive?: () => void;
    orientation?: NodeOrientation;
    /** Use this for grid alignment.
     * @see LRUD docs */
    alignInGrid?: boolean;
    indexRange?: NodeIndexRange;
    /**
     * This is an additional offset useful only for the scrollview. It adds up to the offsetFromStart of the scrollview.
     */
    additionalOffset?: number;
};
type Props = DefaultProps & (FocusableProps | NonFocusableProps);
export type SpatialNavigationNodeDefaultProps = DefaultProps;
export declare const SpatialNavigationNode: React.ForwardRefExoticComponent<Props & React.RefAttributes<SpatialNavigationNodeRef>>;
export {};

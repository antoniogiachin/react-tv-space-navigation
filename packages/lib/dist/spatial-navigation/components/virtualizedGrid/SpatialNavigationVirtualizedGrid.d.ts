import React from 'react';
import { ViewStyle } from 'react-native';
import { PointerScrollProps, SpatialNavigationVirtualizedListWithScrollProps } from '../virtualizedList/SpatialNavigationVirtualizedListWithScroll';
import { SpatialNavigationVirtualizedGridRef } from '../../types/SpatialNavigationVirtualizedGridRef';
export type GridRowType<T> = {
    items: T[];
};
/**
 * Use this component to render spatially navigable grids of items.
 * Grids only support vertical orientation (vertically scrollable),
 * but you can navigate between elements in any direction.
 *
 * A grid is a series of horizontal rows rendering 'numberOfColumns' items.
 *
 * ```
 * ┌───────────────────────────────────────────────────┐
 * │                  Screen                           │
 * │                                                   │
 * │ ┌───────────────────────────────────────────────┐ │
 * │ │ Row1                                          │ │
 * │ │                                               │ │
 * │ │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │ │
 * │ │ │      │ │      │ │      │ │      │ │      │  │ │
 * │ │ │  A   │ │  B   │ │  C   │ │  D   │ │   E  │  │ │
 * │ │ │      │ │      │ │      │ │      │ │      │  │ │
 * │ │ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘  │ │
 * │ │                                               │ │
 * │ └───────────────────────────────────────────────┘ │
 * │                                                   │
 * │ ┌───────────────────────────────────────────────┐ │
 * │ │ Row2                                          │ │
 * │ │                                               │ │
 * │ │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │ │
 * │ │ │      │ │      │ │      │ │      │ │      │  │ │
 * │ │ │   A  │ │  B   │ │  C   │ │  D   │ │  E   │  │ │
 * │ │ │      │ │      │ │      │ │      │ │      │  │ │
 * │ │ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘  │ │
 * │ │                                               │ │
 * │ └───────────────────────────────────────────────┘ │
 * │                                                   │
 * └───────────────────────────────────────────────────┘
 *   ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
 *     Row3                                          │
 *   │
 *     ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
 *   │ │      │ │      │ │      │ │      │ │      │
 *     │   A  │ │  B   │ │  C   │ │  D   │ │  E   │  │
 *   │ │      │ │      │ │      │ │      │ │      │
 *     └──────┘ └──────┘ └──────┘ └──────┘ └──────┘  │
 *   │
 *   └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
 * ```
 * The row framed in dotted lines corresponds to a virtualized component.
 * There is no virtualization inside rows.
 */
export declare const SpatialNavigationVirtualizedGrid: (<T>(props: Pick<SpatialNavigationVirtualizedListWithScrollProps<T>, "data" | "style" | "testID" | "scrollDuration" | "renderItem" | "onEndReached" | "nbMaxOfItems" | "scrollBehavior"> & PointerScrollProps & {
    itemHeight: number;
    header?: JSX.Element;
    headerSize?: number;
    /** How many rows are RENDERED ADDITIONALLY to those already visible (impacts virtualization size) */
    additionalRenderedRows?: number;
    /** Number of rows left to display before triggering onEndReached */
    onEndReachedThresholdRowsNumber?: number;
    /** Number of columns in the grid OR number of items per rows */
    numberOfColumns: number;
    /** Used to modify every row style */
    rowContainerStyle?: ViewStyle;
    ref?: React.RefObject<SpatialNavigationVirtualizedGridRef>;
} & React.RefAttributes<import("../../..").SpatialNavigationVirtualizedListRef>) => React.ReactElement | null) & {
    displayName?: string;
};

import { PointerScrollProps, SpatialNavigationVirtualizedListWithScrollProps } from './SpatialNavigationVirtualizedListWithScroll';
import { SpatialNavigationVirtualizedListRef } from '../../types/SpatialNavigationVirtualizedListRef';
/**
 * Use this component to render horizontally or vertically virtualized lists with spatial navigation
 * This component wraps the virtualized list inside a parent navigation node.
 * */
export declare const SpatialNavigationVirtualizedList: (<T>(props: SpatialNavigationVirtualizedListWithScrollProps<T> & PointerScrollProps & import("react").RefAttributes<SpatialNavigationVirtualizedListRef>) => import("react").ReactElement | null) & {
    displayName?: string;
};

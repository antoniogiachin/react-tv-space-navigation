import { GridRowType } from '../SpatialNavigationVirtualizedGrid';
import { NodeOrientation } from '../../../types/orientation';
export declare const convertToGrid: <T>(data: T[], numberOfColumns: number, header?: JSX.Element) => GridRowType<T>[];
export declare const invertOrientation: (orientation: NodeOrientation) => NodeOrientation;

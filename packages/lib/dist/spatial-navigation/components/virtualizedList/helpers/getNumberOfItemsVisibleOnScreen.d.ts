export declare const getNumberOfItemsVisibleOnScreen: <T>({ data, listSizeInPx, itemSize, }: {
    data: T[];
    listSizeInPx: number;
    itemSize: number | ((item: T) => number);
}) => number;

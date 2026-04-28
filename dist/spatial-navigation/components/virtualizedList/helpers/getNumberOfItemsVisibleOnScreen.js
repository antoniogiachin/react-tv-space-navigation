"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberOfItemsVisibleOnScreen = void 0;
const getMinSizeOfItems = ({ data, itemSize, }) => {
    if (typeof itemSize === 'number') {
        return itemSize;
    }
    if (data.length === 0) {
        return 0;
    }
    const firstElementSize = itemSize(data[0]);
    const minSize = data.reduce((smallestSize, item) => {
        const currentSize = itemSize(item);
        if (currentSize < smallestSize)
            return currentSize;
        return smallestSize;
    }, firstElementSize);
    if (minSize === 0) {
        console.warn('The size of the smallest item in the list is 0. The list will appear empty.');
    }
    return minSize;
};
const getNumberOfItemsVisibleOnScreen = ({ data, listSizeInPx, itemSize, }) => {
    if (data.length === 0) {
        return 0;
    }
    const itemSizeToComputeRanges = getMinSizeOfItems({ data, itemSize });
    if (!itemSizeToComputeRanges) {
        return 0;
    }
    if (itemSizeToComputeRanges === 0) {
        console.warn('The size of the smallest item in the list is 0. The list will appear empty.');
        return 0;
    }
    return Math.floor(listSizeInPx / itemSizeToComputeRanges);
};
exports.getNumberOfItemsVisibleOnScreen = getNumberOfItemsVisibleOnScreen;
//# sourceMappingURL=getNumberOfItemsVisibleOnScreen.js.map
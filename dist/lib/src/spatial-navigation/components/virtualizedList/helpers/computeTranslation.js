"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeTranslation = void 0;
const getSizeInPxFromOneItemToAnother_1 = require("./getSizeInPxFromOneItemToAnother");
const computeStickToStartTranslation = ({ currentlyFocusedItemIndex, itemSizeInPx, data, maxPossibleLeftAlignedIndex, }) => {
    const scrollOffset = currentlyFocusedItemIndex < maxPossibleLeftAlignedIndex
        ? (0, getSizeInPxFromOneItemToAnother_1.getSizeInPxFromOneItemToAnother)(data, itemSizeInPx, 0, currentlyFocusedItemIndex)
        : (0, getSizeInPxFromOneItemToAnother_1.getSizeInPxFromOneItemToAnother)(data, itemSizeInPx, 0, maxPossibleLeftAlignedIndex);
    return -scrollOffset;
};
const computeStickToEndTranslation = ({ currentlyFocusedItemIndex, itemSizeInPx, data, listSizeInPx, maxPossibleRightAlignedIndex, }) => {
    if (currentlyFocusedItemIndex <= maxPossibleRightAlignedIndex)
        return -0;
    const currentlyFocusedItemSize = typeof itemSizeInPx === 'function'
        ? itemSizeInPx(data[currentlyFocusedItemIndex])
        : itemSizeInPx;
    const sizeOfListFromStartToCurrentlyFocusedItem = (0, getSizeInPxFromOneItemToAnother_1.getSizeInPxFromOneItemToAnother)(data, itemSizeInPx, 0, currentlyFocusedItemIndex);
    const scrollOffset = sizeOfListFromStartToCurrentlyFocusedItem + currentlyFocusedItemSize - listSizeInPx;
    return -scrollOffset;
};
const computeJumpOnScrollTranslation = ({ currentlyFocusedItemIndex, itemSizeInPx, nbMaxOfItems, numberOfItemsVisibleOnScreen, }) => {
    if (typeof itemSizeInPx === 'function')
        throw new Error('jump-on-scroll scroll behavior is not supported with dynamic item size');
    const maxPossibleLeftAlignedIndex = Math.max(nbMaxOfItems - numberOfItemsVisibleOnScreen, 0);
    const indexOfItemToFocus = currentlyFocusedItemIndex - (currentlyFocusedItemIndex % numberOfItemsVisibleOnScreen);
    const leftAlignedIndex = Math.min(indexOfItemToFocus, maxPossibleLeftAlignedIndex);
    const scrollOffset = leftAlignedIndex * itemSizeInPx;
    return -scrollOffset;
};
const computeTranslation = ({ currentlyFocusedItemIndex, itemSizeInPx, nbMaxOfItems, numberOfItemsVisibleOnScreen, scrollBehavior, data, listSizeInPx, maxPossibleLeftAlignedIndex, maxPossibleRightAlignedIndex, }) => {
    switch (scrollBehavior) {
        case 'stick-to-start':
            return computeStickToStartTranslation({
                currentlyFocusedItemIndex,
                itemSizeInPx,
                data,
                maxPossibleLeftAlignedIndex,
            });
        case 'stick-to-end':
            return computeStickToEndTranslation({
                currentlyFocusedItemIndex,
                itemSizeInPx,
                data,
                listSizeInPx,
                maxPossibleRightAlignedIndex,
            });
        case 'jump-on-scroll':
            return computeJumpOnScrollTranslation({
                currentlyFocusedItemIndex,
                itemSizeInPx,
                nbMaxOfItems,
                numberOfItemsVisibleOnScreen,
            });
        default:
            throw new Error(`Invalid scroll behavior: ${scrollBehavior}`);
    }
};
exports.computeTranslation = computeTranslation;
//# sourceMappingURL=computeTranslation.js.map
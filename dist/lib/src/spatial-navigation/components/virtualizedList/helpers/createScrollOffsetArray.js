"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeAllScrollOffsets = void 0;
const computeTranslation_1 = require("./computeTranslation");
const getLastItemIndex_1 = require("./getLastItemIndex");
/**
 * This function precomputes all scroll offsets
 * It won't move until data moves or the itemSize changes
 */
const computeAllScrollOffsets = ({ itemSize, nbMaxOfItems, numberOfItemsVisibleOnScreen, scrollBehavior, data, listSizeInPx, }) => {
    const maxPossibleLeftAlignedIndex = (0, getLastItemIndex_1.getLastLeftItemIndex)(data, itemSize, listSizeInPx);
    const maxPossibleRightAlignedIndex = (0, getLastItemIndex_1.getLastRightItemIndex)(data, itemSize, listSizeInPx);
    const scrollOffsets = data.map((_, index) => (0, computeTranslation_1.computeTranslation)({
        currentlyFocusedItemIndex: index,
        itemSizeInPx: itemSize,
        nbMaxOfItems: nbMaxOfItems !== null && nbMaxOfItems !== void 0 ? nbMaxOfItems : data.length,
        numberOfItemsVisibleOnScreen: numberOfItemsVisibleOnScreen,
        scrollBehavior: scrollBehavior,
        data: data,
        listSizeInPx: listSizeInPx,
        maxPossibleLeftAlignedIndex: maxPossibleLeftAlignedIndex,
        maxPossibleRightAlignedIndex: maxPossibleRightAlignedIndex,
    }));
    return scrollOffsets;
};
exports.computeAllScrollOffsets = computeAllScrollOffsets;
//# sourceMappingURL=createScrollOffsetArray.js.map
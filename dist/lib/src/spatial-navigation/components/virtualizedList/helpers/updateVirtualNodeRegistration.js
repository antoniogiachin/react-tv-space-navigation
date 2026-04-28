"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVirtualNodeRegistration = void 0;
const registerNewNode = ({ currentItems, previousItems, addVirtualNode, }) => {
    currentItems.forEach((_, index) => {
        // Currently this is the only way to compare both array and to know which elements to add
        if (index > previousItems.length - 1) {
            addVirtualNode(index);
        }
    });
};
const unregisterOldNode = ({ currentItems, previousItems, removeVirtualNode, }) => {
    for (let index = previousItems.length - 1; index > currentItems.length - 1; index--) {
        removeVirtualNode(index);
    }
};
/**
 * This function aims to compare 2 arrays of items : currentItems and previousItems and :
 * - addVirtualNode for every item from currentItems that weren't in previousItems
 * - removeVirtualNode for every item from previousItems that aren't there anymore in currentItems
 * - re-order all the items
 * For now it only does the Step 1.
 */
const updateVirtualNodeRegistration = ({ currentItems, previousItems, addVirtualNode, removeVirtualNode, }) => {
    // Step 1 : addVirtualNode for every item from currentItems that weren't in previousItems
    registerNewNode({ currentItems, previousItems, addVirtualNode });
    // Step 2 : removeVirtualNode for every from previousItems that aren't there anymore in currentItems
    unregisterOldNode({ currentItems, previousItems, removeVirtualNode });
};
exports.updateVirtualNodeRegistration = updateVirtualNodeRegistration;
//# sourceMappingURL=updateVirtualNodeRegistration.js.map
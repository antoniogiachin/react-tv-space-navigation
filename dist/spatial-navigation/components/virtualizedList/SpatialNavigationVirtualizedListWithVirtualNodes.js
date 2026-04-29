"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialNavigationVirtualizedListWithVirtualNodes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lodash_uniqueid_1 = __importDefault(require("lodash.uniqueid"));
const react_1 = require("react");
const SpatialNavigatorContext_1 = require("../../context/SpatialNavigatorContext");
const ParentIdContext_1 = require("../../context/ParentIdContext");
const updateVirtualNodeRegistration_1 = require("./helpers/updateVirtualNodeRegistration");
const TypedMemo_1 = require("../../helpers/TypedMemo");
const useCachedValues_1 = require("./hooks/useCachedValues");
const convertToGrid_1 = require("../virtualizedGrid/helpers/convertToGrid");
const VirtualizedListWithSize_1 = require("./VirtualizedListWithSize");
const useCreateVirtualParentsIds = (parentId) => (0, useCachedValues_1.useCachedValues)(() => (0, lodash_uniqueid_1.default)(`${parentId}_virtual_`));
/**
 * Hook which will :
 * - register the initial virtualNodes
 * - unregister the final virtualNodes
 * Do it each time the parentId is changing
 */
const useRegisterInitialAndUnregisterFinalVirtualNodes = ({ allItems, parentId, registerNthVirtualNode, unregisterNthVirtualNode, }) => {
    /** We don't unregister the nodes on each render because we want to update them instead (add new ones, move existing ones...).
     * We register each item in allItems at 1st render, and unregister all the registered nodes on unmount.
     * If data was added to allItems in the meantime (ex: onEndReached), the cleanup function needs to have "access" to this additional data in order to unregister the additional nodes.
     * This means the cleanup function needs to have access to up-to-date data, so we use a reference to the list of data. */
    const currentAllItems = (0, react_1.useRef)(allItems);
    currentAllItems.current = allItems;
    (0, react_1.useLayoutEffect)(() => {
        currentAllItems.current.forEach((_, n) => registerNthVirtualNode(n));
        return () => currentAllItems.current.forEach((_, n) => unregisterNthVirtualNode(n));
        // eslint-disable-next-line react-hooks/exhaustive-deps -- unfortunately, we can't have clean effects with lrud for now
    }, [parentId]);
};
const useUpdateRegistration = ({ allItems, registerNthVirtualNode, unregisterNthVirtualNode, }) => {
    const previousAllItems = (0, react_1.useRef)(allItems);
    // useBeforeMountEffect done every time allItems is changing to change the way the allItems is register in the spatialNavigator
    (0, react_1.useLayoutEffect)(() => {
        const previousAllItemsList = previousAllItems.current;
        const isFirstRender = previousAllItemsList === undefined;
        if (!isFirstRender) {
            (0, updateVirtualNodeRegistration_1.updateVirtualNodeRegistration)({
                currentItems: allItems,
                previousItems: previousAllItemsList,
                addVirtualNode: registerNthVirtualNode,
                removeVirtualNode: unregisterNthVirtualNode,
            });
        }
        previousAllItems.current = allItems;
        // eslint-disable-next-line react-hooks/exhaustive-deps -- unfortunately, we can't have clean effects with lrud for now
    }, [allItems]);
};
const useRegisterVirtualNodes = ({ allItems, orientation, isGrid, }) => {
    const spatialNavigator = (0, SpatialNavigatorContext_1.useSpatialNavigator)();
    const parentId = (0, ParentIdContext_1.useParentId)();
    const getNthVirtualNodeID = useCreateVirtualParentsIds(parentId);
    // invert the orientation of children in grids so we can register rows in columns in rows, etc...
    const nodeOrientation = isGrid ? (0, convertToGrid_1.invertOrientation)(orientation) : 'vertical';
    const registerNthVirtualNode = (0, react_1.useCallback)((index) => {
        return spatialNavigator.registerNode(getNthVirtualNodeID(index), {
            parent: parentId,
            orientation: nodeOrientation,
            isFocusable: false,
        });
    }, [getNthVirtualNodeID, parentId, spatialNavigator, nodeOrientation]);
    const unregisterNthVirtualNode = (0, react_1.useCallback)((index) => spatialNavigator.unregisterNode(getNthVirtualNodeID(index)), [getNthVirtualNodeID, spatialNavigator]);
    useRegisterInitialAndUnregisterFinalVirtualNodes({
        allItems,
        parentId,
        registerNthVirtualNode,
        unregisterNthVirtualNode,
    });
    useUpdateRegistration({ allItems, registerNthVirtualNode, unregisterNthVirtualNode });
    return { getNthVirtualNodeID };
};
const ItemWrapperWithVirtualParentContext = (0, TypedMemo_1.typedMemo)(({ virtualParentID, index, item, renderItem, }) => ((0, jsx_runtime_1.jsx)(ParentIdContext_1.ParentIdContext.Provider, { value: virtualParentID, children: renderItem({ item, index: index }) })));
ItemWrapperWithVirtualParentContext.displayName = 'ItemWrapperWithVirtualParentContext';
/**
 * This component wraps every item of the VirtualizedList inside a Virtual Node.
 *
 * Virtual Nodes make the list more resilient to data changes.
 *
 * If the data changes, virtual nodes always wrap each elements for the spatial navigator to never lose track of the elements.
 * The strategy is to have as many virtual LRUD nodes as the amount data. For a N length array, we have N virtualized nodes. Even after pagination.
 * These virtual nodes are really helpful to never lose track of the navigation, especially if there is a refresh of the data and the array is shuffled.
 * ```
 *                       ┌───────────────────────────────────────┐
 *                       │                Screen                 │
 *                       │                                       │
 *                       │                                       │
 * ┌─────┐  ┌─────┐  ┌───┼─┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐ │┌─────┐  ┌─────┐
 * │  1  │  │  2  │  │  3│ │  │  4  │  │  5  │  │  6  │  │  7  │ ││  8  │  │  9  │
 * │     │  │┌───┐│  │┌──┼┐│  │┌───┐│  │┌───┐│  │┌───┐│  │┌───┐│ ││┌───┐│  │     │
 * │  A  │  ││ B ││  ││ C│││  ││ D ││  ││ E ││  ││ F ││  ││ G ││ │││ H ││  │  I  │
 * │     │  │└───┘│  │└──┼┘│  │└───┘│  │└───┘│  │└───┘│  │└───┘│ ││└───┘│  │     │
 * └─────┘  └─────┘  └───┼─┘  └─────┘  └─────┘  └─────┘  └─────┘ │└─────┘  └─────┘
 *                       │                                       │
 *                       └───────────────────────────────────────┘
 * ```
 * Framed letters correspond to rendered components.
 */
exports.SpatialNavigationVirtualizedListWithVirtualNodes = (0, TypedMemo_1.typedMemo)((props) => {
    var _a, _b;
    const { getNthVirtualNodeID } = useRegisterVirtualNodes({
        allItems: props.data,
        orientation: (_a = props.orientation) !== null && _a !== void 0 ? _a : 'horizontal',
        isGrid: (_b = props.isGrid) !== null && _b !== void 0 ? _b : false,
    });
    (0, react_1.useImperativeHandle)(props.getNodeIdRef, () => ({
        getNthVirtualNodeID: getNthVirtualNodeID,
    }), [getNthVirtualNodeID]);
    const { renderItem } = props;
    const renderWrappedItem = (0, react_1.useCallback)(({ item, index }) => ((0, jsx_runtime_1.jsx)(ItemWrapperWithVirtualParentContext, { virtualParentID: getNthVirtualNodeID(index), renderItem: renderItem, item: item, index: index })), [getNthVirtualNodeID, renderItem]);
    return (0, jsx_runtime_1.jsx)(VirtualizedListWithSize_1.VirtualizedListWithSize, Object.assign({}, props, { renderItem: renderWrappedItem }));
});
exports.SpatialNavigationVirtualizedListWithVirtualNodes.displayName =
    'SpatialNavigationVirtualizedListWithVirtualNodes';
//# sourceMappingURL=SpatialNavigationVirtualizedListWithVirtualNodes.js.map
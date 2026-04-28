"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialNavigationVirtualizedGrid = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const range_1 = __importDefault(require("lodash/range"));
const SpatialNavigationVirtualizedList_1 = require("../virtualizedList/SpatialNavigationVirtualizedList");
const SpatialNavigatorContext_1 = require("../../context/SpatialNavigatorContext");
const ParentIdContext_1 = require("../../context/ParentIdContext");
const TypedMemo_1 = require("../../helpers/TypedMemo");
const convertToGrid_1 = require("./helpers/convertToGrid");
const TypedForwardRef_1 = require("../../helpers/TypedForwardRef");
const useRegisterGridRowVirtualNodes = ({ numberOfColumns }) => {
    const spatialNavigator = (0, SpatialNavigatorContext_1.useSpatialNavigator)();
    const parentId = (0, ParentIdContext_1.useParentId)();
    const getNthVirtualNodeID = (0, react_1.useCallback)((index) => `${parentId}_${index}`, [parentId]);
    // This function must be idempotent so we don't register existing nodes again when grid data changes
    const registerNthVirtualNode = (0, react_1.useCallback)((index) => {
        return spatialNavigator.registerNode(getNthVirtualNodeID(index), {
            parent: parentId,
            orientation: 'horizontal',
            isFocusable: false,
            /** This prop enables index synchronization for navigation between rows.
             * Thus you can navigate up and down inside columns, instead of going back to the first element of rows.
             */
            useMeForIndexAlign: true,
        });
    }, [spatialNavigator, parentId, getNthVirtualNodeID]);
    const unregisterNthVirtualNode = (0, react_1.useCallback)((index) => {
        return spatialNavigator.unregisterNode(getNthVirtualNodeID(index));
    }, [spatialNavigator, getNthVirtualNodeID]);
    (0, react_1.useEffect)(() => {
        (0, range_1.default)(numberOfColumns).forEach((i) => registerNthVirtualNode(i));
        return () => (0, range_1.default)(numberOfColumns).forEach((i) => unregisterNthVirtualNode(i));
        // eslint-disable-next-line react-hooks/exhaustive-deps -- unfortunately, we can't have clean effects with lrud for now
    }, [parentId]);
    return { getNthVirtualNodeID };
};
const ItemWrapperWithVirtualParentContext = (0, TypedMemo_1.typedMemo)(({ virtualParentID, item, index, renderItem, }) => ((0, jsx_runtime_1.jsx)(ParentIdContext_1.ParentIdContext.Provider, { value: virtualParentID, children: renderItem({ item, index }) })));
ItemWrapperWithVirtualParentContext.displayName = 'ItemWrapperWithVirtualParentContext';
const GridRow = ({ renderItem, numberOfColumns, row, rowIndex, rowContainerStyle, }) => {
    const { getNthVirtualNodeID } = useRegisterGridRowVirtualNodes({ numberOfColumns });
    return ((0, jsx_runtime_1.jsx)(HorizontalContainer, { style: rowContainerStyle, children: row.items.map((item, columnIndex) => {
            const itemIndex = rowIndex * numberOfColumns + columnIndex;
            return (
            /* This view is important to reset flex direction to vertical */
            (0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(ItemWrapperWithVirtualParentContext, { virtualParentID: getNthVirtualNodeID(columnIndex), renderItem: renderItem, item: item, index: itemIndex }) }, columnIndex));
        }) }));
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
exports.SpatialNavigationVirtualizedGrid = (0, TypedMemo_1.typedMemo)((0, TypedForwardRef_1.typedForwardRef)((_a, ref) => {
    var { renderItem, data, numberOfColumns, itemHeight, header, headerSize, additionalRenderedRows, onEndReachedThresholdRowsNumber, nbMaxOfItems, rowContainerStyle } = _a, props = __rest(_a, ["renderItem", "data", "numberOfColumns", "itemHeight", "header", "headerSize", "additionalRenderedRows", "onEndReachedThresholdRowsNumber", "nbMaxOfItems", "rowContainerStyle"]);
    if (header && !headerSize)
        throw new Error('You must provide a headerSize when using a header');
    if (headerSize && !header)
        throw new Error('You must provide a header when using a headerSize');
    const hasHeader = !!header && !!headerSize;
    const gridRows = (0, react_1.useMemo)(() => (0, convertToGrid_1.convertToGrid)(data, numberOfColumns, header), [data, header, numberOfColumns]);
    const gridRowsWithHeaderIfProvided = (0, react_1.useMemo)(() => (hasHeader ? [header, ...gridRows] : gridRows), [hasHeader, header, gridRows]);
    const itemSizeAsAFunction = (0, react_1.useCallback)((item) => {
        if (hasHeader && react_1.default.isValidElement(item)) {
            return headerSize;
        }
        return itemHeight;
    }, [hasHeader, headerSize, itemHeight]);
    const itemSize = hasHeader ? itemSizeAsAFunction : itemHeight;
    const renderRow = (0, react_1.useCallback)(({ item: row, index }) => ((0, jsx_runtime_1.jsx)(GridRow, { renderItem: renderItem, numberOfColumns: numberOfColumns, row: row, rowIndex: index, rowContainerStyle: rowContainerStyle })), [renderItem, numberOfColumns, rowContainerStyle]);
    const renderHeaderThenRows = (0, react_1.useCallback)(({ item, index }) => {
        if (react_1.default.isValidElement(item)) {
            return item;
        }
        //We do this to have index taking into account the header
        const computedIndex = hasHeader ? index - 1 : index;
        return renderRow({ item: item, index: computedIndex });
    }, [hasHeader, renderRow]);
    return ((0, jsx_runtime_1.jsx)(SpatialNavigationVirtualizedList_1.SpatialNavigationVirtualizedList, Object.assign({ ref: ref, data: gridRowsWithHeaderIfProvided, itemSize: itemSize, additionalItemsRendered: additionalRenderedRows, onEndReachedThresholdItemsNumber: onEndReachedThresholdRowsNumber, orientation: "vertical", nbMaxOfItems: nbMaxOfItems ? Math.ceil(nbMaxOfItems / numberOfColumns) : undefined, renderItem: renderHeaderThenRows, isGrid: true }, props)));
}));
exports.SpatialNavigationVirtualizedGrid.displayName = 'SpatialNavigationVirtualizedGrid';
const HorizontalContainer = ({ style, children }) => {
    return (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [style, styles.rowContainer], children: children });
};
const styles = react_native_1.StyleSheet.create({
    rowContainer: { flexDirection: 'row' },
});
//# sourceMappingURL=SpatialNavigationVirtualizedGrid.js.map
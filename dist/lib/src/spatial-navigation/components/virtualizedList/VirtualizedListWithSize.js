"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualizedListWithSize = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const TypedMemo_1 = require("../../helpers/TypedMemo");
const VirtualizedList_1 = require("./VirtualizedList");
const react_1 = require("react");
/**
 * This component has for only purpose to give to the VirtualizedList its actual
 * width and height. It is used to avoid the VirtualizedList to render with a width
 * or height not defined (as it is used later for computing offsets for example).
 * The size is computed only once and then the VirtualizedList is rendered. This
 * doesn't support dynamic size changes.
 */
exports.VirtualizedListWithSize = (0, TypedMemo_1.typedMemo)((props) => {
    const isVertical = props.orientation === 'vertical';
    const [listSizeInPx, setListSizeInPx] = (0, react_1.useState)(isVertical ? react_native_1.Dimensions.get('window').height : react_native_1.Dimensions.get('window').width);
    const [hasAlreadyRendered, setHasAlreadyRendered] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: style.container, onLayout: (event) => {
            if (!hasAlreadyRendered) {
                const sizeKey = isVertical ? 'height' : 'width';
                if (event.nativeEvent.layout[sizeKey] !== 0) {
                    setListSizeInPx(event.nativeEvent.layout[sizeKey]);
                    setHasAlreadyRendered(true);
                }
            }
        }, testID: props.testID ? props.testID + '-size-giver' : undefined, children: (0, jsx_runtime_1.jsx)(VirtualizedList_1.VirtualizedList, Object.assign({}, props, { listSizeInPx: listSizeInPx })) }));
});
exports.VirtualizedListWithSize.displayName = 'VirtualizedListWithSize';
const style = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
});
//# sourceMappingURL=VirtualizedListWithSize.js.map
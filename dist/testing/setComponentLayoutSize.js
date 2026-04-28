"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setComponentLayoutSize = void 0;
const react_native_1 = require("@testing-library/react-native");
const setComponentLayoutSize = (listTestId, component, size) => {
    const listElementSizeGiver = component.getByTestId(listTestId + '-size-giver');
    (0, react_native_1.fireEvent)(listElementSizeGiver, 'layout', {
        nativeEvent: { layout: { width: size.width, height: size.height } },
    });
};
exports.setComponentLayoutSize = setComponentLayoutSize;
//# sourceMappingURL=setComponentLayoutSize.js.map
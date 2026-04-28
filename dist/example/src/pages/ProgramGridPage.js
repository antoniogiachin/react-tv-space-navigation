"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramGridPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const Page_1 = require("../components/Page");
const VirtualizedSpatialGrid_1 = require("../components/VirtualizedSpatialGrid");
const scaledPixels_1 = require("../design-system/helpers/scaledPixels");
const ProgramGridPage = () => {
    return ((0, jsx_runtime_1.jsx)(Page_1.Page, { children: (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.DefaultFocus, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.container, children: (0, jsx_runtime_1.jsx)(VirtualizedSpatialGrid_1.VirtualizedSpatialGrid, {}) }) }) }));
};
exports.ProgramGridPage = ProgramGridPage;
const styles = react_native_1.StyleSheet.create({
    container: { padding: (0, scaledPixels_1.scaledPixels)(40), flex: 1 },
});
//# sourceMappingURL=ProgramGridPage.js.map
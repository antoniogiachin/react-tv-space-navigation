"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualizedSpatialGrid = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@emotion/react");
const react_2 = require("react");
const react_native_1 = require("react-native");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const programInfos_1 = require("../modules/program/infra/programInfos");
const ProgramNode_1 = require("../modules/program/view/ProgramNode");
const scaledPixels_1 = require("../design-system/helpers/scaledPixels");
const theme_1 = require("../design-system/theme/theme");
const Header_1 = require("../modules/header/view/Header");
const Arrows_1 = require("../design-system/components/Arrows");
const NUMBER_OF_COLUMNS = 7;
const INFINITE_SCROLL_ROW_THRESHOLD = 2;
const VirtualizedSpatialGrid = ({ containerStyle }) => {
    const renderItem = (0, react_2.useCallback)(({ item, index }) => {
        var _a;
        return ((0, jsx_runtime_1.jsx)(ProgramNode_1.ProgramNode, { programInfo: item, label: (_a = index === null || index === void 0 ? void 0 : index.toString) === null || _a === void 0 ? void 0 : _a.call(index) }));
    }, []);
    const hardcodedRabbitsArray = (0, react_2.useMemo)(() => (0, programInfos_1.getPrograms)(500).map((element, index) => (Object.assign(Object.assign({}, element), { index }))), []);
    const theme = (0, react_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.container, containerStyle], children: (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationVirtualizedGrid, { data: hardcodedRabbitsArray, header: (0, jsx_runtime_1.jsx)(Header_1.Header, { title: "Example of a virtualized grid with spatial navigation", description: "The grid shown on this page is virtualized, which means that when scrolling, the elements not shown in the screen are not rendered, improving performance. The items are also recycled when scrolling, which means that the same components are reused when scrolling, reducing the re-rendering time.", verticalSize: (0, scaledPixels_1.scaledPixels)(500) }), headerSize: (0, scaledPixels_1.scaledPixels)(500), renderItem: renderItem, itemHeight: theme.sizes.program.portrait.height * 1.1, numberOfColumns: NUMBER_OF_COLUMNS, onEndReachedThresholdRowsNumber: INFINITE_SCROLL_ROW_THRESHOLD, rowContainerStyle: styles.rowStyle, ascendingArrow: (0, jsx_runtime_1.jsx)(Arrows_1.BottomArrow, {}), ascendingArrowContainerStyle: styles.bottomArrowContainer, descendingArrow: (0, jsx_runtime_1.jsx)(Arrows_1.TopArrow, {}), descendingArrowContainerStyle: styles.topArrowContainer, scrollInterval: 150 }) }));
};
exports.VirtualizedSpatialGrid = VirtualizedSpatialGrid;
const styles = react_native_1.StyleSheet.create({
    container: {
        height: (0, scaledPixels_1.scaledPixels)(1000),
        backgroundColor: theme_1.theme.colors.background.mainHover,
        padding: (0, scaledPixels_1.scaledPixels)(30),
        paddingLeft: (0, scaledPixels_1.scaledPixels)(75),
        borderRadius: (0, scaledPixels_1.scaledPixels)(20),
        overflow: 'hidden',
    },
    rowStyle: { gap: (0, scaledPixels_1.scaledPixels)(30) },
    topArrowContainer: {
        width: '100%',
        height: 100,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
    },
    bottomArrowContainer: {
        width: '100%',
        height: 100,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -15,
        left: 0,
    },
});
//# sourceMappingURL=VirtualizedSpatialGrid.js.map
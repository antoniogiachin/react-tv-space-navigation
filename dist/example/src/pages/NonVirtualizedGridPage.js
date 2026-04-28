"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonVirtualizedGridPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const Page_1 = require("../components/Page");
require("../components/configureRemoteControl");
const programInfos_1 = require("../modules/program/infra/programInfos");
const native_1 = require("@react-navigation/native");
const native_2 = __importDefault(require("@emotion/native"));
const scaledPixels_1 = require("../design-system/helpers/scaledPixels");
const ProgramNode_1 = require("../modules/program/view/ProgramNode");
const chunk_1 = __importDefault(require("lodash/chunk"));
const theme_1 = require("../design-system/theme/theme");
const Header_1 = require("../modules/header/view/Header");
const Arrows_1 = require("../design-system/components/Arrows");
const react_native_1 = require("react-native");
const ROW_SIZE = 7;
const HEADER_SIZE = (0, scaledPixels_1.scaledPixels)(400);
const renderProgramsList = (programsList) => ((0, jsx_runtime_1.jsx)(ProgramRow, { programs: programsList }, programsList[0].id));
const NonVirtualizedGridPage = () => {
    const programsLists = (0, chunk_1.default)((0, programInfos_1.getPrograms)(), ROW_SIZE);
    return ((0, jsx_runtime_1.jsx)(Page_1.Page, { children: (0, jsx_runtime_1.jsx)(CenteringView, { children: (0, jsx_runtime_1.jsx)(GridContainer, { children: (0, jsx_runtime_1.jsxs)(react_tv_space_navigation_1.SpatialNavigationScrollView, { offsetFromStart: HEADER_SIZE + 20, descendingArrow: (0, jsx_runtime_1.jsx)(Arrows_1.TopArrow, {}), ascendingArrow: (0, jsx_runtime_1.jsx)(Arrows_1.BottomArrow, {}), descendingArrowContainerStyle: styles.topArrowContainer, ascendingArrowContainerStyle: styles.bottomArrowContainer, children: [(0, jsx_runtime_1.jsx)(Header_1.Header, { title: "Example of a non-virtualized grid with spatial navigation", description: "The grid shown on this page is NOT virtualized, which means that when scrolling, the elements not shown in the screen ARE rendered.", verticalSize: HEADER_SIZE }), (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationView, { alignInGrid: true, direction: "vertical", children: (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.DefaultFocus, { children: programsLists.map(renderProgramsList) }) })] }) }) }) }));
};
exports.NonVirtualizedGridPage = NonVirtualizedGridPage;
const ProgramRow = ({ programs }) => {
    const navigation = (0, native_1.useNavigation)();
    return ((0, jsx_runtime_1.jsx)(ListContainer, { direction: "horizontal", children: programs.map((program) => {
            return ((0, jsx_runtime_1.jsx)(ProgramNode_1.ProgramNode, { programInfo: program, onSelect: () => navigation.push('ProgramDetail', { programInfo: program }) }, program.id));
        }) }));
};
const ListContainer = (0, native_2.default)(react_tv_space_navigation_1.SpatialNavigationView)(({ theme }) => ({
    gap: theme.spacings.$4,
    padding: theme.spacings.$4,
}));
const GridContainer = native_2.default.View({
    backgroundColor: theme_1.theme.colors.background.mainHover,
    margin: 'auto',
    height: '95%',
    width: '88%',
    borderRadius: (0, scaledPixels_1.scaledPixels)(20),
    padding: (0, scaledPixels_1.scaledPixels)(30),
});
const CenteringView = native_2.default.View({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
});
const styles = react_native_1.StyleSheet.create({
    topArrowContainer: {
        width: '100%',
        height: 100,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: -15,
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
//# sourceMappingURL=NonVirtualizedGridPage.js.map
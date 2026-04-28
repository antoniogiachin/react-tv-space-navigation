"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridWithLongNodesPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const Page_1 = require("../components/Page");
const programInfos_1 = require("../modules/program/infra/programInfos");
const native_1 = __importDefault(require("@emotion/native"));
const scaledPixels_1 = require("../design-system/helpers/scaledPixels");
const ProgramNode_1 = require("../modules/program/view/ProgramNode");
const theme_1 = require("../design-system/theme/theme");
const react_1 = require("react");
const react_native_1 = require("react-native");
const Button_1 = require("../design-system/components/Button");
const Spacer_1 = require("../design-system/components/Spacer");
const ProgramListWithTitle_1 = require("../modules/program/view/ProgramListWithTitle");
const Arrows_1 = require("../design-system/components/Arrows");
const HEADER_SIZE = (0, scaledPixels_1.scaledPixels)(400);
const GridWithLongNodesPage = () => {
    const firstItemRef = (0, react_1.useRef)(null);
    const lastItemRef = (0, react_1.useRef)(null);
    const parentRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsx)(Page_1.Page, { children: (0, jsx_runtime_1.jsx)(CenteringView, { children: (0, jsx_runtime_1.jsx)(GridContainer, { children: (0, jsx_runtime_1.jsxs)(react_tv_space_navigation_1.SpatialNavigationScrollView, { offsetFromStart: HEADER_SIZE + 20, ascendingArrow: (0, jsx_runtime_1.jsx)(Arrows_1.BottomArrow, {}), ascendingArrowContainerStyle: styles.bottomArrowContainer, descendingArrow: (0, jsx_runtime_1.jsx)(Arrows_1.TopArrow, {}), descendingArrowContainerStyle: styles.topArrowContainer, children: [(0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationNode, { alignInGrid: true, children: (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.DefaultFocus, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(FirstRow, { ref: firstItemRef }), (0, jsx_runtime_1.jsx)(SecondRow, { ref: lastItemRef }), (0, jsx_runtime_1.jsx)(ButtonRow, { firstItemRef: firstItemRef, lastItemRef: lastItemRef })] }) }) }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$6" }), (0, jsx_runtime_1.jsx)(ProgramListWithTitle_1.ProgramListWithTitle, { title: "Imperative focus on virtualized list", parentRef: parentRef }), (0, jsx_runtime_1.jsxs)(Row, { direction: "horizontal", children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Go to first", onSelect: () => {
                                        var _a;
                                        (_a = parentRef.current) === null || _a === void 0 ? void 0 : _a.focus(0);
                                    } }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Go to last", onSelect: () => {
                                        var _a;
                                        (_a = parentRef.current) === null || _a === void 0 ? void 0 : _a.focus(999);
                                    } })] }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$20" })] }) }) }) }));
};
exports.GridWithLongNodesPage = GridWithLongNodesPage;
const FirstRow = (0, react_1.forwardRef)((_, ref) => {
    return ((0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationNode, { orientation: "horizontal", children: (0, jsx_runtime_1.jsxs)(ListContainer, { children: [(0, jsx_runtime_1.jsx)(ProgramNode_1.ProgramNode, { variant: "landscape", programInfo: programInfos_1.programInfos[0], indexRange: [0, 1], ref: ref }), (0, jsx_runtime_1.jsx)(ProgramNode_1.ProgramNode, { programInfo: programInfos_1.programInfos[1], indexRange: [2, 2] }), (0, jsx_runtime_1.jsx)(ProgramNode_1.ProgramNode, { programInfo: programInfos_1.programInfos[2], indexRange: [3, 3] }), (0, jsx_runtime_1.jsx)(ProgramNode_1.ProgramNode, { variant: "landscape", programInfo: programInfos_1.programInfos[3], indexRange: [4, 5] }), (0, jsx_runtime_1.jsx)(ProgramNode_1.ProgramNode, { programInfo: programInfos_1.programInfos[4], indexRange: [6, 6] })] }) }));
});
FirstRow.displayName = 'FirstRow';
const SecondRow = (0, react_1.forwardRef)((_, ref) => {
    const programs = programInfos_1.programInfos.slice(6, 13);
    return ((0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationNode, { orientation: "horizontal", children: (0, jsx_runtime_1.jsx)(ListContainer, { children: programs.map((program, index) => {
                return ((0, jsx_runtime_1.jsx)(ProgramNode_1.ProgramNode, { programInfo: program, ref: index === programs.length - 1 ? ref : null }, program.id));
            }) }) }));
});
SecondRow.displayName = 'SecondRow';
const ButtonRow = ({ firstItemRef, lastItemRef, }) => {
    return ((0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationNode, { orientation: "horizontal", children: (0, jsx_runtime_1.jsxs)(ListContainer, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Go to first item", onSelect: () => { var _a; return (_a = firstItemRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Go to last item", onSelect: () => { var _a; return (_a = lastItemRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } })] }) }));
};
const ListContainer = native_1.default.View(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.spacings.$4,
    padding: theme.spacings.$4,
}));
const GridContainer = native_1.default.View({
    backgroundColor: theme_1.theme.colors.background.mainHover,
    margin: 'auto',
    height: '95%',
    width: '88%',
    borderRadius: (0, scaledPixels_1.scaledPixels)(20),
    padding: (0, scaledPixels_1.scaledPixels)(30),
});
const CenteringView = native_1.default.View({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
});
const Row = (0, native_1.default)(react_tv_space_navigation_1.SpatialNavigationView)({
    flexDirection: 'row',
    gap: theme_1.theme.spacings.$4,
    padding: theme_1.theme.spacings.$4,
});
const styles = react_native_1.StyleSheet.create({
    topArrowContainer: {
        width: '100%',
        height: 100,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
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
//# sourceMappingURL=GridWithLongNodesPage.js.map
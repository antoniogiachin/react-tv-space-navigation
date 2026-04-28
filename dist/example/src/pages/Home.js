"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const Page_1 = require("../components/Page");
const Box_1 = require("../design-system/components/Box");
const Spacer_1 = require("../design-system/components/Spacer");
const Typography_1 = require("../design-system/components/Typography");
const ProgramListWithTitle_1 = require("../modules/program/view/ProgramListWithTitle");
const Arrows_1 = require("../design-system/components/Arrows");
const react_native_1 = require("react-native");
const Home = () => {
    return ((0, jsx_runtime_1.jsxs)(Page_1.Page, { children: [(0, jsx_runtime_1.jsx)(TitleContainer, { children: (0, jsx_runtime_1.jsx)(Title, { variant: "title", children: "Hoppix" }) }), (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.DefaultFocus, { children: (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationScrollView, { offsetFromStart: 140, ascendingArrow: (0, jsx_runtime_1.jsx)(Arrows_1.BottomArrow, {}), ascendingArrowContainerStyle: styles.bottomArrowContainer, descendingArrow: (0, jsx_runtime_1.jsx)(Arrows_1.TopArrow, {}), descendingArrowContainerStyle: styles.topArrowContainer, children: (0, jsx_runtime_1.jsxs)(Box_1.Box, { padding: "$10", children: [(0, jsx_runtime_1.jsx)(ProgramListWithTitle_1.ProgramListWithTitle, { title: "Popular" }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$6" }), (0, jsx_runtime_1.jsx)(ProgramListWithTitle_1.ProgramListWithTitle, { title: "Classics" }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$6" }), (0, jsx_runtime_1.jsx)(ProgramListWithTitle_1.ProgramListWithTitle, { title: "Watch again" }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$6" }), (0, jsx_runtime_1.jsx)(ProgramListWithTitle_1.ProgramListWithTitle, { title: "You may also like..." }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$6" }), (0, jsx_runtime_1.jsx)(ProgramListWithTitle_1.ProgramListWithTitleAndVariableSizes, { listSize: 10, title: "Our selection" }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$6" }), (0, jsx_runtime_1.jsx)(ProgramListWithTitle_1.ProgramListWithTitleAndVariableSizes, { listSize: 100, title: "Oscar Winners" }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$6" }), (0, jsx_runtime_1.jsx)(ProgramListWithTitle_1.ProgramListWithTitleAndVariableSizes, { title: "Child section" })] }) }) })] }));
};
exports.Home = Home;
const TitleContainer = native_1.default.View(({ theme }) => ({ padding: theme.spacings.$4 }));
const Title = (0, native_1.default)(Typography_1.Typography)(({ theme }) => ({
    textAlign: 'center',
    color: theme.colors.primary.main,
}));
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
//# sourceMappingURL=Home.js.map
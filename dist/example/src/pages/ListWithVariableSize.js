"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWithVariableSize = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const Page_1 = require("../components/Page");
const programInfos_1 = require("../modules/program/infra/programInfos");
const View_1 = require("../../../lib/src/spatial-navigation/components/View");
const scaledPixels_1 = require("../design-system/helpers/scaledPixels");
const DefaultFocusContext_1 = require("../../../lib/src/spatial-navigation/context/DefaultFocusContext");
const Node_1 = require("../../../lib/src/spatial-navigation/components/Node");
const Spacer_1 = require("../design-system/components/Spacer");
const Button_1 = require("../design-system/components/Button");
const react_1 = require("react");
const ProgramList_1 = require("../modules/program/view/ProgramList");
const react_2 = require("@emotion/react");
const ROW_PADDING = (0, scaledPixels_1.scaledPixels)(70);
const MAX = 1000;
const ListWithVariableSize = () => {
    const theme = (0, react_2.useTheme)();
    const [programsBase, setProgramsBase] = (0, react_1.useState)((0, programInfos_1.getPrograms)(MAX));
    const [numberOfPrograms, setNumberOfPrograms] = (0, react_1.useState)(4);
    const addItem = () => {
        setNumberOfPrograms((prev) => {
            if (prev === MAX)
                return prev;
            return prev + 1;
        });
    };
    const removeItem = () => {
        setNumberOfPrograms((prev) => {
            if (prev === 0)
                return prev;
            return prev - 1;
        });
    };
    const shuffleItems = () => {
        setProgramsBase((prev) => [...prev].sort(() => Math.random() - 0.5));
    };
    const programs = programsBase.slice(0, numberOfPrograms);
    return ((0, jsx_runtime_1.jsx)(Page_1.Page, { children: (0, jsx_runtime_1.jsx)(DefaultFocusContext_1.DefaultFocus, { children: (0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)(Node_1.SpatialNavigationNode, { orientation: "horizontal", children: (0, jsx_runtime_1.jsx)(ListContainer, { children: (0, jsx_runtime_1.jsx)(ProgramList_1.ProgramsRow, { data: programs, containerStyle: { height: theme.sizes.program.portrait.height + ROW_PADDING } }) }) }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$6" }), (0, jsx_runtime_1.jsxs)(View_1.SpatialNavigationView, { direction: "vertical", children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Add item", onSelect: addItem }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Remove item", onSelect: removeItem }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Shuffle items", onSelect: shuffleItems })] })] }) }) }));
};
exports.ListWithVariableSize = ListWithVariableSize;
const Container = native_1.default.View({
    flex: 1,
    padding: (0, scaledPixels_1.scaledPixels)(30),
});
const ListContainer = native_1.default.View(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.spacings.$4,
    padding: theme.spacings.$4,
}));
//# sourceMappingURL=ListWithVariableSize.js.map
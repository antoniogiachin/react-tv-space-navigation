"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramDetail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const Page_1 = require("../components/Page");
const Box_1 = require("../design-system/components/Box");
const Spacer_1 = require("../design-system/components/Spacer");
const Typography_1 = require("../design-system/components/Typography");
const ProgramListWithTitle_1 = require("../modules/program/view/ProgramListWithTitle");
const Button_1 = require("../design-system/components/Button");
const react_1 = require("react");
const SubtitlesModal_1 = require("../components/modals/SubtitlesModal");
const ProgramDetail = ({ route, }) => {
    const [isModalVisible, setIsModalVisible] = (0, react_1.useState)(false);
    const [subtitles, setSubtitles] = (0, react_1.useState)('No');
    const { programInfo } = route.params;
    return ((0, jsx_runtime_1.jsxs)(Page_1.Page, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, { padding: "$5", children: [(0, jsx_runtime_1.jsxs)(Container, { paddingHorizontal: "$15", paddingTop: "$10", direction: "horizontal", children: [(0, jsx_runtime_1.jsx)(JumbotronContainer, { children: (0, jsx_runtime_1.jsx)(Jumbotron, { source: programInfo.image }) }), (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.DefaultFocus, { children: (0, jsx_runtime_1.jsxs)(Box_1.Box, { padding: "$15", flex: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, { variant: "title", fontWeight: "strong", children: programInfo.title }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$15" }), (0, jsx_runtime_1.jsx)(Description, { variant: "body", fontWeight: "strong", children: programInfo.description }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$8" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Play", onSelect: () => console.log('Playing!') }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$8" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "More info", onSelect: () => console.log('More info!') }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$8" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: `${subtitles} subtitles`, onSelect: () => setIsModalVisible(true) })] }) })] }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$5" }), (0, jsx_runtime_1.jsx)(ProgramListWithTitle_1.ProgramListWithTitle, { title: "You may also like..." })] }), (0, jsx_runtime_1.jsx)(SubtitlesModal_1.SubtitlesModal, { isModalVisible: isModalVisible, setIsModalVisible: setIsModalVisible, setSubtitles: setSubtitles })] }));
};
exports.ProgramDetail = ProgramDetail;
const Container = (0, native_1.default)(Box_1.Box)({
    height: '60%',
});
const JumbotronContainer = native_1.default.View({
    width: '60%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
});
const Jumbotron = native_1.default.Image({
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
});
const Description = (0, native_1.default)(Typography_1.Typography)({
    textAlign: 'justify',
});
//# sourceMappingURL=ProgramDetail.js.map
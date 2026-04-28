"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramListWithTitleAndVariableSizes = exports.ProgramListWithTitle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../../../design-system/components/Box");
const Spacer_1 = require("../../../design-system/components/Spacer");
const Typography_1 = require("../../../design-system/components/Typography");
const ProgramList_1 = require("./ProgramList");
const ProgramListWithTitle = ({ title, parentRef, listSize }) => {
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, { direction: "vertical", children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, { variant: "body", fontWeight: "strong", children: title }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { direction: "vertical", gap: "$2" }), (0, jsx_runtime_1.jsx)(ProgramList_1.ProgramsRow, { parentRef: parentRef, listSize: listSize })] }));
};
exports.ProgramListWithTitle = ProgramListWithTitle;
const ProgramListWithTitleAndVariableSizes = ({ title, listSize }) => {
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, { direction: "vertical", children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, { variant: "body", fontWeight: "strong", children: title }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { direction: "vertical", gap: "$2" }), (0, jsx_runtime_1.jsx)(ProgramList_1.ProgramsRow, { variant: "variable-size", listSize: listSize })] }));
};
exports.ProgramListWithTitleAndVariableSizes = ProgramListWithTitleAndVariableSizes;
//# sourceMappingURL=ProgramListWithTitle.js.map
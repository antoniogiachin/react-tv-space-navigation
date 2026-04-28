"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtitlesModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DefaultFocusContext_1 = require("../../../../lib/src/spatial-navigation/context/DefaultFocusContext");
const Button_1 = require("../../design-system/components/Button");
const Spacer_1 = require("../../design-system/components/Spacer");
const Modal_1 = require("./Modal");
const SubtitlesModal = ({ isModalVisible, setIsModalVisible, setSubtitles, }) => {
    return ((0, jsx_runtime_1.jsxs)(Modal_1.Modal, { isModalVisible: isModalVisible, hideModal: () => setIsModalVisible(false), title: 'Choose subtitles', children: [(0, jsx_runtime_1.jsx)(DefaultFocusContext_1.DefaultFocus, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "English", onSelect: () => {
                        setSubtitles('English');
                        setIsModalVisible(false);
                    } }) }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$8" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Spanish", onSelect: () => {
                    setSubtitles('Spanish');
                    setIsModalVisible(false);
                } }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$8" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Portuguese", onSelect: () => {
                    setSubtitles('Portuguese');
                    setIsModalVisible(false);
                } }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$8" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "None", onSelect: () => {
                    setSubtitles('No');
                    setIsModalVisible(false);
                } })] }));
};
exports.SubtitlesModal = SubtitlesModal;
//# sourceMappingURL=SubtitlesModal.js.map
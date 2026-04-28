"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = __importDefault(require("@emotion/native"));
const react_native_1 = require("react-native");
const Typography_1 = require("../../design-system/components/Typography");
const Spacer_1 = require("../../design-system/components/Spacer");
const colors_1 = require("../../design-system/theme/colors");
const SpatialNavigationOverlay_1 = require("./SpatialNavigationOverlay/SpatialNavigationOverlay");
const Modal = ({ isModalVisible, hideModal, children, title }) => {
    if (!isModalVisible)
        return null;
    return ((0, jsx_runtime_1.jsx)(StyledModal, { children: (0, jsx_runtime_1.jsxs)(ModalContentContainer, { children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, { variant: "title", fontWeight: "strong", children: title }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$8" }), (0, jsx_runtime_1.jsx)(SpatialNavigationOverlay_1.SpatialNavigationOverlay, { isModalVisible: isModalVisible, hideModal: hideModal, children: children })] }) }));
};
exports.Modal = Modal;
const StyledModal = (0, native_1.default)(react_native_1.View)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
});
const ModalContentContainer = (0, native_1.default)(react_native_1.View)({
    minHeight: 200,
    minWidth: 200,
    backgroundColor: colors_1.colors.background.main,
    borderWidth: 2,
    borderColor: colors_1.colors.primary.light,
    padding: 32,
    margin: 16,
    borderRadius: 16,
    justifyContent: 'center',
});
//# sourceMappingURL=Modal.js.map
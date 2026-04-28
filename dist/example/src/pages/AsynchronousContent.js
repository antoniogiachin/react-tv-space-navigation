"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsynchronousContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const Page_1 = require("../components/Page");
const Button_1 = require("../design-system/components/Button");
const Typography_1 = require("../design-system/components/Typography");
const Box_1 = require("../design-system/components/Box");
const Spacer_1 = require("../design-system/components/Spacer");
const react_1 = require("react");
const react_native_1 = require("react-native");
const native_1 = __importDefault(require("@emotion/native"));
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const AsynchronousContent = () => {
    const [shouldShow, setShouldShow] = (0, react_1.useState)(false);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const toggle = () => __awaiter(void 0, void 0, void 0, function* () {
        if (isLoading)
            return;
        setIsLoading(true);
        yield sleep(1000);
        setIsLoading(false);
        setShouldShow((prev) => !prev);
    });
    return ((0, jsx_runtime_1.jsx)(Page_1.Page, { children: (0, jsx_runtime_1.jsxs)(Box_1.Box, { padding: '$8', children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, { children: 'Here are some details about a common pitfall with this library: how do I show/hide focusable elements properly?' }), (0, jsx_runtime_1.jsx)(Typography_1.Typography, { children: 'Use this button to trigger an asynchronous show/hide' }), (0, jsx_runtime_1.jsxs)(react_tv_space_navigation_1.SpatialNavigationView, { direction: "horizontal", children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { label: shouldShow ? 'Hide' : 'Show', onSelect: toggle }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$8", direction: "horizontal" }), isLoading && (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: "white", size: 'large' })] }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: "$8" }), (0, jsx_runtime_1.jsx)(Typography_1.Typography, { children: 'Then, try out the focus below. Focus should not be messed up after asynchronous modifications :)' }), (0, jsx_runtime_1.jsxs)(StyledNavigationRow, { direction: "horizontal", children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { label: "First button" }), (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationNode, { children: shouldShow ? (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Second button (asynchronously showed)" }) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Third button" })] }), (0, jsx_runtime_1.jsx)(Typography_1.Typography, { children: "Check out the code to understand how it is done." })] }) }));
};
exports.AsynchronousContent = AsynchronousContent;
const StyledNavigationRow = (0, native_1.default)(react_tv_space_navigation_1.SpatialNavigationView)({
    gap: 40,
});
//# sourceMappingURL=AsynchronousContent.js.map
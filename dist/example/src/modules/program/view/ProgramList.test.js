"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("@testing-library/react-native");
const theme_1 = require("../../../design-system/theme/theme");
const react_1 = require("@emotion/react");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const testRemoteControlManager_1 = __importDefault(require("../../../components/tests/helpers/testRemoteControlManager"));
require("../../../components/tests/helpers/configureTestRemoteControl");
const ProgramList_1 = require("./ProgramList");
const programInfos = __importStar(require("../infra/programInfos"));
const programInfos_1 = require("../../../components/tests/fixtures/programInfos");
jest.mock('@react-navigation/native');
const renderWithProviders = (component) => {
    return (0, react_native_1.render)((0, jsx_runtime_1.jsx)(react_1.ThemeProvider, { theme: theme_1.theme, children: (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationRoot, { children: (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.DefaultFocus, { children: component }) }) }));
};
describe('ProgramList', () => {
    jest.spyOn(programInfos, 'getPrograms').mockReturnValue(programInfos_1.programsFixture);
    it('renders the list with every items', () => {
        const screen = renderWithProviders((0, jsx_runtime_1.jsx)(ProgramList_1.ProgramList, { isActive: true }));
        screen.getByLabelText('Program 1');
        screen.getByLabelText('Program 2');
    });
    it('renders the list and focus elements accordingly with inputs', () => {
        const screen = renderWithProviders((0, jsx_runtime_1.jsx)(ProgramList_1.ProgramList, { isActive: true }));
        const program1 = screen.getByLabelText('Program 1');
        expect(program1).toBeSelected();
        testRemoteControlManager_1.default.handleRight();
        const program2 = screen.getByLabelText('Program 2');
        expect(program2).toBeSelected();
        testRemoteControlManager_1.default.handleLeft();
        expect(program1).toBeSelected();
    });
});
//# sourceMappingURL=ProgramList.test.js.map
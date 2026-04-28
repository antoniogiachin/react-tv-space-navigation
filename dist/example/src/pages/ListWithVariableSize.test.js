"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@emotion/react");
const react_native_1 = require("@testing-library/react-native");
const theme_1 = require("../design-system/theme/theme");
const ListWithVariableSize_1 = require("./ListWithVariableSize");
const native_1 = require("@react-navigation/native");
require("../components/tests/helpers/configureTestRemoteControl");
const testRemoteControlManager_1 = __importDefault(require("../components/tests/helpers/testRemoteControlManager"));
jest.mock('../modules/program/infra/programInfos', () => ({
    getPrograms: () => {
        return jest.requireActual('../modules/program/infra/programInfos').programInfos;
    },
}));
const renderWithProviders = (page) => {
    return (0, react_native_1.render)((0, jsx_runtime_1.jsx)(native_1.NavigationContainer, { children: (0, jsx_runtime_1.jsx)(react_1.ThemeProvider, { theme: theme_1.theme, children: page }) }));
};
describe('ListWithVariableSize', () => {
    it('node is still focusable after being removed', () => {
        const screen = renderWithProviders((0, jsx_runtime_1.jsx)(ListWithVariableSize_1.ListWithVariableSize, {}));
        // Go to last programd and focus it
        testRemoteControlManager_1.default.handleRight();
        testRemoteControlManager_1.default.handleRight();
        testRemoteControlManager_1.default.handleRight();
        expect(screen.getByLabelText('Program 4')).toBeSelected();
        // Go back to first position
        testRemoteControlManager_1.default.handleLeft();
        testRemoteControlManager_1.default.handleLeft();
        testRemoteControlManager_1.default.handleLeft();
        // Remove last item
        testRemoteControlManager_1.default.handleDown();
        testRemoteControlManager_1.default.handleDown();
        testRemoteControlManager_1.default.handleEnter();
        expect(screen.queryByLabelText('Program 4')).not.toBeOnTheScreen();
        // Add back last item
        testRemoteControlManager_1.default.handleUp();
        testRemoteControlManager_1.default.handleEnter();
        expect(screen.getByLabelText('Program 4')).toBeOnTheScreen();
        // Focus last item
        testRemoteControlManager_1.default.handleUp();
        testRemoteControlManager_1.default.handleRight();
        testRemoteControlManager_1.default.handleRight();
        testRemoteControlManager_1.default.handleRight();
        expect(screen.getByLabelText('Program 4')).toBeSelected();
    });
});
//# sourceMappingURL=ListWithVariableSize.test.js.map
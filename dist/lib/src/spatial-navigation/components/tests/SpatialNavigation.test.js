"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectButtonToHaveFocus = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DefaultFocusContext_1 = require("../../context/DefaultFocusContext");
const Root_1 = require("../Root");
const TestButton_1 = require("./TestButton");
require("./helpers/configureTestRemoteControl");
const testRemoteControlManager_1 = __importDefault(require("./helpers/testRemoteControlManager"));
const react_native_1 = require("@testing-library/react-native");
const View_1 = require("../View");
const ScrollView_1 = require("../ScrollView/ScrollView");
const TestScreen = ({ onDirectionHandledWithoutMovement = () => undefined }) => ((0, jsx_runtime_1.jsx)(Root_1.SpatialNavigationRoot, { onDirectionHandledWithoutMovement: onDirectionHandledWithoutMovement, children: (0, jsx_runtime_1.jsx)(DefaultFocusContext_1.DefaultFocus, { children: (0, jsx_runtime_1.jsxs)(ScrollView_1.SpatialNavigationScrollView, { children: [(0, jsx_runtime_1.jsxs)(View_1.SpatialNavigationView, { direction: "horizontal", children: [(0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "button 1", onSelect: () => { } }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "button 2", onSelect: () => { } }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "button 3", onSelect: () => { } })] }), (0, jsx_runtime_1.jsxs)(View_1.SpatialNavigationView, { direction: "horizontal", children: [(0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "button 4", onSelect: () => { } }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "button 5", onSelect: () => { } }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "button 6", onSelect: () => { } })] })] }) }) }));
const expectButtonToHaveFocus = (component, text) => {
    const element = component.getByRole('button', { name: text });
    expect(element).toBeSelected();
};
exports.expectButtonToHaveFocus = expectButtonToHaveFocus;
describe('Spatial Navigation Movement', () => {
    it('handles correctly RIGHT LEFT LEFT', () => {
        const component = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(TestScreen, {}));
        (0, exports.expectButtonToHaveFocus)(component, 'button 1');
        testRemoteControlManager_1.default.handleRight();
        (0, exports.expectButtonToHaveFocus)(component, 'button 2');
        testRemoteControlManager_1.default.handleLeft();
        (0, exports.expectButtonToHaveFocus)(component, 'button 1');
        testRemoteControlManager_1.default.handleLeft();
        (0, exports.expectButtonToHaveFocus)(component, 'button 1');
    });
    it('handles correctly RIGHT DOWN DOWN UP', () => {
        const component = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(TestScreen, {}));
        (0, exports.expectButtonToHaveFocus)(component, 'button 1');
        testRemoteControlManager_1.default.handleRight();
        (0, exports.expectButtonToHaveFocus)(component, 'button 2');
        testRemoteControlManager_1.default.handleDown();
        (0, exports.expectButtonToHaveFocus)(component, 'button 4');
        testRemoteControlManager_1.default.handleDown();
        (0, exports.expectButtonToHaveFocus)(component, 'button 4');
        testRemoteControlManager_1.default.handleUp();
        (0, exports.expectButtonToHaveFocus)(component, 'button 2');
    });
    it('handles correctly DOWN RIGHT UP DOWN', () => {
        const component = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(TestScreen, {}));
        (0, exports.expectButtonToHaveFocus)(component, 'button 1');
        testRemoteControlManager_1.default.handleDown();
        (0, exports.expectButtonToHaveFocus)(component, 'button 4');
        testRemoteControlManager_1.default.handleRight();
        (0, exports.expectButtonToHaveFocus)(component, 'button 5');
        testRemoteControlManager_1.default.handleUp();
        (0, exports.expectButtonToHaveFocus)(component, 'button 1');
        testRemoteControlManager_1.default.handleDown();
        (0, exports.expectButtonToHaveFocus)(component, 'button 5');
    });
    it('handles correctly out-of-screen movement detection', () => {
        const mock = jest.fn();
        const component = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(TestScreen, { onDirectionHandledWithoutMovement: mock }));
        (0, exports.expectButtonToHaveFocus)(component, 'button 1');
        testRemoteControlManager_1.default.handleLeft();
        (0, exports.expectButtonToHaveFocus)(component, 'button 1');
        expect(mock).toHaveBeenCalledWith('left');
        mock.mockReset();
        testRemoteControlManager_1.default.handleDown();
        testRemoteControlManager_1.default.handleUp();
        testRemoteControlManager_1.default.handleRight();
        testRemoteControlManager_1.default.handleDown();
        expect(mock).not.toHaveBeenCalled();
        testRemoteControlManager_1.default.handleDown();
        expect(mock).toHaveBeenCalledWith('down');
        mock.mockReset();
        testRemoteControlManager_1.default.handleRight();
        testRemoteControlManager_1.default.handleRight();
        testRemoteControlManager_1.default.handleRight();
        expect(mock).toHaveBeenCalledWith('right');
    });
});
//# sourceMappingURL=SpatialNavigation.test.js.map
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
exports.expectButtonToHaveFocus = exports.setComponentLayoutSize = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const react_native_2 = require("@testing-library/react-native");
require("../../tests/helpers/configureTestRemoteControl");
const ScrollView_1 = require("../ScrollView");
const View_1 = require("../../View");
const TestButton_1 = require("../../tests/TestButton");
const Root_1 = require("../../Root");
const testRemoteControlManager_1 = __importDefault(require("../../tests/helpers/testRemoteControlManager"));
const DefaultFocusContext_1 = require("../../../context/DefaultFocusContext");
const MOCKED_BUTTON_HEIGHT = 100;
const setComponentLayoutSize = (component, size) => {
    (0, react_native_2.fireEvent)(component, 'layout', {
        nativeEvent: { layout: { width: size.width, height: size.height, x: size.x, y: size.y } },
    });
};
exports.setComponentLayoutSize = setComponentLayoutSize;
const expectButtonToHaveFocus = (component, text) => {
    const element = component.getByRole('button', { name: text });
    expect(element).toBeSelected();
};
exports.expectButtonToHaveFocus = expectButtonToHaveFocus;
const TestPage = () => {
    return ((0, jsx_runtime_1.jsx)(Root_1.SpatialNavigationRoot, { children: (0, jsx_runtime_1.jsx)(DefaultFocusContext_1.DefaultFocus, { children: (0, jsx_runtime_1.jsx)(ScrollView_1.SpatialNavigationScrollView, { testID: "scrollview", children: (0, jsx_runtime_1.jsxs)(View_1.SpatialNavigationView, { direction: "vertical", children: [(0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "1" }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "2" }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "3" }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "4" }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "5" }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "6" }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "7" }), (0, jsx_runtime_1.jsx)(TestButton_1.TestButton, { title: "8" })] }) }) }) }));
};
jest.spyOn(react_native_1.View.prototype, 'measureLayout').mockImplementation(function (node, callback) {
    var _a;
    // @ts-expect-error it's weird but that's fine, it's our only way to get the button's context
    const buttonLabel = (_a = this === null || this === void 0 ? void 0 : this.props) === null || _a === void 0 ? void 0 : _a.accessibilityLabel;
    const buttonNumber = parseInt(buttonLabel, 10) - 1;
    callback(0, buttonNumber * MOCKED_BUTTON_HEIGHT, 0, 0);
});
const expectViewToHaveScroll = (element, scrollValue) => expect(element).toHaveStyle({ transform: [{ translateY: scrollValue }] });
describe('CustomScrollView', () => {
    const scrollViewTestId = 'scrollview';
    const innerScrollViewTestId = scrollViewTestId + '-content';
    it('scrolls properly upon focus and stops when overflowing', () => __awaiter(void 0, void 0, void 0, function* () {
        const MOCK_SCREEN_SIZE = 300;
        const MOCK_TOTAL_CONTENT_SIZE = 800;
        const component = (0, react_native_2.render)((0, jsx_runtime_1.jsx)(TestPage, {}));
        (0, react_native_2.act)(() => jest.runAllTimers());
        const scrollViewRoot = component.getByTestId(scrollViewTestId);
        (0, exports.setComponentLayoutSize)(scrollViewRoot, { width: 0, height: MOCK_SCREEN_SIZE, x: 0, y: 0 });
        const scrollViewInner = component.getByTestId(innerScrollViewTestId);
        (0, exports.setComponentLayoutSize)(scrollViewInner, {
            width: 0,
            height: MOCK_TOTAL_CONTENT_SIZE,
            x: 0,
            y: 0,
        });
        testRemoteControlManager_1.default.handleDown();
        expectViewToHaveScroll(scrollViewInner, -100);
        testRemoteControlManager_1.default.handleDown();
        expectViewToHaveScroll(scrollViewInner, -200);
        testRemoteControlManager_1.default.handleDown();
        expectViewToHaveScroll(scrollViewInner, -300);
        testRemoteControlManager_1.default.handleDown();
        expectViewToHaveScroll(scrollViewInner, -400);
        testRemoteControlManager_1.default.handleDown();
        expectViewToHaveScroll(scrollViewInner, -500);
        testRemoteControlManager_1.default.handleDown();
        // Once the view is going to over-scroll, it should stop scrolling
        expectViewToHaveScroll(scrollViewInner, -500);
        testRemoteControlManager_1.default.handleDown();
        expectViewToHaveScroll(scrollViewInner, -500);
        testRemoteControlManager_1.default.handleDown();
        expectViewToHaveScroll(scrollViewInner, -500);
        testRemoteControlManager_1.default.handleDown();
        expect(react_native_2.screen).toMatchSnapshot();
    }));
});
//# sourceMappingURL=CustomScrollView.test.js.map
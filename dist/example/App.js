"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./src/components/configureRemoteControl");
const react_1 = require("@emotion/react");
const native_1 = require("@react-navigation/native");
const react_native_1 = require("react-native");
const theme_1 = require("./src/design-system/theme/theme");
const Home_1 = require("./src/pages/Home");
const ProgramGridPage_1 = require("./src/pages/ProgramGridPage");
const Menu_1 = require("./src/components/Menu/Menu");
const MenuContext_1 = require("./src/components/Menu/MenuContext");
const native_2 = __importDefault(require("@emotion/native"));
const useFonts_1 = require("./src/hooks/useFonts");
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const native_stack_1 = require("@react-navigation/native-stack");
const ProgramDetail_1 = require("./src/pages/ProgramDetail");
const NonVirtualizedGridPage_1 = require("./src/pages/NonVirtualizedGridPage");
const GridWithLongNodesPage_1 = require("./src/pages/GridWithLongNodesPage");
const useTVPanEvent_1 = require("./src/components/PanEvent/useTVPanEvent");
const DeviceContext_1 = require("../lib/src/spatial-navigation/context/DeviceContext");
const ListWithVariableSize_1 = require("./src/pages/ListWithVariableSize");
const AsynchronousContent_1 = require("./src/pages/AsynchronousContent");
const Stack = (0, native_stack_1.createNativeStackNavigator)();
const Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
const RenderMenu = (props) => (0, jsx_runtime_1.jsx)(Menu_1.Menu, Object.assign({}, props));
const TabNavigator = () => {
    return ((0, jsx_runtime_1.jsx)(MenuContext_1.MenuProvider, { children: (0, jsx_runtime_1.jsxs)(Tab.Navigator, { screenOptions: {
                headerShown: false,
            }, initialRouteName: "Home", tabBar: RenderMenu, sceneContainerStyle: {
                marginLeft: theme_1.theme.sizes.menu.closed,
                backgroundColor: theme_1.theme.colors.background.main,
            }, children: [(0, jsx_runtime_1.jsx)(Tab.Screen, { name: "Home", component: Home_1.Home }), (0, jsx_runtime_1.jsx)(Tab.Screen, { name: "ProgramGridPage", component: ProgramGridPage_1.ProgramGridPage }), (0, jsx_runtime_1.jsx)(Tab.Screen, { name: "NonVirtualizedGridPage", component: NonVirtualizedGridPage_1.NonVirtualizedGridPage }), (0, jsx_runtime_1.jsx)(Tab.Screen, { name: "GridWithLongNodesPage", component: GridWithLongNodesPage_1.GridWithLongNodesPage }), (0, jsx_runtime_1.jsx)(Tab.Screen, { name: "ListWithVariableSize", component: ListWithVariableSize_1.ListWithVariableSize }), (0, jsx_runtime_1.jsx)(Tab.Screen, { name: "AsynchronousContent", component: AsynchronousContent_1.AsynchronousContent })] }) }));
};
function App() {
    (0, useTVPanEvent_1.useTVPanEvent)();
    const { height, width } = (0, react_native_1.useWindowDimensions)();
    const areFontsLoaded = (0, useFonts_1.useFonts)();
    if (!areFontsLoaded) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(native_1.NavigationContainer, { children: (0, jsx_runtime_1.jsx)(react_1.ThemeProvider, { theme: theme_1.theme, children: (0, jsx_runtime_1.jsx)(DeviceContext_1.SpatialNavigationDeviceTypeProvider, { children: (0, jsx_runtime_1.jsx)(Container, { width: width, height: height, children: (0, jsx_runtime_1.jsxs)(Stack.Navigator, { screenOptions: {
                            headerShown: false,
                            contentStyle: {
                                backgroundColor: theme_1.theme.colors.background.main,
                            },
                        }, initialRouteName: "TabNavigator", children: [(0, jsx_runtime_1.jsx)(Stack.Screen, { name: "TabNavigator", component: TabNavigator }), (0, jsx_runtime_1.jsx)(Stack.Screen, { name: "ProgramDetail", component: ProgramDetail_1.ProgramDetail })] }) }) }) }) }));
}
exports.default = App;
const Container = native_2.default.View(({ width, height }) => ({
    width,
    height,
    flexDirection: 'row-reverse',
    backgroundColor: theme_1.theme.colors.background.main,
}));
//# sourceMappingURL=App.js.map
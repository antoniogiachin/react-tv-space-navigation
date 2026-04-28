"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const MenuContext_1 = require("./MenuContext");
const react_1 = require("react");
const react_native_1 = require("react-native");
const native_1 = __importDefault(require("@emotion/native"));
const Typography_1 = require("../../design-system/components/Typography");
const Spacer_1 = require("../../design-system/components/Spacer");
const Box_1 = require("../../design-system/components/Box");
const react_2 = require("@emotion/react");
const MenuButton_1 = require("./MenuButton");
const windowDimensions = react_native_1.Dimensions.get('window');
const MenuItem = ({ label, icon, isMenuOpen, isActive, onSelect, }) => {
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, { direction: "horizontal", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(ActiveIndicator, { isActive: isActive }), (0, jsx_runtime_1.jsx)(MenuButton_1.MenuButton, { icon: icon, onSelect: () => onSelect(), isMenuOpen: isMenuOpen }), isMenuOpen && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { direction: "horizontal", gap: "$2" }), (0, jsx_runtime_1.jsx)(Typography_1.Typography, { children: label })] }))] }));
};
const menuItems = {
    Home: { label: 'Homepage', icon: 'Home' },
    ProgramGridPage: { label: 'Virtualized Grid', icon: 'Grid3X3' },
    NonVirtualizedGridPage: { label: 'Non-virtualized Grid', icon: 'LayoutGrid' },
    GridWithLongNodesPage: {
        label: 'Grid with long nodes',
        icon: 'LayoutDashboard',
    },
    ListWithVariableSize: { label: 'List with variable size', icon: 'LayoutDashboard' },
    AsynchronousContent: { label: 'Asynchronous content', icon: 'Timer' },
};
const Menu = ({ state, navigation }) => {
    const { isOpen: isMenuOpen, toggleMenu } = (0, MenuContext_1.useMenuContext)();
    const theme = (0, react_2.useTheme)();
    const animatedWidth = (0, react_1.useRef)(new react_native_1.Animated.Value(isMenuOpen ? theme.sizes.menu.open : theme.sizes.menu.closed)).current;
    const onDirectionHandledWithoutMovement = (0, react_1.useCallback)((movement) => {
        if (movement === 'right') {
            toggleMenu(false);
        }
    }, [toggleMenu]);
    const menuWebProps = react_native_1.Platform.select({
        web: {
            onMouseEnter: () => {
                toggleMenu(true);
            },
            onMouseLeave: () => {
                toggleMenu(false);
            },
        },
        default: {},
    });
    (0, react_1.useEffect)(() => {
        react_native_1.Animated.timing(animatedWidth, {
            toValue: isMenuOpen ? theme.sizes.menu.open : theme.sizes.menu.closed,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [animatedWidth, isMenuOpen, theme.sizes.menu.closed, theme.sizes.menu.open]);
    return ((0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationRoot, { isActive: isMenuOpen, onDirectionHandledWithoutMovement: onDirectionHandledWithoutMovement, children: (0, jsx_runtime_1.jsx)(AbsoluteMenuContainer, { children: (0, jsx_runtime_1.jsxs)(react_tv_space_navigation_1.SpatialNavigationView, { direction: "vertical", children: [(0, jsx_runtime_1.jsx)(MenuSpacer, {}), (0, jsx_runtime_1.jsx)(MenuOverlay, { style: { width: animatedWidth } }), (0, jsx_runtime_1.jsx)(MenuContainer, Object.assign({ isOpen: isMenuOpen }, menuWebProps, { children: (0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.DefaultFocus, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, { children: state.routes.map((route, index) => {
                                    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(MenuItem
                                            // @ts-expect-error TODO fix this type error
                                            , { 
                                                // @ts-expect-error TODO fix this type error
                                                label: menuItems[route.name].label, 
                                                // @ts-expect-error TODO fix this type error
                                                icon: menuItems[route.name].icon, isMenuOpen: isMenuOpen, isActive: state.index === index, onSelect: () => navigation.navigate(route.name, route.params) }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { direction: "vertical", gap: '$4' })] }, route.key));
                                }) }) }) }))] }) }) }));
};
exports.Menu = Menu;
const MenuContainer = native_1.default.View(({ isOpen, theme }) => ({
    position: 'absolute',
    left: 0,
    backgroundColor: 'transparent',
    width: isOpen ? theme.sizes.menu.open : theme.sizes.menu.closed,
    height: windowDimensions.height,
    paddingLeft: theme.spacings.$4,
    justifyContent: 'center',
}));
const MenuOverlay = (0, native_1.default)(react_native_1.Animated.View)(({ theme }) => ({
    position: 'absolute',
    left: 0,
    backgroundColor: theme.colors.background.mainHover,
    height: windowDimensions.height,
}));
const ActiveIndicator = native_1.default.View(({ isActive, theme }) => ({
    marginRight: 6,
    width: 4,
    height: '80%',
    backgroundColor: isActive ? theme.colors.primary.main : 'transparent',
    borderRadius: 4,
}));
const MenuSpacer = native_1.default.View(({ theme }) => ({
    width: theme.sizes.menu.closed,
}));
const AbsoluteMenuContainer = native_1.default.View({
    position: 'absolute',
});
//# sourceMappingURL=Menu.js.map
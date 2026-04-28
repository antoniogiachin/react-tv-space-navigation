"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-console */
const Button_1 = require("../../../design-system/components/Button");
const Typography_1 = require("../../../design-system/components/Typography");
const react_tv_space_navigation_1 = require("react-tv-space-navigation");
const Spacer_1 = require("../../../design-system/components/Spacer");
const react_native_1 = require("react-native");
const native_1 = __importDefault(require("@emotion/native"));
const images = {
    0: require('../assets/rabbitLarge0.png'),
    1: require('../assets/rabbitLarge1.png'),
    2: require('../assets/rabbitLarge2.png'),
    3: require('../assets/rabbitLarge3.png'),
    4: require('../assets/rabbitLarge4.png'),
    5: require('../assets/rabbitLarge5.png'),
    6: require('../assets/rabbitLarge6.png'),
    7: require('../assets/rabbitLarge7.png'),
    8: require('../assets/rabbitLarge8.png'),
};
const Header = ({ title, description, verticalSize }) => {
    // @ts-expect-error TODO fix type error
    const imageSource = images[Math.floor(Math.random() * 9)];
    return ((0, jsx_runtime_1.jsx)(react_tv_space_navigation_1.SpatialNavigationNode, { orientation: "horizontal", children: (0, jsx_runtime_1.jsxs)(Container, { height: verticalSize, children: [(0, jsx_runtime_1.jsxs)(InformationContainer, { children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, { variant: "title", children: title }), (0, jsx_runtime_1.jsx)(Spacer_1.Spacer, { gap: '$6' }), (0, jsx_runtime_1.jsx)(Descritption, { variant: "body", children: description }), (0, jsx_runtime_1.jsxs)(ButtonContainer, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Play random", onSelect: () => console.log('Randomed!') }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: "Add to favorites", onSelect: () => console.log('Favorited!') })] })] }), (0, jsx_runtime_1.jsx)(ImageContainer, { children: (0, jsx_runtime_1.jsx)(ProgramImage, { source: imageSource }) })] }) }));
};
exports.Header = Header;
const InformationContainer = native_1.default.View({
    width: '48%',
});
const ButtonContainer = native_1.default.View(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.spacings.$6,
}));
const ImageContainer = native_1.default.View({
    width: '48%',
});
const Descritption = (0, native_1.default)(Typography_1.Typography)({
    flex: 1,
});
const Container = native_1.default.View(({ height, theme }) => ({
    height: height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacings.$6,
}));
const ProgramImage = (0, native_1.default)(react_native_1.Image)({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 20,
});
//# sourceMappingURL=Header.js.map
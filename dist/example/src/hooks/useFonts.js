"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFonts = void 0;
const expo_font_1 = require("expo-font");
const useFonts = () => {
    const [fontsLoaded, fontError] = (0, expo_font_1.useFonts)({
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
    });
    if (!fontsLoaded && !fontError) {
        return { areFontsLoaded: false };
    }
    return { areFontsLoaded: true };
};
exports.useFonts = useFonts;
//# sourceMappingURL=useFonts.js.map
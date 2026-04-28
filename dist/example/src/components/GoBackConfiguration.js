"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoBackConfiguration = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = require("@react-navigation/native");
const SupportedKeys_1 = require("./remote-control/SupportedKeys");
const useKey_1 = require("../hooks/useKey");
const react_1 = require("react");
const react_native_1 = require("react-native");
const GoBackConfiguration = () => {
    const navigation = (0, native_1.useNavigation)();
    (0, react_1.useEffect)(() => {
        const event = react_native_1.BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });
        return () => {
            event.remove();
        };
    }, []);
    const goBackOnBackPress = (0, react_1.useCallback)((pressedKey) => {
        if (!navigation.isFocused) {
            return false;
        }
        if (pressedKey !== SupportedKeys_1.SupportedKeys.Back)
            return false;
        if (navigation.canGoBack()) {
            navigation.goBack();
            return true;
        }
        return false;
    }, [navigation]);
    (0, useKey_1.useKey)(SupportedKeys_1.SupportedKeys.Back, goBackOnBackPress);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
};
exports.GoBackConfiguration = GoBackConfiguration;
//# sourceMappingURL=GoBackConfiguration.js.map
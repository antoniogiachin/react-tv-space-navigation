"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaledPixels = exports.screen = void 0;
const react_native_1 = require("react-native");
exports.screen = react_native_1.Dimensions.get('window');
const scale = (exports.screen.width || 1920) / 1920;
/**
 * Unfortunately, AndroidTV handles pixels in a strange manner
 * PixelRatio does not seem to solve the problem properly on web.
 * So we just scale the pixels manually.
 *
 * https://github.com/react-native-tvos/react-native-tvos/issues/57
 */
const scaledPixels = (pixels) => pixels * scale;
exports.scaledPixels = scaledPixels;
//# sourceMappingURL=scaledPixels.js.map
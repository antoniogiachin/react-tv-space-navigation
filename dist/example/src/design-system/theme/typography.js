"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = exports.fontFamilies = void 0;
const scaledPixels_1 = require("../helpers/scaledPixels");
exports.fontFamilies = {
    montserrat: {
        medium: 'Montserrat-Medium',
        semiBold: 'Montserrat-SemiBold',
        bold: 'Montserrat-Bold',
    },
};
exports.typography = {
    title: {
        regular: {
            fontFamily: exports.fontFamilies.montserrat.semiBold,
            fontSize: (0, scaledPixels_1.scaledPixels)(32),
            lineHeight: (0, scaledPixels_1.scaledPixels)(40),
        },
        strong: {
            fontFamily: exports.fontFamilies.montserrat.bold,
            fontSize: (0, scaledPixels_1.scaledPixels)(32),
            lineHeight: (0, scaledPixels_1.scaledPixels)(40),
        },
    },
    body: {
        regular: {
            fontFamily: exports.fontFamilies.montserrat.medium,
            fontSize: (0, scaledPixels_1.scaledPixels)(24),
            lineHeight: (0, scaledPixels_1.scaledPixels)(32),
        },
        strong: {
            fontFamily: exports.fontFamilies.montserrat.semiBold,
            fontSize: (0, scaledPixels_1.scaledPixels)(24),
            lineHeight: (0, scaledPixels_1.scaledPixels)(32),
        },
    },
};
//# sourceMappingURL=typography.js.map
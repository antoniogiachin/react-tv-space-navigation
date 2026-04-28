"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizes = void 0;
const scaledPixels_1 = require("../helpers/scaledPixels");
exports.sizes = {
    program: {
        landscape: { width: (0, scaledPixels_1.scaledPixels)(450), height: (0, scaledPixels_1.scaledPixels)(200) },
        portrait: { width: (0, scaledPixels_1.scaledPixels)(200), height: (0, scaledPixels_1.scaledPixels)(250) },
        long: { width: (0, scaledPixels_1.scaledPixels)(416), height: (0, scaledPixels_1.scaledPixels)(250) },
    },
    menu: {
        open: (0, scaledPixels_1.scaledPixels)(400),
        closed: (0, scaledPixels_1.scaledPixels)(100),
        icon: (0, scaledPixels_1.scaledPixels)(20),
    },
};
//# sourceMappingURL=sizes.js.map
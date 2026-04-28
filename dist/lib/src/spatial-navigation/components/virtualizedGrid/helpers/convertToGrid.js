"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invertOrientation = exports.convertToGrid = void 0;
const chunk_1 = __importDefault(require("lodash/chunk"));
const convertToGrid = (data, numberOfColumns, header) => {
    const rows = (0, chunk_1.default)(data, numberOfColumns);
    return rows.map((items, index) => {
        //We do this to have index taking into account the header
        const computedIndex = header ? index + 1 : index;
        return { items, index: computedIndex };
    });
};
exports.convertToGrid = convertToGrid;
const invertOrientation = (orientation) => orientation === 'vertical' ? 'horizontal' : 'vertical';
exports.invertOrientation = invertOrientation;
//# sourceMappingURL=convertToGrid.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUniqueId = void 0;
const lodash_uniqueid_1 = __importDefault(require("lodash.uniqueid"));
const react_1 = require("react");
const useUniqueId = ({ prefix } = {}) => (0, react_1.useMemo)(() => (0, lodash_uniqueid_1.default)(prefix), [prefix]);
exports.useUniqueId = useUniqueId;
//# sourceMappingURL=useUniqueId.js.map
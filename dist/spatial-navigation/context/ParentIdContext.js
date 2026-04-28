"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useParentId = exports.ParentIdContext = void 0;
const react_1 = require("react");
exports.ParentIdContext = (0, react_1.createContext)(null);
const useParentId = () => {
    const parentId = (0, react_1.useContext)(exports.ParentIdContext);
    if (!parentId)
        throw new Error('Node used without any Parent!');
    return parentId;
};
exports.useParentId = useParentId;
//# sourceMappingURL=ParentIdContext.js.map
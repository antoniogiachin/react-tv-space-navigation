"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsRootActive = exports.IsRootActiveContext = void 0;
const react_1 = require("react");
exports.IsRootActiveContext = (0, react_1.createContext)(true);
const useIsRootActive = () => {
    return (0, react_1.useContext)(exports.IsRootActiveContext);
};
exports.useIsRootActive = useIsRootActive;
//# sourceMappingURL=IsRootActiveContext.js.map
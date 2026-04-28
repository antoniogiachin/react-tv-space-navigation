"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMenuContext = exports.MenuProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const MenuContext = (0, react_1.createContext)({
    isOpen: false,
    toggleMenu: () => { },
});
const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const value = (0, react_1.useMemo)(() => {
        return { isOpen, toggleMenu: setIsOpen };
    }, [isOpen, setIsOpen]);
    return (0, jsx_runtime_1.jsx)(MenuContext.Provider, { value: value, children: children });
};
exports.MenuProvider = MenuProvider;
const useMenuContext = () => (0, react_1.useContext)(MenuContext);
exports.useMenuContext = useMenuContext;
//# sourceMappingURL=MenuContext.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const IconsCatalog_1 = require("./IconsCatalog");
const Icon = ({ icon, size, color }) => {
    const IconComponent = IconsCatalog_1.iconsCatalog[icon];
    return (0, jsx_runtime_1.jsx)(IconComponent, { size: size, color: color });
};
exports.Icon = Icon;
//# sourceMappingURL=Icons.js.map
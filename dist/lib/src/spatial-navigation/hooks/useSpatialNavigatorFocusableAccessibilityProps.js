"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpatialNavigatorFocusableAccessibilityProps = void 0;
const react_1 = require("react");
const ParentIdContext_1 = require("../context/ParentIdContext");
const SpatialNavigatorContext_1 = require("../context/SpatialNavigatorContext");
const useSpatialNavigatorFocusableAccessibilityProps = () => {
    const spatialNavigator = (0, SpatialNavigatorContext_1.useSpatialNavigator)();
    const id = (0, ParentIdContext_1.useParentId)();
    const accessibilityProps = (0, react_1.useMemo)(() => ({
        accessible: true,
        accessibilityRole: 'button',
        accessibilityActions: [{ name: 'activate' }],
        onAccessibilityAction: () => {
            var _a, _b;
            const currentNode = spatialNavigator.getCurrentFocusNode();
            if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.id) === id) {
                (_b = (_a = spatialNavigator.getCurrentFocusNode()) === null || _a === void 0 ? void 0 : _a.onSelect) === null || _b === void 0 ? void 0 : _b.call(_a, currentNode);
            }
            else {
                spatialNavigator.grabFocus(id);
            }
        },
    }), [id, spatialNavigator]);
    return accessibilityProps;
};
exports.useSpatialNavigatorFocusableAccessibilityProps = useSpatialNavigatorFocusableAccessibilityProps;
//# sourceMappingURL=useSpatialNavigatorFocusableAccessibilityProps.js.map
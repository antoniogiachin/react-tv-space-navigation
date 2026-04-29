"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialNavigationNode = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const DefaultFocusContext_1 = require("../context/DefaultFocusContext");
const ParentIdContext_1 = require("../context/ParentIdContext");
const ParentScrollContext_1 = require("../context/ParentScrollContext");
const SpatialNavigatorContext_1 = require("../context/SpatialNavigatorContext");
const useUniqueId_1 = require("../hooks/useUniqueId");
const IsRootActiveContext_1 = require("../context/IsRootActiveContext");
const useScrollToNodeIfNeeded = ({ childRef, additionalOffset, }) => {
    const { scrollToNodeIfNeeded } = (0, ParentScrollContext_1.useSpatialNavigatorParentScroll)();
    return () => scrollToNodeIfNeeded(childRef, additionalOffset);
};
const useBindRefToChild = () => {
    const childRef = (0, react_1.useRef)(null);
    const bindRefToChild = (child) => {
        return react_1.default.cloneElement(child, Object.assign(Object.assign({}, child.props), { ref: (node) => {
                // We need the reference for our scroll handling
                childRef.current = node;
                // @ts-expect-error @fixme This works at runtime but we couldn't find how to type it properly.
                // Let's check if a ref was given (not by us)
                const { ref } = child;
                if (typeof ref === 'function') {
                    ref(node);
                }
                if ((ref === null || ref === void 0 ? void 0 : ref.current) !== undefined) {
                    ref.current = node;
                }
            } }));
    };
    return { bindRefToChild, childRef };
};
exports.SpatialNavigationNode = (0, react_1.forwardRef)(({ onFocus, onBlur, onSelect, onLongSelect = onSelect, onActive, onInactive, orientation = 'vertical', isFocusable = false, alignInGrid = false, indexRange, children, additionalOffset = 0, }, ref) => {
    const spatialNavigator = (0, SpatialNavigatorContext_1.useSpatialNavigator)();
    const parentId = (0, ParentIdContext_1.useParentId)();
    const isRootActive = (0, IsRootActiveContext_1.useIsRootActive)();
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const [isActive, setIsActive] = (0, react_1.useState)(false);
    // If parent changes, we have to re-register the Node + all children -> adding the parentId to the nodeId makes the children re-register.
    const id = (0, useUniqueId_1.useUniqueId)({ prefix: `${parentId}_node_` });
    (0, react_1.useImperativeHandle)(ref, () => ({
        focus: () => spatialNavigator.grabFocus(id),
    }), [spatialNavigator, id]);
    const { childRef, bindRefToChild } = useBindRefToChild();
    const scrollToNodeIfNeeded = useScrollToNodeIfNeeded({
        childRef,
        additionalOffset,
    });
    /*
     * We don't re-register in LRUD on each render, because LRUD does not allow updating the nodes.
     * Therefore, the SpatialNavigator Node callbacks are registered at 1st render but can change (ie. if props change) afterwards.
     * Since we want the functions to always be up to date, we use a reference to them.
     */
    const currentOnSelect = (0, react_1.useRef)(undefined);
    currentOnSelect.current = onSelect;
    const currentOnLongSelect = (0, react_1.useRef)(undefined);
    currentOnLongSelect.current = onLongSelect;
    const currentOnFocus = (0, react_1.useRef)(undefined);
    currentOnFocus.current = () => {
        onFocus === null || onFocus === void 0 ? void 0 : onFocus();
        scrollToNodeIfNeeded();
    };
    const currentOnBlur = (0, react_1.useRef)(undefined);
    currentOnBlur.current = onBlur;
    const currentOnActive = (0, react_1.useRef)(undefined);
    currentOnActive.current = onActive;
    const currentOnInactive = (0, react_1.useRef)(undefined);
    currentOnInactive.current = onInactive;
    const shouldHaveDefaultFocus = (0, DefaultFocusContext_1.useSpatialNavigatorDefaultFocus)();
    const accessedPropertiesRef = (0, react_1.useRef)(new Set());
    (0, react_1.useLayoutEffect)(() => {
        spatialNavigator.registerNode(id, {
            parent: parentId,
            isFocusable,
            onBlur: () => {
                var _a;
                (_a = currentOnBlur.current) === null || _a === void 0 ? void 0 : _a.call(currentOnBlur);
                if (accessedPropertiesRef.current.has('isFocused')) {
                    setIsFocused(false);
                }
            },
            onFocus: () => {
                var _a;
                (_a = currentOnFocus.current) === null || _a === void 0 ? void 0 : _a.call(currentOnFocus);
                if (accessedPropertiesRef.current.has('isFocused')) {
                    setIsFocused(true);
                }
            },
            onSelect: () => { var _a; return (_a = currentOnSelect.current) === null || _a === void 0 ? void 0 : _a.call(currentOnSelect); },
            onLongSelect: () => { var _a; return (_a = currentOnLongSelect.current) === null || _a === void 0 ? void 0 : _a.call(currentOnLongSelect); },
            orientation,
            isIndexAlign: alignInGrid,
            indexRange,
            onActive: () => {
                var _a;
                (_a = currentOnActive.current) === null || _a === void 0 ? void 0 : _a.call(currentOnActive);
                if (accessedPropertiesRef.current.has('isActive')) {
                    setIsActive(true);
                }
            },
            onInactive: () => {
                var _a;
                (_a = currentOnInactive.current) === null || _a === void 0 ? void 0 : _a.call(currentOnInactive);
                if (accessedPropertiesRef.current.has('isActive')) {
                    setIsActive(false);
                }
            },
        });
        return () => spatialNavigator.unregisterNode(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps -- unfortunately, we can't have clean effects with lrud for now
    }, [parentId]);
    (0, react_1.useEffect)(() => {
        if (shouldHaveDefaultFocus && isFocusable && !spatialNavigator.hasOneNodeFocused()) {
            spatialNavigator.handleOrQueueDefaultFocus(id);
        }
    }, [id, isFocusable, shouldHaveDefaultFocus, spatialNavigator]);
    // This proxy allows to track whether a property is used or not
    // hence allowing to ignore re-renders for unused pr
    const proxyObject = new Proxy({ isFocused, isActive, isRootActive }, {
        get(target, prop) {
            accessedPropertiesRef.current.add(prop);
            return target[prop];
        },
    });
    return ((0, jsx_runtime_1.jsx)(ParentIdContext_1.ParentIdContext.Provider, { value: id, children: typeof children === 'function' ? bindRefToChild(children(proxyObject)) : children }));
});
exports.SpatialNavigationNode.displayName = 'SpatialNavigationNode';
//# sourceMappingURL=Node.js.map
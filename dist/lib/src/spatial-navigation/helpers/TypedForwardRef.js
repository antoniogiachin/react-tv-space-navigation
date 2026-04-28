"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedForwardRef = typedForwardRef;
const react_1 = require("react");
/**
 * This works like React.forwardRef but for components with generic props.
 * @warning Don't use this if your component type isn't generic => `const Component = <T>() => {...}` and displayName is not supported yet
 */
function typedForwardRef(render) {
    // forwardRef expects (props: PropsWithoutRef<P>, ref: ForwardedRef<T>)
    return (0, react_1.forwardRef)(render);
}
//# sourceMappingURL=TypedForwardRef.js.map
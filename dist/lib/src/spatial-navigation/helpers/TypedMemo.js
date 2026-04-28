"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedMemo = typedMemo;
const react_1 = require("react");
/**
 * This works like React.memo but for components with generics props.
 * See issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087
 * @warning Don't use this if your component type isn't generic => `const Component = <T>() => {...}`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function typedMemo(Component, propsAreEqual) {
    return (0, react_1.memo)(Component, propsAreEqual);
}
//# sourceMappingURL=TypedMemo.js.map
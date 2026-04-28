"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCachedValues = void 0;
const react_1 = require("react");
/**
 * Basically a useMemo for an array that creates elements on the go (not all at the beginning).
 *
 * The input & output might seem similar -> the difference is that
 * - input `nthElementConstructor` always returns a new instance of the Nth element
 * - output`getNthMemoizedElement` always return the same instance of the Nth element (memoized).
 *
 * @warning nthElementConstructor should never change
 *
 * @param nthElementConstructor a callback that returns what we want the Nth element to be.
 * @returns a callback to get the Nth memoized element.
 */
const useCachedValues = (nthElementConstructor) => {
    const memoizedElements = (0, react_1.useRef)({});
    return (0, react_1.useCallback)((n) => {
        if (memoizedElements.current[n])
            return memoizedElements.current[n];
        const newElement = nthElementConstructor(n);
        memoizedElements.current[n] = newElement;
        return newElement;
        /** We purposefully dont put `nthElementConstructor` as a dependency because, if it changed,
         *  we would have to re-construct the whole cache. This use-case is not supported yet. */
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
exports.useCachedValues = useCachedValues;
//# sourceMappingURL=useCachedValues.js.map
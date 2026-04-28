import { ScrollBehavior } from '../VirtualizedList';
/**
 * Computes an array slice for virtualization
 * Have a look at the tests to get examples!
 *
 * The tricky part is that we handle cases were the data is smaller than the window,
 * or when we are on the beginning of the screen...
 */
export declare const getRange: ({ data, currentlyFocusedItemIndex, numberOfRenderedItems, numberOfItemsVisibleOnScreen, scrollBehavior, }: {
    data: Array<unknown>;
    currentlyFocusedItemIndex: number;
    numberOfRenderedItems?: number;
    numberOfItemsVisibleOnScreen: number;
    scrollBehavior: ScrollBehavior;
}) => {
    start: number;
    end: number;
};

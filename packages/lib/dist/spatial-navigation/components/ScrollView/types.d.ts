export type CustomScrollViewRef = {
    getInnerViewNode: () => any;
    scrollTo: (args: {
        x?: number;
        y?: number;
        animated: boolean;
    }) => void;
};

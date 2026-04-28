"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PanEvent_utils_1 = require("./PanEvent.utils");
class PanEvent {
    constructor() {
        this.orientation = undefined;
        this.lastIndex = 0;
        this.reset = () => {
            this.orientation = undefined;
            this.lastIndex = 0;
        };
        this.handlePanEvent = ({ x, y }) => {
            const newIndex = (0, PanEvent_utils_1.getGridCoordinates)(x, y, this);
            if (!newIndex)
                return;
            (0, PanEvent_utils_1.moveFocus)(newIndex, this);
        };
        this.getOrientation = () => {
            return this.orientation;
        };
        this.setOrientation = (orientation) => {
            this.orientation = orientation;
        };
        this.getLastIndex = () => {
            return this.lastIndex;
        };
        this.setLastIndex = (lastIndex) => {
            this.lastIndex = lastIndex;
        };
    }
}
exports.default = PanEvent;
//# sourceMappingURL=PanEvent.js.map
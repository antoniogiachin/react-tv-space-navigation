"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveFocus = exports.getGridCoordinates = void 0;
const repeat_1 = require("../../utils/repeat");
const RemoteControlManager_1 = __importDefault(require("../remote-control/RemoteControlManager"));
const SupportedKeys_1 = require("../remote-control/SupportedKeys");
const PanEvent_constants_1 = require("./PanEvent.constants");
const getGridCoordinates = (x, y, panEvent) => {
    const gridElementSize = PanEvent_constants_1.GRID_SIZE / PanEvent_constants_1.NUMBER_OF_COLUMNS;
    const xIndex = Math.floor((x + gridElementSize / 2) / gridElementSize);
    const yIndex = Math.floor((y + gridElementSize / 2) / gridElementSize);
    if (!panEvent.getOrientation()) {
        // Lock orientation after significant movement to avoid sliding in two directions
        if (xIndex !== panEvent.getLastIndex()) {
            panEvent.setOrientation('x');
            return xIndex;
        }
        if (yIndex !== panEvent.getLastIndex()) {
            panEvent.setOrientation('y');
            return yIndex;
        }
        return;
    }
    if (panEvent.getOrientation() === 'x' && xIndex !== panEvent.getLastIndex()) {
        return xIndex;
    }
    if (panEvent.getOrientation() === 'y' && yIndex !== panEvent.getLastIndex()) {
        return yIndex;
    }
};
exports.getGridCoordinates = getGridCoordinates;
const moveFocus = (index, panEvent) => {
    const indexDif = index - panEvent.getLastIndex();
    panEvent.setLastIndex(index);
    if (panEvent.getOrientation() === 'x') {
        (0, repeat_1.repeat)(() => RemoteControlManager_1.default.emitKeyDown(indexDif > 0 ? SupportedKeys_1.SupportedKeys.Right : SupportedKeys_1.SupportedKeys.Left), PanEvent_constants_1.EMIT_KEY_DOWN_INTERVAL, Math.abs(indexDif));
    }
    if (panEvent.getOrientation() === 'y') {
        (0, repeat_1.repeat)(() => RemoteControlManager_1.default.emitKeyDown(indexDif > 0 ? SupportedKeys_1.SupportedKeys.Down : SupportedKeys_1.SupportedKeys.Up), PanEvent_constants_1.EMIT_KEY_DOWN_INTERVAL, Math.abs(indexDif));
    }
};
exports.moveFocus = moveFocus;
//# sourceMappingURL=PanEvent.utils.js.map
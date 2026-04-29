"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lrud_1 = require("@bam.tech/lrud");
const isError_1 = require("./helpers/isError");
class SpatialNavigator {
    constructor({ onDirectionHandledWithoutMovementRef = { current: () => undefined }, }) {
        this.registerMap = {};
        this.focusRecoveryScheduled = false;
        /**
         * Sometimes we need to focus an element, but it is not registered yet.
         * That's where we put this waiting element.
         */
        this.focusQueue = null;
        /**
         * In the case of virtualized lists, we have some race condition issues when trying
         * to imperatively assign focus.
         * Indeed, we need the list to scroll to the element and then focus it. But the element
         * needs to exist to be focused, so we need first to scroll then wait for the element to render
         * then focus it.
         */
        this.virtualNodeFocusQueue = null;
        /**
         * To handle the default focus, we want to queue the element to be focused.
         * We queue it because it might not be registered yet when it asks for focus.
         *
         * We queue it only if there is no currently focused element already (or currently queued),
         * because multiple elements might try to take the focus (DefaultFocus is a context, so all its children
         * will try to grab it). We only want the first of these element to grab it.
         */
        this.handleOrQueueDefaultFocus = (id) => {
            if (this.getCurrentFocusNode())
                return;
            if (this.focusQueue)
                return;
            if (this.lrud.getNode(id)) {
                this.lrud.assignFocus(id);
                return;
            }
            this.focusQueue = id;
        };
        /**
         * Sometimes we want to queue focus an element, even if one is already focused.
         * That happens with an imperative focus for example. I can force a focus to an element,
         * even though another one is already focused.
         *
         * Still, I want to queue it, because the element might not be registered yet (example: in the case of virtualized lists)
         */
        this.grabFocusDeferred = (id) => {
            try {
                if (this.lrud.getNode(id)) {
                    this.lrud.assignFocus(id);
                    return;
                }
            }
            catch (error) {
                // If the element exists but is not focusable, it is very likely that it will
                // have a focusable child soon. This is the case for imperative focus on virtualized lists.
                if ((0, isError_1.isError)(error) && error.message === 'trying to assign focus to a non focusable node') {
                    this.virtualNodeFocusQueue = id;
                }
            }
        };
        /**
         * This will focus the currently queued element if it exists.
         * Otherwise, it will do nothing.
         *
         * This function will eventually be called with the proper element
         * when the element is finally registered.
         */
        this.handleQueuedFocus = () => {
            var _a, _b;
            // Handle focus queue
            if (this.focusQueue && this.lrud.getNode(this.focusQueue)) {
                try {
                    this.lrud.assignFocus(this.focusQueue);
                    this.focusQueue = null;
                }
                catch (e) {
                    // pass
                }
            }
            // Handle virtual nodes (for virtualized lists) focus queue
            if (this.virtualNodeFocusQueue &&
                ((_b = (_a = this.lrud.getNode(this.virtualNodeFocusQueue)) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length) !== 0) {
                try {
                    this.lrud.assignFocus(this.virtualNodeFocusQueue);
                    this.virtualNodeFocusQueue = null;
                }
                catch (e) {
                    // pass
                }
            }
        };
        this.grabFocus = (id) => {
            return this.lrud.assignFocus(id);
        };
        this.getCurrentFocusNode = () => {
            return this.lrud.currentFocusNode;
        };
        this.lrud = new lrud_1.Lrud();
        this.onDirectionHandledWithoutMovementRef = onDirectionHandledWithoutMovementRef;
    }
    registerNode(...params) {
        var _a;
        try {
            const parent = (_a = params[1]) === null || _a === void 0 ? void 0 : _a.parent;
            const id = params[0];
            // If no parent is given, we are talking about a root node. We want to register it.
            // If a parent is given, we need the node to exist. Otherwise, we'll pass and queue the node for later registration.
            if (parent === undefined || this.lrud.getNode(parent)) {
                this.lrud.registerNode(...params);
                // After we successfully register a node, we need to check whether it needs to grab the focus or not.
                this.handleQueuedFocus();
                // OK, we successfully registered an element.
                // Now, we check if some other elements were depending on us to be registered.
                // ...and we do it recursively.
                const potentialNodesToRegister = this.registerMap[id];
                if (!potentialNodesToRegister || potentialNodesToRegister.length === 0)
                    return;
                potentialNodesToRegister.forEach((node) => {
                    this.registerNode(...node);
                });
                delete this.registerMap[id];
            }
            else {
                // If the parent is not registered yet, we queue the node for later registration.
                if (!this.registerMap[parent]) {
                    this.registerMap[parent] = [];
                }
                this.registerMap[parent].push(params);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    unregisterNode(nodeId) {
        this.lrud.unregisterNode(nodeId, { forceRefocus: false });
        if (!this.lrud.currentFocusNode && !this.focusRecoveryScheduled) {
            this.focusRecoveryScheduled = true;
            queueMicrotask(() => {
                this.focusRecoveryScheduled = false;
                if (!this.lrud.currentFocusNode) {
                    try {
                        const root = this.lrud.getRootNode();
                        this.lrud.assignFocus(root);
                    }
                    catch (e) {
                        // pass
                    }
                }
            });
        }
    }
    handleKeyDown(direction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!direction)
                return;
            if (!this.hasRootNode)
                return;
            if (!this.lrud.getRootNode())
                return;
            if (direction) {
                const nodeBeforeMovement = this.lrud.getCurrentFocusNode();
                this.lrud.handleKeyEvent({ direction }, { forceFocus: true });
                const nodeAfterMovement = this.lrud.getCurrentFocusNode();
                if (nodeBeforeMovement === nodeAfterMovement) {
                    this.onDirectionHandledWithoutMovementRef.current(direction);
                }
            }
        });
    }
    hasOneNodeFocused() {
        return this.lrud.getCurrentFocusNode() !== undefined;
    }
    get hasRootNode() {
        try {
            this.lrud.getRootNode();
            return true;
        }
        catch (e) {
            console.warn('[React Spatial Navigation] No registered node on this page.');
            return false;
        }
    }
}
exports.default = SpatialNavigator;
//# sourceMappingURL=SpatialNavigator.js.map
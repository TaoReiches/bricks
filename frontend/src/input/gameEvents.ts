import EventEmitter from "eventemitter3";

export enum GameTypes {
    VIEW_CLICK,
    SHRINK,
}

export type GameEventTypes = keyof typeof GameTypes;

class GameEvents {
    private readonly emitter: EventEmitter;

    constructor() {
        this.emitter = new EventEmitter();
    }

    public dispatchEvents(type: GameEventTypes, ...args: any[]) {
        console.log("dispatch events: type-[" + type + "]  args-[" + args + "]");
        this.emitter.emit(type, ...args);
    }

    public subscribe(type: GameEventTypes, callback: (...args: any[]) => void) {
        this.emitter.on(type, callback);
    }
}

var gameEvents = new GameEvents();

export default gameEvents;

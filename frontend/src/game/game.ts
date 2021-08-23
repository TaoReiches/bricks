import * as PIXI from "pixi.js";
import { IContainer } from "../interface/IContainer";
import { BallManagement } from "../logic/ballManagement";
import Background from "./background";

class gameContainer extends PIXI.Container implements IContainer {
    gameContainer: PIXI.Container = this;

    private readonly ballManagement: BallManagement;

    constructor() {
        super();

        new Background(this);

        this.ballManagement = new BallManagement(this);
        this.ballManagement.resetBall();
    }

    public tick(delta: number) {
        // rotate the container!
        // use delta to create frame-independent transform
        // this.rotation -= 0.01 * delta;
        // console.log(PIXI.Ticker.shared.elapsedMS);
        this.ballManagement.update(PIXI.Ticker.shared.elapsedMS);
    }
}

export default gameContainer;

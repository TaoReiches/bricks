import * as PIXI from "pixi.js";
import { IContainer } from "../interface/IContainer";
import { BallManagement } from "../logic/ballManagement";
import Background from "./background";

class gameContainer extends PIXI.Container implements IContainer {
    gameContainer: PIXI.Container = this;

    private readonly ballManagement: BallManagement;

    constructor() {
        super();

        this.addBalls();
        // console.log("game container width: " + this.width + " height: " + this.height);

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

    private addBalls() {
        // const style = new PIXI.TextStyle({
        //     fontFamily: "Arial",
        //     fontSize: 36,
        //     fontStyle: "italic",
        //     fontWeight: "bold",
        //     fill: ["#ffffff", "#00ff99"], // gradient
        //     stroke: "#4a1850",
        //     strokeThickness: 5,
        //     dropShadow: true,
        //     dropShadowColor: "#000000",
        //     dropShadowBlur: 4,
        //     dropShadowAngle: Math.PI / 6,
        //     dropShadowDistance: 6,
        //     wordWrap: true,
        //     wordWrapWidth: 440,
        //     lineJoin: "round",
        // });
        // // Create a 5x5 grid of bunnies
        // for (let i = 0; i < 25; i++) {
        //     let bunny = PIXI.Sprite.from(texture);
        //     const x = (i % 5) * 50;
        //     const y = Math.floor(i / 5) * 50;
        //     bunny.scale.x = 0.3;
        //     bunny.scale.y = 0.3;
        //     // bunny.anchor.set(0.5);
        //     bunny.x = x;
        //     bunny.y = y;
        //     bunny.width = w;
        //     bunny.height = h;
        //     bunny.tint = Math.random() * 0xffffff;
        //     super.addChild(bunny);
        //     const number = new PIXI.Text(i.toString(), style);
        //     number.x = x;
        //     number.y = y;
        //     // number.worldAlpha = 0.5;
        //     // number.scale.y = 0.1;
        //     number.width = w / 2;
        //     number.height = h / 2;
        //     // number.anchor.set(0.5);
        //     super.addChild(number);
        // }
    }

    private setPosition() {
        // console.log("width: " + this.width + " height: " + this.height);
        // // Move container to the center
        // this.x = Settings.AppWidth / 2;
        // this.y = Settings.AppHeight / 2;
        // // Center bunny sprite in local container coordinates
        // this.pivot.x = this.width / 2;
        // this.pivot.y = this.height / 2;
    }
}

export default gameContainer;

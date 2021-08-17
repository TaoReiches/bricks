import * as PIXI from "pixi.js";
import Ball from "../game/ball";
import { IContainer } from "../interface/IContainer";
import { ball } from "../assets/images";

export class BallManagement {
    private readonly container: IContainer;
    private readonly ballTexture: PIXI.Texture;
    private readonly emitTime = 1;
    private ballCount: number = 10;
    private emitCount: number = 0;
    private emitAngle: number = 1;
    private balls: Ball[] = [];

    constructor(container: IContainer) {
        this.container = container;
        this.ballTexture = PIXI.Texture.from(ball);
    }

    public addBall(num: number) {
        this.ballCount += num;
    }

    public resetBall() {
        let ball = new Ball(this.ballTexture);
        ball.setPos(150, 150);
        this.container.gameContainer.addChild(ball.sprite);
        this.balls.push(ball);
    }

    public emit(angle: number) {
        this.emitCount = 0;
        this.emitAngle = angle;
    }

    public update(delta: number) {
        this.updateEmit();
    }

    private updateEmit() {}
}

import * as PIXI from "pixi.js";
import Ball from "../game/ball";
import { IContainer } from "../interface/IContainer";
import { ball } from "../assets/images";
import Settings from "../config/settings";
import { UI } from "../config/ui";
import textStyle from "../game/textStyle";
import { Data } from "./dataManagement";

export class BallManagement {
    private readonly container: IContainer;
    private readonly ballTexture: PIXI.Texture;
    private readonly ballNumber: PIXI.Text;
    private readonly ballBottom: Ball;
    private readonly emitTimeMS = 1000;
    private ballCount: number = 10;
    private emitCount: number = 0;
    private emitAngle: number = 1;
    private emitTimeElapsed: number = 0;
    private balls: Ball[] = [];

    constructor(container: IContainer) {
        this.container = container;
        this.ballTexture = PIXI.Texture.from(ball);

        const ballX = Settings.AppWidth / 2 - UI.BallSize;
        const ballY = Settings.AppHeight - UI.ItemSize - 10 - UI.BallSize;
        this.ballBottom = new Ball(this.ballTexture);
        this.ballBottom.setPos(ballX, ballY);
        this.container.gameContainer.addChild(this.ballBottom.sprite);

        this.ballNumber = new PIXI.Text(this.ballCount.toString(), textStyle.Style);
        this.ballNumber.x = ballX + UI.BallSize + 10;
        this.ballNumber.y = ballY + 3;
        this.ballNumber.width = UI.BallSize / 2;
        this.ballNumber.height = UI.BallSize / 2;
        this.container.gameContainer.addChild(this.ballNumber);
    }

    public addBall(num: number) {
        this.ballCount += num;
    }

    public resetBall() {
        this.ballNumber.visible = true;
        this.ballBottom.sprite.visible = true;
        this.emitCount = 0;
        this.emitTimeElapsed = 0;
    }

    public emit(angle: number) {
        this.emitCount = 0;
        this.emitAngle = angle;
    }

    public update(delta: number) {
        if (!Data.onShooting) {
            return;
        }
        this.updateEmit(delta);
    }

    private updateEmit(delta: number) {
        // check emitted balls
        if (this.emitCount >= this.ballCount) {
            return;
        }
        // check the time elapsed
        this.emitTimeElapsed += delta;
        if (this.emitTimeElapsed < this.emitTimeMS) {
            return;
        }
        this.emitTimeElapsed -= this.emitTimeMS;

        // update the number
        ++this.emitCount;
        if (this.emitCount >= this.ballCount) {
            this.ballBottom.sprite.visible = false;
            this.ballNumber.visible = false;
        } else {
            this.ballNumber.text = (this.ballCount - this.emitCount).toString();
        }
    }
}

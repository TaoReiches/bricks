import * as PIXI from "pixi.js";
import { UI } from "../config/ui";

enum BallColor {
    BLUE = 0x0c42c2,
    RED = 0xf00c1b,
    PURPLE = 0x9e1dde,
}

class Ball {
    private ballSprite: PIXI.Sprite;
    private readonly ballPos = 100;

    constructor(texture: PIXI.Texture) {
        this.ballSprite = PIXI.Sprite.from(texture);
        this.ballSprite.width = UI.BallSize;
        this.ballSprite.height = UI.BallSize;
        this.ballSprite.x = this.ballPos;
        this.ballSprite.y = this.ballPos;
        this.ballSprite.tint = BallColor.RED;
    }

    public get sprite() {
        return this.ballSprite;
    }

    public setPos(x: number, y: number) {
        this.ballSprite.x = x;
        this.ballSprite.y = y;
    }

    public setColor(color: BallColor) {
        this.ballSprite.tint = color;
    }
}

export default Ball;

import * as PIXI from "pixi.js";

enum BallColor {
    BLUE = 0x0c42c2,
    RED = 0xf00c1b,
    PURPLE = 0x9e1dde,
}

class Ball {
    constructor() {
        const ball = new PIXI.Graphics();
        ball.beginFill(BallColor.PURPLE);
        ball.drawCircle(0, 0, 50);
        ball.endFill();
    }
}

export default Ball;

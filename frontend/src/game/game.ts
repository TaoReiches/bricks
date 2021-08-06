import * as PIXI from "pixi.js";
import { ball } from "../assets/images";
import Settings from "../config/settings";

class gameContainer extends PIXI.Container {
    public initialize() {
        this.addBalls();
        this.setPosition();
    }

    public tick(delta: number) {
        // rotate the container!
        // use delta to create frame-independent transform
        this.rotation -= 0.01 * delta;
    }

    private addBalls() {
        // Create a new texture
        const texture = PIXI.Texture.from(ball);

        // Create a 5x5 grid of bunnies
        for (let i = 0; i < 25; i++) {
            const bunny = new PIXI.Sprite(texture);
            const x = (i % 5) * 70;
            const y = Math.floor(i / 5) * 70;
            bunny.scale.x = 0.5;
            bunny.scale.y = 0.5;
            bunny.anchor.set(0.5);
            bunny.x = x;
            bunny.y = y;
            super.addChild(bunny);

            const number = new PIXI.Text(i.toString());
            number.x = x;
            number.y = y;
            super.addChild(number);
        }
    }

    private setPosition() {
        console.log("width: " + this.width + " height: " + this.height);
        // Move container to the center
        this.x = Settings.AppWidth / 2;
        this.y = Settings.AppHeight / 2;

        // Center bunny sprite in local container coordinates
        this.pivot.x = this.width / 2;
        this.pivot.y = this.height / 2;
    }
}

export default gameContainer;

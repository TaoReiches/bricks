import * as PIXI from "pixi.js";
import { ball } from "../assets/images";
import Settings from "../config/settings";
import Background from "./background";

class gameContainer extends PIXI.Container {
    public initialize() {
        this.addBalls();
        this.setPosition();

        new Background(this);
    }

    public tick(delta: number) {
        // rotate the container!
        // use delta to create frame-independent transform
        this.rotation -= 0.01 * delta;
    }

    private addBalls() {
        // Create a new texture
        const texture = PIXI.Texture.from(ball);
        const w = 50;
        const h = 50;
        console.log("texture w: " + w + " h:" + h + " original w: " + texture.width);

        // top left
        const topleft = new PIXI.Sprite(texture);
        topleft.x = 700;
        topleft.y = 700;
        topleft.width = 100;
        topleft.height = 100;
        super.addChild(topleft);

        const style = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: 36,
            fontStyle: "italic",
            fontWeight: "bold",
            fill: ["#ffffff", "#00ff99"], // gradient
            stroke: "#4a1850",
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: "#000000",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
            lineJoin: "round",
        });

        // Create a 5x5 grid of bunnies
        for (let i = 0; i < 25; i++) {
            const bunny = new PIXI.Sprite(texture);
            const x = (i % 5) * 50;
            const y = Math.floor(i / 5) * 50;
            bunny.scale.x = 0.3;
            bunny.scale.y = 0.3;
            // bunny.anchor.set(0.5);
            bunny.x = x;
            bunny.y = y;
            bunny.width = w;
            bunny.height = h;
            bunny.tint = Math.random() * 0xffffff;
            super.addChild(bunny);

            const number = new PIXI.Text(i.toString(), style);
            number.x = x;
            number.y = y;
            // number.worldAlpha = 0.5;
            // number.scale.y = 0.1;
            number.width = w / 2;
            number.height = h / 2;
            // number.anchor.set(0.5);
            super.addChild(number);
        }
    }

    private setPosition() {
        // this.width = Settings.AppWidth;
        // this.height = Settings.AppHeight;
        // console.log("width: " + this.width + " height: " + this.height);
        // Move container to the center
        this.x = Settings.AppWidth / 2;
        this.y = Settings.AppHeight / 2;

        // Center bunny sprite in local container coordinates
        this.pivot.x = this.width / 2;
        this.pivot.y = this.height / 2;
    }
}

export default gameContainer;

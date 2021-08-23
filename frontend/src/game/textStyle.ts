import * as PIXI from "pixi.js";

class TextStyle {
    private readonly textStyle: PIXI.TextStyle;

    constructor() {
        this.textStyle = new PIXI.TextStyle({
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
    }

    public get Style() {
        return this.textStyle;
    }
}

var textStyle = new TextStyle();
export default textStyle;

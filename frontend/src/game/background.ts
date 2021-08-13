import * as PIXI from "pixi.js";
import Settings from "../config/settings";

class Background {
    constructor(container: PIXI.Container) {
        // draw rectangle
        const w = Settings.AppWidth;
        const h = Settings.AppHeight;
        const rect = new PIXI.Graphics();
        rect.lineStyle(2, 0xfeeb77, 1);
        rect.moveTo(10, 10);
        rect.lineTo(w - 10, 10);
        rect.lineTo(w - 10, h - 10);
        rect.lineTo(10, h - 10);
        rect.lineTo(10, 10);

        container.addChild(rect);
    }
}

export default Background;

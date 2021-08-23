import * as PIXI from "pixi.js";
import Settings from "../config/settings";
import { UI } from "../config/ui";

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
        rect.interactive = false;
        container.addChild(rect);

        // bottom line
        const bottomLine = new PIXI.Graphics();
        bottomLine.lineStyle(5, 0x000000, 1);
        bottomLine.moveTo(12, h - UI.ItemSize - 10);
        bottomLine.lineTo(w - 12, h - UI.ItemSize - 10);
        bottomLine.interactive = false;
        container.addChild(bottomLine);
    }
}

export default Background;

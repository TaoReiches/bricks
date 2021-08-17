import * as PIXI from "pixi.js";
import Settings from "./config/settings";

import gameContainer from "./game/game";

Settings.initialize();
console.log("window size: " + Settings.AppWidth + " : " + Settings.AppHeight);

const app = new PIXI.Application({
    width: Settings.AppWidth,
    height: Settings.AppHeight,
    backgroundColor: Settings.AppBackgroundColor,
    autoDensity: true,
    antialias: true,
    resolution: window.devicePixelRatio || 1,
    // resizeTo: window,
});
document.body.appendChild(app.view);

const game = new gameContainer();
app.stage.addChild(game);

app.ticker.add((delta) => {
    game.tick(delta);
});

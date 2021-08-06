import * as PIXI from "pixi.js";
import Settings from "./config/settings";

import gameContainer from "./game/game";

const app = new PIXI.Application({
    width: Settings.AppWidth,
    height: Settings.AppHeight,
    backgroundColor: Settings.AppBackgroundColor,
    resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const game = new gameContainer();
game.initialize();
app.stage.addChild(game);

app.ticker.add((delta) => {
    game.tick(delta);
});

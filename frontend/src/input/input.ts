import { Application } from "@pixi/app";
import { Data } from "../logic/dataManagement";
import gameEvents, { GameTypes } from "./gameEvents";

class Input {
    public initialize(app: Application) {
        // console.log(app.renderer.plugins);

        app.view.addEventListener("click", this.onViewClick);
    }

    private onViewClick(ev: MouseEvent) {
        if (Data.onShooting) {
            return;
        }
        Data.onShooting = true;

        gameEvents.dispatchEvents("VIEW_CLICK", ev.x, ev.y);
    }
}

const input = new Input();
export default input;

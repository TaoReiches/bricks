import { Application } from "@pixi/app";
import { Data } from "../logic/dataManagement";

class Input {
    public initialize(app: Application) {
        // console.log(app.renderer.plugins);

        app.view.addEventListener("click", this.onViewClick);
    }

    private onViewClick() {
        if (Data.onShooting) {
            return;
        }
        Data.onShooting = true;
    }
}

const input = new Input();
export default input;

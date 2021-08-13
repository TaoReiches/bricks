import { Application } from "@pixi/app";

class Input {
    public initialize(app: Application) {
        // console.log(app.renderer.plugins);

        app.view.addEventListener("click", function handleClick() {
            console.log("Hello world!");
        });
    }
}

const input = new Input();
export default input;

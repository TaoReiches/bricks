class Settings {
    public static get AppWidth() {
        return this.width;
    }
    public static get AppHeight() {
        return this.height;
    }

    public static AppBackgroundColor = 0x1099bb;

    private static width = 1080;
    private static height = 1920;
    private static readonly ratio = 1080 / 1920;

    public static initialize() {
        const windowWidth = window.innerWidth - 50;
        const windowHeight = window.innerHeight - 50;
        // test width
        let testWidth = windowWidth > this.width ? this.width : windowWidth;
        let testHeight = Math.floor(testWidth / this.ratio);
        // console.log(windowWidth + " : " + windowHeight);
        if (testHeight < windowHeight) {
            this.width = testWidth;
            this.height = testHeight;
        } else {
            this.height = windowHeight > this.height ? this.height : windowHeight;
            this.width = Math.floor(this.height * this.ratio);
            // console.log(this.width + " : " + this.height);
        }
    }
}

export default Settings;

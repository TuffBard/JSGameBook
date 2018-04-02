class Keyboard {
    constructor() {
        this.Keys = new Array();
    }

    get Left() {
        return this.Keys["ArrowLeft"];
    }

    get Right() {
        return this.Keys["ArrowRight"];
    }

    get Up() {
        return this.Keys["ArrowUp"];
    }

    get Down() {
        return this.Keys["ArrowDown"];
    }
}
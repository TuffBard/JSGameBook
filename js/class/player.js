class Player {

    constructor() {
        this.img = new Image();
        this.img.src = "./svg/rocket.svg";
        this.width = 35;
        this.heigth = 35;
        this.rotation = 0.25;
        this.x = 0;
        this.y = 0;
    }

    draw(x, y) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation * Math.PI);
        context.drawImage(this.img, -this.width / 2, -this.heigth / 2, this.width, this.heigth);
        context.restore();
    }
}
class Projectile {
    constructor() {
        this.x = 15;
        this.y = 15;
        this.r = 1;
        this.startAngle = 0;
        this.endAngle = 2;
    }

    draw() {
        context.strokeStyle = "#FF0000";
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        context.stroke();
    }
}
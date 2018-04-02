class Player {
    /**
     * Propriétés
     */

    constructor() {
        this.img = new Image();
        this.img.src = "./svg/rocket.svg";
        this.width = 35;
        this.heigth = 35;
        this.rotation = 0.25;
        this.rotationSpeed = 0.1;
        this.x = 0;
        this.y = 0;
        this.vitesse = 5;
    }

    /**
     * Déclenche les différents events du joueur
     */
    event() {
        this.movement();
    }

    /**
     * Dessine le joueur sur le canavs 
     */
    draw() {
        context.save();
        context.translate(this.x, this.y);
        console.log(this.rotation);
        context.rotate((0.30 + this.rotation) * Math.PI);
        context.drawImage(this.img, -this.width / 2, -this.heigth / 2, this.width, this.heigth);
        context.restore();
    }

    /***
     * 
     * Gesiton des déplacements
     * 
     */

    /**
     * Applique le mouvement du personnage
     */
    movement() {
        switch (true) {
            case keyboard.Left:
                this.toLeft();
                break;
            case keyboard.Right:
                this.toRight();
                break;
            case keyboard.Up:
                this.toUp();
                break;
            case keyboard.Down:
                this.toDown();
                break;
        }
    }

    toLeft() {
        this.x -= this.vitesse;
        this.rotateTo(1);

    }

    toRight() {
        this.x += this.vitesse;
        this.rotateTo(0);
    }

    toUp() {
        this.y -= this.vitesse;
        this.rotateTo(1.5);
    }

    toDown() {
        this.y += this.vitesse;
        this.rotateTo(0.5);
    }

    rotateTo(direction) {

        if (this.rotation - direction > 1) {
            direction += 2;
        }

        if (this.rotation - direction < -1) {
            direction -= 2;
        }

        if (this.rotation % 2 < direction) {
            this.rotation += this.rotationSpeed;
        }

        if (this.rotation % 2 > direction) {
            this.rotation -= this.rotationSpeed;
        }

        this.rotation = this.rotation % 2;
    }
}
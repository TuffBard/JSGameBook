class PlayerService {

    /**
     * Déclenche les différents events du joueur
     */
    event() {
        this.movements();
        this.collisions();
    }

    /**
     * Dessine le joueur sur le canavs 
     */
    draw() {
        context.save();
        context.translate(player.x, player.y);
        context.rotate((Direction.FixRotation + player.rotation) * Math.PI);
        context.drawImage(player.img, -player.width / 2, -player.heigth / 2, player.width, player.heigth);
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
    movements() {
        switch (true) {
            case keyboard.Left && keyboard.Down:
                this.deplace(-player.vitesse, player.vitesse, Direction.LeftDown);
                break;
            case keyboard.Left && keyboard.Up:
                this.deplace(-player.vitesse, -player.vitesse, Direction.LeftUp);
                break;
            case keyboard.Right && keyboard.Down:
                this.deplace(player.vitesse, player.vitesse, Direction.RightDown);
                break;
            case keyboard.Right && keyboard.Up:
                this.deplace(player.vitesse, -player.vitesse, Direction.RightUp);
                break;
            case keyboard.Left:
                this.deplace(-player.vitesse, 0, Direction.Left);
                break;
            case keyboard.Right:
                this.deplace(player.vitesse, 0, Direction.Right);
                break;
            case keyboard.Up:
                this.deplace(0, -player.vitesse, Direction.Up);
                break;
            case keyboard.Down:
                this.deplace(0, player.vitesse, Direction.Down);
                break;
        }
    }

    /**
     * Applique les collisions au personnage
     */
    collisions() {
        this.collisionEcran();
    }

    /**
     * Gestion collision écran
     */
    collisionEcran() {
        let LeftLimit = player.width * 0.7;
        let RightLimit = canvas.width - (player.width * 0.7);
        let UpLimit = player.width * 0.7;
        let DownLimit = canvas.height - (player.heigth * 0.7);

        player.x = player.x < LeftLimit ? LeftLimit : player.x;
        player.x = player.x > RightLimit ? RightLimit : player.x;
        player.y = player.y < UpLimit ? UpLimit : player.y;
        player.y = player.y > DownLimit ? DownLimit : player.y;
    }

    /**
     * Deplace le joueur
     * @param {int} v       Vertical
     * @param {int} h       Horizontal
     * @param {rad} rotate  Rotation en radian
     */
    deplace(v, h, rotate) {
        player.x += v;
        player.y += h;
        this.rotateTo(rotate);
    }

    /**
     * Tourne le joueur dans la direction demandée
     * @params  Double  direction   (en radian)
     */
    rotateTo(direction) {
        player.rotation = direction;
    }
}

Direction = Object.freeze({
    Right: 0,
    RightDown: 0.25,
    Down: 0.5,
    LeftDown: 0.75,
    Left: 1,
    LeftUp: 1.25,
    Up: 1.5,
    RightUp: 1.75,
    FixRotation: 0.25
});
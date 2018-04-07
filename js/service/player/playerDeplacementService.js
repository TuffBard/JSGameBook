/***
 * Service de gesiton des déplacements
 */
class PlayerDeplacementService {

    /**
     * Applique le mouvement du personnage
     */
    deplacement() {
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
        player.rotation = (direction + Direction.FixRotation) * Math.PI;
    }
}

/**
 * Directions en radian
 */
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
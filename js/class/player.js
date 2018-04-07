/**
 * Classe de gestion du joueur
 */
class Player {
    /**
     * Propriétés
     */
    constructor(x, y) {
        this.img = new Image();
        this.img.src = "./svg/rocket.svg";
        this.width = 20;
        this.heigth = 20;
        this.rotation = 0;
        this.x = x;
        this.y = y;
        this.vitesse = 10;
    }
}
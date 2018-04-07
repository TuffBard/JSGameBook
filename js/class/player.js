/**
 * Classe de gestion du joueur
 */
class Player {
    /**
     * Propriétés
     */
    constructor() {
        this.img = new Image();
        this.img.src = "./svg/rocket.svg";
        this.width = 20;
        this.heigth = 20;
        this.rotation = 0;
        this.x = 0;
        this.y = 0;
        this.vitesse = 10;
    }
}
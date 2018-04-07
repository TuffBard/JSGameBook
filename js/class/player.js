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
        this.projectiles = new Array();
    }

    /**
     * Dessine le joueur sur le canavs 
     */
    draw() {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.drawImage(this.img, -this.width / 2, -this.heigth / 2, this.width, this.heigth);
        
        for(let proj of this.projectiles){
            proj.draw();
        }
        
        context.restore();
    }
}
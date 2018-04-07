class PlayerService {
    constructor(){
        this.playerDeplacementService = new PlayerDeplacementService();
        this.playerCollisionService = new PlayerCollisionService();
    }

    /**
     * Déclenche les différents events du joueur
     */
    event() {
        this.playerDeplacementService.deplacement();
        this.playerCollisionService.collisions();
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
}
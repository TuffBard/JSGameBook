/**
 * Service de gesiton du joueur
 */
class PlayerService {
    constructor(){
        this.playerDeplacementService = new PlayerDeplacementService();
        this.playerCollisionService = new PlayerCollisionService();
        this.playerTirService = new PlayerTirService();
    }

    /**
     * Déclenche les différents events du joueur
     */
    event() {
        this.playerDeplacementService.deplacement();
        this.playerCollisionService.collisions();
        this.playerTirService.projectiles();

        player.draw();
    }
}
/**
 * Service de gestion des collision du joueur
 */
class PlayerCollisionService {
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
}
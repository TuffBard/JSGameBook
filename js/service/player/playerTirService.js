/**
 * Service de gestion des tirs
 */
class PlayerTirService {
    tirer(){
        if(keyboard.Space){
            player.projectiles.push(new Projectile());
        }
    }
}
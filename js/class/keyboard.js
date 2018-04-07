/**
 * Classe de gestion du clavier
 * @param {Array} Keys Liste des touche du clavier avec leur etat
 */
class Keyboard {
    constructor() {
        this.Keys = new Array();
    }

    /**
     * Vérifie si la fleche gauche est enfoncée
     * @return  Etat de la touche
     */
    get Left() {
        return this.Keys.ArrowLeft;
    }

    /**
     * Vérifie si la fleche droite est enfoncée
     * @return  Etat de la touche
     */
    get Right() {
        return this.Keys.ArrowRight;
    }

    /**
     * Vérifie si la fleche haut est enfoncée
     * @return  Etat de la touche
     */
    get Up() {
        return this.Keys.ArrowUp;
    }

    /**
     * Vérifie si la fleche bas est enfoncée
     * @return  Etat de la touche
     */
    get Down() {
        return this.Keys.ArrowDown;
    }
}
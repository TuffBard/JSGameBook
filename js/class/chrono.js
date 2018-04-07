/**
 * Classe de gestion de chronomètre
 * @param 
 */
class Chrono {
    constructor(){
        this.StartDate;
    }

    /**
     * Lance le chronomètre
     */
    Start(){
        this.StartDate = moment();
    }

    /**
     * Obtient le 
     */
    get Get(){
        return moment().diff(this.StartDate, "seconds", true);
    }

    /**
     * Remet le chrono à zero
     */
    Off(){
        this.StartDate = undefined;
    }

    /**
     * Vérifie si le temps est dépassé
     * @param {double} seconds 
     * @return bool
     */
    GreaterOrEquals(seconds){
        return this.Get() >= seconds;
    }
}
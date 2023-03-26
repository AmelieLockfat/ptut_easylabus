export default class NIVEAU {
    constructor(intitule) {
        this._intitule = intitule;
        if (intitule.substr(0,3)=="FIE"){
            this._estFIE = true;
        } else {
            this._estFIE = false;
        }
    }

    get intitule() {
        return this._intitule;
    }
    get estFIE() {
        return this._estFIE;
    }
}
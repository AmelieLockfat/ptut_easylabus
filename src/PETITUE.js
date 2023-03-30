export default class PETITUE {
    constructor(code, intitule) {
        this._code = code;
        this._intitule = intitule;
    }

    get code() {
        return this._code;
    }
    get intitule() {
        return this._intitule;
    }
}
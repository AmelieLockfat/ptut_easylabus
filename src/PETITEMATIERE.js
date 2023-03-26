export default class PETITEMATIERE {
    constructor(code, nom, contenu) {
        this._code = code;
        this._nom = nom;
        this._contenu = contenu;
    }

    get code() {
        return this._code;
    }
    get nom() {
        return this._nom;
    }
    get contenu() {
        return this._contenu;
    }
}
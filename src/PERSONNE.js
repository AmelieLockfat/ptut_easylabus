export default class PERSONNE {
    constructor(identifiant, motDePasse, prenom, nom, email, numTel, coordPrivee) {
        this._identifiant = identifiant;
        this._motDePasse = motDePasse;
        this._prenom = prenom;
        this._nom = nom;
        this._email = email;
        this._numTel = numTel;
        this._coordPrivee = coordPrivee;
    }

    get identifiant() {
        return this._identifiant;
    }
    get motDePasse() {
        return this._motDePasse;
    }
    get prenom() {
        return this._prenom;
    }
    get nom() {
        return this._nom;
    }
    get email() {
        return this._email;
    }
    get numTel() {
        return this._numTel;
    }
    get coordPrivee() {
        return this._coordPrivee;
    }
}
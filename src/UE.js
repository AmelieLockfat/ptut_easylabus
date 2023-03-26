export default class UE {
    constructor(code, intitule, creditsects, intitulediplome, nomorientation, intituleniveau, numsemestre, ordre, motscles, competences, heurecm, heuretd, heuretp, volumtravailperso, volumprojet, volumstage, prerequis, modalitescontrole, bibliographiedebase) {
        this._code = code;
        this._intitule = intitule;
        this._creditsects = creditsects;
        this._intitulediplome = intitulediplome;
        this._nomorientation = nomorientation;
        this._intituleniveau = intituleniveau;
        this._numsemestre = numsemestre;
        this._ordre = ordre;
        this._motscles = motscles;
        this._competences = competences;
        this._heurecm = heurecm;
        this._heuretd = heuretd;
        this._heuretp = heuretp;
        this._volumtravailperso = volumtravailperso;
        this._volumprojet = volumprojet;
        this._volumstage = volumstage;
        this._prerequis = prerequis;
        this._modalitescontrole = modalitescontrole;
        this._bibliographiedebase = bibliographiedebase;
    }

    get code() {
        return this._code;
    }
    get intitule() {
        return this._intitule;
    }
    get creditsects() {
        return this._creditsects;
    }
    get intitulediplome() {
        return this._intitulediplome;
    }
    get nomorientation() {
        return this._nomorientation;
    }
    get intituleniveau() {
        return this._intituleniveau;
    }
    get numsemestre() {
        return this._numsemestre;
    }
    get ordre() {
        return this._ordre;
    }
    get motscles() {
        return this._motscles;
    }
    get competences() {
        return this._competences;
    }
    get heurecm() {
        return this._heurecm;
    }
    get heuretd() {
        return this._heuretd;
    }
    get heuretp() {
        return this._heuretp;
    }
    get volumtravailperso() {
        return this._volumtravailperso;
    }
    get volumprojet() {
        return this._volumprojet;
    }
    get volumstage() {
        return this._volumstage;
    }
    get prerequis() {
        return this._prerequis;
    }
    get modalitescontrole() {
        return this._modalitescontrole;
    }
    get bibliographiedebase() {
        return this._bibliographiedebase;
    }
}
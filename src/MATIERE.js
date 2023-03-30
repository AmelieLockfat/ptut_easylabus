export default class MATIERE {
    constructor(code, nom, heurecm, heuretd, heuretp, heuretotalencadree, heuretravailperso, coefficient, modalitesevaluation, prerequis, planducours, codeue, intituleue, numsemestre) {
        this._code = code;
        this._nom = nom;
        this._heurecm = heurecm;
        this._heuretd = heuretd;
        this._heuretp = heuretp;
        this._heuretotalencadree = heuretotalencadree;
        this._heuretravailperso = heuretravailperso;
        this._coefficient = coefficient;
        this._modalitesevaluation = modalitesevaluation;
        this._prerequis = prerequis;
        this._planducours = planducours;
        this._codeue = codeue;
        this._intituleue = intituleue;
        this._numsemestre = numsemestre;
    }
    
    get code() {
        return this._code;
    }
    get nom() {
        return this._nom;
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
    get heuretotalencadree() {
        return this._heuretotalencadree;
    }
    get heuretravailperso() {
        return this._heuretravailperso;
    }
    get coefficient() {
        return this._coefficient;
    }
    get modalitesevaluation() {
        return this._modalitesevaluation;
    }
    get prerequis() {
        return this._prerequis;
    }
    get planducours() {
        return this._planducours;
    }
    get codeue() {
        return this._codeue;
    }
    get intituleue() {
        return this._intituleue;
    }
    get numsemestre() {
        return this._numsemestre;
    }
}
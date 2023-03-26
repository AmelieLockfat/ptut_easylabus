export default class SEMESTRE {
    constructor(id, num) {
        this._id = id;
        this._num = num;
    }

    get id() {
        return this._id;
    }
    get num() {
        return this._num;
    }
}
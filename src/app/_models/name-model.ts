export class NameModel {

    constructor(private _name: string, private _lang: string) {}

    get name(): string {
        return this._name;
    }

    get lang(): string {
        return this._lang;
    }

}

export class DescriptionModel {

    constructor(private _description: string, private _lang: string) {}

    get description(): string {
        return this._description;
    }

    get lang(): string {
        return this._lang;
    }

}

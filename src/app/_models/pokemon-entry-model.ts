export class PokemonEntryModel {

    constructor(private _entryNumber: number, private _url: string) {}

    get entryNumber(): number {
        return this._entryNumber;
    }

    get url(): string {
        return this._url;
    }

}

export class PokemonStatModel {

    constructor(private _name: string, private _base: number) {}

    get name(): string {
        return this._name;
    }

    get base(): number {
        return this._base;
    }

}
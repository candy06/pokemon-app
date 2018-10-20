export class PokemonTypeModel {

    constructor(private _name: string, private _slot: number){}

    get name(): string {
        return this._name;
    }

    get slot(): number {
        return this._slot;
    }

}
import { NameModel } from "./name-model";
import { DescriptionModel } from "./description-model";
import { PokemonTypeModel } from "./pokemon-type-model";
import { PokemonStatModel } from "./pokemon-stat-model";

export class PokemonModel {

    constructor(private _names: NameModel[], private _descriptions: DescriptionModel[], private _types?: PokemonTypeModel[], private _sprite?: string, private _stats?: PokemonStatModel[], 
        private _abilities?: string[], private _moves?: string[]) { }

    getName(lang: string): string {
        let name: string = '';
        this._names.forEach((nameModel: NameModel) => {
            if (nameModel.lang === lang) name = nameModel.name;
        });
        return name;
    }

    getDescription(lang: string): string {
        let descriptions: Array<string> = [];
        this._descriptions.forEach((descriptionModel: DescriptionModel) => {
            if (descriptionModel.lang === lang) descriptions.push(descriptionModel.description);
        });
        return descriptions[0];
    }

    getBestStat(): PokemonStatModel {
        const values: number[] = [];
        this._stats.map((stat: PokemonStatModel) => values.push(stat.base));
        console.log(values);
        const max: number = Math.max(...values);
        console.log(max);
        return null;
    }

    get sprite(): string {
        return this._sprite;
    }

    set sprite(sprite: string) {
        this._sprite = sprite;
    }

    get types(): PokemonTypeModel[] {
        return this._types;
    }

    set types(types: PokemonTypeModel[]) {
        this._types = types;
    }

    get stats(): PokemonStatModel[] {
        return this._stats;
    }

    set stats(stats: PokemonStatModel[]) {
        this._stats = stats;
    }

    get abilities(): string[] {
        return this._abilities;
    }

    set abilities(abilities: string[]) {
        this._abilities = abilities;
    }

    get moves(): string[] {
        return this._moves;
    }

    set moves(moves: string[]) {
        this._moves = moves;
    }

}
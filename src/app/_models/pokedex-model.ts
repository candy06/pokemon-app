
import { PokemonEntryModel } from "./pokemon-entry-model";
import { NameModel } from "./name-model";
import { DescriptionModel } from "./description-model";

export class PokedexModel {

    constructor(private _id: number, private names: NameModel[], private descriptions: DescriptionModel[], private _pokemonEntryModels: PokemonEntryModel[]) {}

    get id(): number {
        return this._id;
    }

    get pokemonEntryModels(): PokemonEntryModel[] {
        return this._pokemonEntryModels;
    }

    private getName(lang: string): string {
        let name: string = '';
        this.names.forEach((pokedexNameModel: NameModel) => {
            if (pokedexNameModel.lang === lang) name = pokedexNameModel.name;
        });
        return name;
    }

    private getDescription(lang: string): string {
        let description: string = '';
        this.descriptions.forEach((pokedexDescriptionModel: DescriptionModel) => {
            if (pokedexDescriptionModel.lang === lang) description = pokedexDescriptionModel.description;
        });
        return description;
    }

}

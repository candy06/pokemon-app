import { NameModel } from "./name-model";
import { DescriptionModel } from "./description-model";

export class PokemonAbilityModel {

    constructor(private _names: NameModel[], private _effectDescriptions: DescriptionModel[]) {}

    public getName(lang: string): string {
        const names: string[] = [];
        this._names.forEach((nameModel: NameModel) => {
            if (nameModel.lang === lang) names.push(nameModel.name);
        });
        return names[0];
    }

    public getDescription(lang: string): string {
        const descriptions: string[] = [];
        this._effectDescriptions.forEach((descriptionModel: DescriptionModel) => {
            if (descriptionModel.lang === lang) descriptions.push(descriptionModel.description);
        });
        return descriptions[0];
    }

}

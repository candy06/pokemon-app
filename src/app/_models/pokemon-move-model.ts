import { NameModel } from "./name-model";
import { DescriptionModel } from "./description-model";

export class PokemonMoveModel {

    constructor(private _names: NameModel[], private _descriptions: DescriptionModel[], private _power: number,
        private _accuracy: number, private _pp: number, private _priority: number, private _type: string) { }

    public getName(lang: string): string {
        const names: string[] = [];
        this._names.forEach((nameModel: NameModel) => {
            if (nameModel.lang === lang) names.push(nameModel.name);
        });
        return names[0];
    }

    public getDescription(lang: string): string {
        const descriptions: string[] = [];
        this._descriptions.forEach((descriptionModel: DescriptionModel) => {
            if (descriptionModel.lang === lang) descriptions.push(descriptionModel.description);
        });
        return descriptions[0];
    }

    get power(): number {
        return this._power;
    }

    get accuracy(): number {
        return this._accuracy;
    }

    get pp(): number {
        return this._pp;
    }

    get priority(): number {
        return this._priority;
    }

    get type(): string {
        return this._type;
    }

}

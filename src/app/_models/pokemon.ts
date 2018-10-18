import { Name } from "./name";
import { PokemonStatistic } from "./pokemon-statistic";
import { PokemonType } from "./pokemon-type";

export class Pokemon {

    public id: number;
    public order: number;
    public names: Array<Name>;
    public imgUrl: string;
    public stats: Array<PokemonStatistic>;
    public types: Array<PokemonType>;

    constructor(id: number, order: number, names: Array<Name>, types?: Array<PokemonType>, stats?: Array<PokemonStatistic>, imgUrl?: string) { 
        this.id = id;
        this.order = order;
        this.names = names;
        this.stats = stats;
        this.imgUrl = imgUrl;
        this.types = types;
    } 

    setStatistics(stats: Array<PokemonStatistic>): void {
        this.stats = stats;
    }

    setImageUrl(url: string): void {
        this.imgUrl = url;
    }

    setTypes(types: Array<PokemonType>): void {
        this.types = types;
    }

    getTypes(): Array<PokemonType> {
        return this.types;
    }

    getName(lang: string): string {
        switch (lang) {
            case 'zh-Hans':
                return this.names[0].name;
            case 'ja':
                return this.names[1].name;
            case 'en':
                return this.names[2].name;
            case 'it':
                return this.names[3].name;
            case 'es':
                return this.names[4].name;
            case 'de':
                return this.names[5].name;
            case 'fr':
                return this.names[6].name;
            case 'zh-Hant':
                return this.names[7].name;
            case 'ko':
                return this.names[8].name;
            case 'roomaji':
                return this.names[9].name;
            case 'ja-Hrkt':
                return this.names[10].name;
            default:
                return '???';
        }
    }

}

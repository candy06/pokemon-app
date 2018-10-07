import { Name } from "./name";

export class Pokemon {

    private id: number;
    private names: Array<Name>;
    private imgUrl: string;

    constructor(id: number, names: Array<Name>, imgUrl?: string) { 
        this.id = id;
        this.names = names;
        this.imgUrl = imgUrl;
    } 

    setImageUrl(url: string) {
        this.imgUrl = url;
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

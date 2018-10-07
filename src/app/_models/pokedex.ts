export class Pokedex {

    public imageUrl: string;

    constructor(public id: number, public name: string, public description: string, 
        public speciesUrls: Array<string>, public versions:Array<string>) {
            if(this.id == 1) versions.push('all');
            this.setImageUrl();
    }
    
    private setImageUrl(): void {
        switch (this.id) {
            case 1:
                this.imageUrl = '/assets/pikachu.png';
                break;
            case 2:
                this.imageUrl = '/assets/kanto.png';
                break;
            case 3:
                this.imageUrl = '/assets/johto.png';
                break;
            case 4:
                this.imageUrl = '/assets/hoenn.png';
                break;
            case 5:
                this.imageUrl = '/assets/sinnoh.png';
                break;
            case 6:
                this.imageUrl = '/assets/sinnoh.png';
                break;
            case 7:
                this.imageUrl = '/assets/johto.png';
                break;
            case 8:
                this.imageUrl = '/assets/unys.png';
                break;
            case 9:
                this.imageUrl = '/assets/unys.png';
                break;
            default:
                break;
        }
    }

}

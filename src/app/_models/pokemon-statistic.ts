export class PokemonStatistic {

    constructor(public name: string, public base_stats: number) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
    }

}
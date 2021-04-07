export class pokemon {
    name: string;
    speed: number;

     static attackFirst(p1: pokemon, p2: pokemon){
        if (p1 !== p2){
            if (p1.speed > p2.speed){
                return p1;
            } else if (p2.speed > p1.speed) {
                return p2
            }
            const rn = Math.floor(Math.random() * 2) + 1;
            if (rn === 1){
                return p1;
            }
            return p2;
        }
         console.error(`${p1.name} et ${p2.name} sont les mêmes Pokemon`);
        return undefined;
    }

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }
}
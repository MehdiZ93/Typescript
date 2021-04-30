import {Pokemon} from "./Pokemon";

export class Battle{
    static battle(p1: Pokemon, p2: Pokemon) {
        if(p1.hp <= 0){
            console.log(p2.name + " won !");
            return p2;
        } else if (p2.hp <= 0){
            console.log(p1.name + " won !");
            return p1;
        }
        setTimeout(() =>{
            p1.attack(p2);
            this.battle(p2, p1)
        }, 1000)
    }
}
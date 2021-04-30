import {Move} from "./Move";

export class Pokemon {
    name: string;
    hp: number;
    speed: number;
    evasion: number;
    move: Move;

     static attackFirst(p1: Pokemon, p2: Pokemon){
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
         console.error(p1.name + " et " + p2.name + " sont les mêmes Pokemon");
        return undefined;
    }

    attack(defender: Pokemon){
        console.log(this.name + " use " + this.move.name)
         if (Pokemon.accuracyCheck(this)){
            console.log(this.name + " hit " + defender.name);
            defender.hp =defender.hp - this.move.power;
        } else {
             console.log("Attack failed");
         }
    }

    static accuracyCheck(attacker: Pokemon){
         if(attacker.move.accuracy === 100) {
             return true;
         }
        if (Math.random()*100 < attacker.move.accuracy){
            return true
        }
        return false
    }
    constructor(name: string, speed: number, hp:number, evasion: number, move: Move) {
        this.name = name;
        this.speed = speed;
        this.hp = hp;
        this.evasion = evasion;
        this.move = move;
    }
}
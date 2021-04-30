import {Pokemon} from "./Pokemon";
import {Move} from "./Move";
import {Battle} from "./Battle";

let pikachu = new Pokemon('pikachu', 20, 100, 10, new Move("tackle", 20, 100));
let squirtle = new Pokemon('squirtle', 15, 100, 10, new Move("tackle", 20, 80));

console.log("Fight start !");
if (Pokemon.attackFirst(pikachu, squirtle) === pikachu){
    Battle.battle(pikachu, squirtle);
} else {
    Battle.battle(squirtle, pikachu);
}



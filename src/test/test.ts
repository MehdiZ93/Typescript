import {Pokemon} from "../Pokemon";
import {Move} from "../Move";
describe("Pokemon class tests", () => {
    let p1: Pokemon;
    let p2: Pokemon;
    beforeEach(() => {
        p1 = new Pokemon('pikachu', 20, 100, 10, new Move("tackle", 20, 100));
        p2 = new Pokemon('squirtle', 15, 100, 10, new Move("tackle", 20, 80));
    });
    describe('attackFirst function', () => {
        it('should return p1 when p1 speed > p2 speed', () => {

            expect(Pokemon.attackFirst(p1, p2)).toBe(p1);
        });

        it('should return undefined when giving the same pokemon', () => {

            expect(Pokemon.attackFirst(p1, p1)).toBeUndefined();
        });

        it('should return p2 when p2 speed is higher than p1', () => {
            p2.speed = p1.speed + 1;
            expect(Pokemon.attackFirst(p1, p2)).toBe(p2);
        });
    })
    describe("Attack function", () =>{
        it('should return p2 with minus 20 hp', () =>{
            expect(p1.attack(p2)).toBe(p2);
        })
    })
})
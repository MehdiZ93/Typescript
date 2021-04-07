import {pokemon} from "../pokemon";

describe('attackFirst function', () => {
    it('should return p1 when p1 speed > p2 speed', () => {
        const p1 = new pokemon('pikachu', 20);
        const p2 = new pokemon('squirtle', 15);

        expect(pokemon.attackFirst(p1, p2)).toBe(p1);
    });

    it('should return undefined when giving the same pokemon', () => {
        const p1 = new pokemon('pikachu', 20);

        expect(pokemon.attackFirst(p1, p1)).toBeUndefined();
    });

    it('should return p2 when p2 speed is higher than p1', () => {
        const p1 = new pokemon('pikachu', 20);
        const p2 = new pokemon('squirtle', 25);

        expect(pokemon.attackFirst(p1, p2)).toBe(p2);
    });
})
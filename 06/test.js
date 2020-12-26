const assert = require('assert');

const orbit = require('./06').orbit;
const orbit2 = require('./06.js').orbit2;

describe('Day 6', () => {
    it('Orbit Counts', () => {
        const input = 
        `COM)B
        B)C
        C)D
        D)E
        E)F
        B)G
        G)H
        D)I
        E)J
        J)K
        K)L`;

        assert.strictEqual(orbit(input), 42)

    });

    it('Orbit Counts 2', () => {
        const input = 
        `COM)B
        B)C
        C)D
        D)E
        E)F
        B)G
        G)H
        D)I
        E)J
        J)K
        K)L
        K)YOU
        I)SAN`;

        assert.strictEqual(orbit2(input, "SAN", "YOU"), 4)

    });

})
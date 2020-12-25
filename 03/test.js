const assert = require('assert');
const closest_manhattan = require('./03');

describe('Day 03', () => {
    it('Sample 1', () => {
        const w1 = "R8,U5,L5,D3".split(",")
        const w2 = "U7,R6,D4,L4".split(",")
        assert.deepStrictEqual(closest_manhattan(w1, w2), {p1:6, p2:30})
    });

    it('Sample 2', () => {
        const w1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72".split(",")
        const w2 = "U62,R66,U55,R34,D71,R55,D58,R83".split(",")
        assert.deepStrictEqual(closest_manhattan(w1, w2), {p1:159, p2:610})
    });

    it('Sample 3', () => {
        const w1 = "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51".split(",")
        const w2 = "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7".split(",")
        assert.deepStrictEqual(closest_manhattan(w1, w2), {p1:135, p2:410})
    });
})
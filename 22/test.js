const assert = require('assert');
const part1 = require('./22').part1;



describe('Day 10', () => {
    it('Part 1 Sample 1', () => {
        input = `deal with increment 7
        deal into new stack
        deal into new stack`
        result = [0, 3, 6, 9, 2, 5, 8, 1, 4, 7]
        assert.deepStrictEqual(part1(input, 10), result)
    }),
    it('Part 1 Sample 2', () => {

        input = `cut 6
        deal with increment 7
        deal into new stack`
        result = [3, 0, 7, 4, 1, 8, 5, 2, 9, 6]
        assert.deepStrictEqual(part1(input, 10), result)
    }),
    it('Part 1 Sample 3', () => {
        input = `deal with increment 7
        deal with increment 9
        cut -2`
        result = [6, 3, 0, 7, 4, 1, 8, 5, 2, 9]
        assert.deepStrictEqual(part1(input, 10), result)
    }),
    it('Part 1 Sample 4', () => {
        input = `deal into new stack
        cut -2
        deal with increment 7
        cut 8
        cut -4
        deal with increment 7
        cut 3
        deal with increment 9
        deal with increment 3
        cut -1`
        result = [9, 2, 5, 8, 1, 4, 7, 0, 3, 6]
        assert.deepStrictEqual(part1(input, 10), result)
    });

})
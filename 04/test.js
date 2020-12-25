const assert = require('assert');
const part1 = require('./04').part1;
const part2 = require('./04').part2;

describe('Day 04', () => {
    it('Part 1', () => {
        assert.strictEqual(part1('111111'), true)
        assert.strictEqual(part1('223450'), false)
        assert.strictEqual(part1('123789'), false)
    });

    it('Part 2', () => {
        assert.strictEqual(part2('112233'), true)
        assert.strictEqual(part2('123444'), false)
        assert.strictEqual(part2('111122'), true)
    });
})
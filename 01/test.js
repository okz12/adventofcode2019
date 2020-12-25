const assert = require('assert');
const getFuel1 = require('./01').getFuel1;
const getFuel2 = require('./01').getFuel2;

describe('Day 01', () => {
    it('Part 1', () => {
        assert.strictEqual(getFuel1(12), 2)
        assert.strictEqual(getFuel1(14), 2)
        assert.strictEqual(getFuel1(1969), 654)
        assert.strictEqual(getFuel1(100756), 33583)
    });

    it('Part 2', () => {
        assert.strictEqual(getFuel2(14), 2);
        assert.strictEqual(getFuel2(1969), 966)
        assert.strictEqual(getFuel2(100756), 50346)
    })
})
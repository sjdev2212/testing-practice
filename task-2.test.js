const { expect } = require('@jest/globals');
const reverseString = require('./task-2');

test('reverse string',()=>{
    expect(typeof reverseString('microverse')).toBe('string')
})
test('',()=>{
    expect(typeof reverseString('microverse')).not.toBe('number')
})
test('returns string length',()=>{
    expect(typeof reverseString('microverse')).not.toBe('undefined')
})
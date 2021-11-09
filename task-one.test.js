

const stringLength = require('./task-one')

test('returns string length',()=>{
    expect(typeof stringLength('microverse')).toBe('number')
})
test('check string length',()=>{
    expect( stringLength('')).toBeFalsy()
})
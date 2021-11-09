const capitalString =require('./task-4')


  describe('capitalize string', () => {
    test('should be a string',()=>{
        expect(typeof capitalString('something')).toBe('string')
    })
    test('should not be null',()=>{
        expect(typeof capitalString('something')).not.toBe('null')
    })
    test('first letter should be uppercase',()=>{
        expect(capitalString('something')).toBe('Something')
    });
    });
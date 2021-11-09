
const { not } = require('expect');
const calculator = require('./task-3')

describe('calculator sum', () => {
test('should be a number',()=>{
    expect(typeof calculator.add(2,3)).toBe('number')
})
test('should not be null',()=>{
    expect(typeof calculator.add(2,3)).not.toBe('null')
})
test('should return correct result',()=>{
    expect(calculator.add(2,3)).toBe(5)
});
});

describe('calculator substract', () => {
    test('should be a number',()=>{
        expect(typeof calculator.substract(2,3)).toBe('number')
    })
    test('should not be null',()=>{
        expect(typeof calculator.substract(2,3)).not.toBe('null')
    })
    test('should return correct result',()=>{
        expect(calculator.substract(5,3)).toBe(2)
    });
    });


    describe('calculator division', () => {
        test('should be a number',()=>{
            expect(typeof calculator.divide(2,3)).toBe('number')
        })
        test('should not be null',()=>{
            expect(typeof calculator.divide(2,3)).not.toBe('null')
        })
        test('should return correct result',()=>{
            expect(calculator.divide(6,3)).toBe(2)
        });
        });


        describe('calculator multiply', () => {
            test('should be a number',()=>{
                expect(typeof calculator.multiply(2,3)).toBe('number')
            })
            test('should not be null',()=>{
                expect(typeof calculator.multiply(2,3)).not.toBe('null')
            })
            test('should return correct result',()=>{
                expect(calculator.multiply(5,3)).toBe(15)
            });
            });
const funcTest = require('./functions') 

test('should return 2', ()=>{
    expect(funcTest.returnTwo()).toBe(2)
})

test('should return "Hello, James."', () =>{
    expect(funcTest.greeting('James')).toBe("Hello, James.")
})

test('should equal to sum of num1 and num2', ()=>{
    expect(funcTest.add(+5,+9)).toBe(14)
})

describe('Math functions', ()=>{
    test('should equal to multiply of num 1 and num 2', ()=>{
        expect(funcTest.multiply(2, 3)).toBe(6)
        expect(funcTest.multiply(4, 3)).toBe(12)
    })
    it('should equal to subtract of num1 and num2', ()=>{
        expect(funcTest.subtract(5, 2)).toBe(3)
        expect(funcTest.subtract(5, 4)).toBe(1)
    })
    test('should equal to divide of num1 and num2', ()=>{
        expect(funcTest.divide(6, 2)).toBe(3)
        expect(funcTest.divide(15, 3)).toBe(5)
    })
})

describe('params check', ()=>{
    test('should be numbers', ()=>{
        expect(funcTest)
    })
})
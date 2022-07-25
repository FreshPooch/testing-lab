const {
  returnTwo, 
  greeting, 
  add, 
  multiply
} = require('./functions.js')

test("Will return 2 equal 2", () => expect(returnTwo()).toEqual(2))

test("will return Hello James", () => expect(greeting('James')).toEqual('Hello, James')); 
test('will return Hello Jill', () => expect(greeting('Jill')).toEqual('Hello, Jill'))

describe('Math tests', () => {
  test('add correctly', () => expect(add(1, 2)).toEqual(3)); 
  test('add correctly', () => expect(add(5, 9)).toEqual(14)); 
  test('multiply correctly', () => expect(multiply(2, 1)).toEqual(2)); 
  test('multiply correctly', () => expect(multiply(5, 6)).toEqual(30)); 

})



const myFizzBuzz = require('./myFizzBuzz');

test('Verifica se um número é FizzBuzz', () => {
  expect(myFizzBuzz(30)).toBe('fizzbuzz');
});

test('Verifica se um número é Fizz', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});

test('Verifica se um número é Buzz', () => {
  expect(myFizzBuzz(20)).toBe('buzz');
});

test('Verifica se um número não é nada', () => {
  expect(myFizzBuzz(7)).toBe(7);
});

test('Verifica se não é um número', () => {
  expect(myFizzBuzz('Abacate')).toBeFalsy();
});

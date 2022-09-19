const sum = require('./sum');

test('Verifica se a soma de 4 + 5 = 9.', () => {
  expect(sum(4, 5)).toBe(9);
});

test('Verifica se a soma de 0 + 0 = 0.', () => {
  expect(sum(0, 0)).toBe(0);
});

test('Verifica se a soma de 4 + "5" gera um erro.', () => {
  expect(() => sum(4, "5")).toThrow();
});

test('Verifica se a soma de 4 + "5" gera um erro com a mensagem correta.', () => {
  expect(() => sum(4, "5")).toThrow('parameters must be number');
});

const {encode, decode} = require('./code');

test('Testa se Encode e Decode são funções', () => {
  expect(typeof encode).toBe('function');
  expect(typeof decode).toBe('function');
});

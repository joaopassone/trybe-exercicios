const {encode, decode} = require('./code');

test('Testa se Encode e Decode são funções', () => {
  expect(typeof encode).toBe('function');
  expect(typeof decode).toBe('function');
});

test('Testa se Encode transforma aeiou em 12345', () => {
  expect(encode('aeiou')).toBe('12345');
});

test('Testa se Decode transforma 12345 em aeiou', () => {
  expect(decode('12345')).toBe('aeiou');
});

test('Testa se Encode e Decode não alteram outros valores', () => {
  expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
  expect(decode('67890')).toBe('67890');
});

test('Testa se Encode e Decode retornam strings do mesmo tamanho das strings parâmetro', () => {
  expect(encode('abcdefghij').length).toBe('abcdefghij'.length);
  expect(decode('123456789').length).toBe('123456789'.length);
});

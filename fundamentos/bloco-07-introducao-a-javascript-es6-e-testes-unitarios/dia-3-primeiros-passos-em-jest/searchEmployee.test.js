const searchEmployee = require('./searchEmployee');

describe('Testes do Exercício Bônus', () => {
  test('Verifica se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('Verifica se a função encontra as informações pedidas', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });
  test('Verifica se ocorre mensagem de erro quando ID não é encontrado', () => {
    expect(searchEmployee('2365-9', 'lastName')).toBe('ID não identificada');
  });
  test('Verifica se ocorre mensagem de erro quando a informação não está disponível', () => {
    expect(searchEmployee('8579-6', 'adress')).toBe('Informação indisponível');
  });
});

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Teste da função uppercase', (done) => {
  uppercase('cavalo', (string) => {
    expect(string).toBe('CAVALO');
    done();
  });
});

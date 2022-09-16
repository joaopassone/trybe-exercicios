let fatorial = (N) => N === 1 ? 1 : N * fatorial(N - 1);

let biggestWord = (frase) => {
  frase = frase.split(' ');
  frase.sort((a, b) => b.length - a.length);
  return frase[0];
}

console.log(biggestWord('A minha prima arranjou um namorado legal demais!'));

function substituaX(nome) {
  const frase = 'Tryber x aqui!';
  let novaFrase = frase.replace('x', nome);
  return novaFrase;
}

console.log(substituaX('Lafaiete'));

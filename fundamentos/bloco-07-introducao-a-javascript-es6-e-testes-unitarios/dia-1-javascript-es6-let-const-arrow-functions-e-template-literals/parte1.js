let testing = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testing(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados e forma crescente!`); // será necessário alterar essa linha 😉

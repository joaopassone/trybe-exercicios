// Exercício 1

let romToAra = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D : 500,
    M: 1000
}

let romano = 'MCMLXXXVIII';
let res = 0;

for (let index = 0; index < romano.length; index += 1) {
    if (romToAra[romano[index + 1]] > romToAra[romano[index]])
        res -= romToAra[romano[index]];
    else
        res += romToAra[romano[index]];
}

console.log(res);

// Exercício 2

function arrayOfNumbers (vector) {
    let evensArray = [];
    for (number of vector) {
        if (number % 2 === 0)
            evensArray.push(number);
    }

    return evensArray;
}

console.log(arrayOfNumbers([1, 4, 6, 19, 3, 7, 90, 87]));

// Exercício 3

function fruitsOfBasket (basket){
    let numberOfFruits = {};
    for (fruit of basket) {
        if (numberOfFruits[fruit] === undefined)
            numberOfFruits[fruit] = 1;
        numberOfFruits[fruit] += 1;
    }

    return numberOfFruits;
}

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

 let result = fruitsOfBasket(basket);

 process.stdout.write('Sua cesta tem: ');
 for (key in result)
    process.stdout.write(`${result[key]} ${key}s, `);
process.stdout.write(`\n`);

// Exercício 4

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}`);

//   Exercício 5

for (let index = 0; index < moradores.blocoUm.length; index += 1)
    console.log(moradores.blocoUm[index].nome, moradores.blocoUm[index].sobrenome);

for (let index = 0; index < moradores.blocoDois.length; index += 1)
    console.log(moradores.blocoDois[index].nome, moradores.blocoDois[index].sobrenome);
    
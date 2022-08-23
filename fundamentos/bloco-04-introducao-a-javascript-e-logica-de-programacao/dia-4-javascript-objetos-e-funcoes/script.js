// Para fixar - Objetos

// Exercício 1

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
};

// Exercćicio 2

console.log ('A jogadora', player.name, player.lastName, 'tem', player.age, 'anos de idade.');

// Exercício 3

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// Exercício 4

console.log('A jogadora', player.name, player.lastName, 'foi eleita a melhor do mundo por', player.bestInTheWorld.length, 'vezes.');

// Exercício 5

console.log('A jogadora possui', player.medals.golden, 'medalhas de ouro e', player.medals.silver, 'medalhas de prata.');



// Para fixar - for/in e for/of

// Exercício 1

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let key in names)
  console.log('Olá', names[key]);

// Exercício 2

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let key in car)
  console.log(key + ':', car[key]);


// Para fixar - funcoes

// Exercício 1

function myData (name, city, year) {
    console.log (name);
    console.log (city);
    console.log (year);
}

myData('João', 'São Paulo', 1988);

// Exercício 2

function area (base, height) {
    console.log (base * height);
}

function perimeter (base, height) {
    console.log (2 * (base + height));
}

area (5, 8);
perimeter (7, 10);

// Exercício 3

function aprovacao (nota) {
    if (nota >= 80)
        console.log ("Parabéns, você foi aprovado(a)!");
    else if (nota >= 60)
        console.log ("Você está na nossa lista de espera!");
    else
        console.log ("Você foi reprovado(a)!");
}
aprovacao(30);
aprovacao(70);
aprovacao(90);

// Exercício 4

function hourMessage (currentHour) {
    let message = '';

    if (currentHour >= 22)
        message = 'Não deveríamos comer nada, é hora de dormir" na variável';
    else if (currentHour >= 18)
        message = 'Rango da noite, vamos jantar :D';
    else if (currentHour >= 14)
        message = 'Vamos fazer um bolo pro café da tarde?';
    else if (currentHour >= 11)
        message = 'Hora do almoço!!!';
    else
        message = 'Hmmm, cheiro de café recém passado';

    console.log (message);
}

hourMessage(5);
hourMessage(12);
hourMessage(15);
hourMessage(19);

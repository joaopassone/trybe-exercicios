// Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1)
    console.log (numbers[i]);

// Exercício 2

let sum = 0;

for (let i = 0; i < numbers.length; i += 1)
    sum += numbers[i];

console.log(sum);

// Exercício 3

let mediaAritmetica = sum/numbers.length;

console.log (mediaAritmetica);

// Exercício 4

if (mediaAritmetica > 20)
    console.log ("valor maior que 20");
else 
    console.log ("valor menor ou igual a 20");

// Exercício 5

let maior = 0;

for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > maior)
            maior = numbers[i];
}

console.log (maior);

// Exercício 6

sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0)
        sum += 1;
}

if (sum != 0)
    console.log (sum);
else
    console.log ("nenhum valor ímpar encontrado");

// Exercício 7

let menor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] < menor)
            menor = numbers[i];
}

console.log (menor);

// Exercício 8

let array = [];

for (let i = 1; i < 26; i += 1)
    array.push(i);

console.log(array);

// Exercício 9

for (let i = 0; i < array.length; i += 1)
    array[i] = array[i]/2;

    console.log(array);

// Bônus 1

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

  console.log(numbers);

// Bônus 2

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

  console.log(numbers);

// Bônus 3

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multi = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (i == numbers.length - 1){
        multi.push (numbers[i] * 2);
        break;
    }
    multi.push(numbers[i] * numbers[i + 1]);
}

console.log(multi);

// Exercícios Parte 2

// Exercício 1

function palindrome (string) {
    let reverseString = string.split('');
    reverseString.reverse();
    reverseString = reverseString.join('');

    if (string === reverseString)
        return true;
    return false;
}

console.log (palindrome('arara'));
console.log (palindrome('desenvolvimento'));

// Exercício 2

function indexOfBiggest (array) {
    return (array.indexOf(Math.max(...array)));
}

console.log(indexOfBiggest([2, 3, 6, 7, 10, 1]));

// Exercício 3

function indexOfShortest (array) {
    return (array.indexOf(Math.min(...array)));
}

console.log(indexOfShortest([2, 4, 6, 7, 10, 0, -3]));

// Exercício 4

function biggestName (nameArray) {
    let biggest = '';
    for (let name of nameArray) {
        if (name.length > biggest.length)
            biggest = name;
    }

    return biggest;
}

console.log (biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercício 5

function mode (array) {
    repetionArray = [];

    for (let num of array)
        repetionArray.push(array.filter(x => x == num).length);

    return (array[repetionArray.indexOf(Math.max(...repetionArray))]);
}

console.log(mode ([2, 3, 2, 5, 8, 2, 3]));

// Exercício 6

function sum (N) {
    if (N == 1)
        return N;
    return N + sum (N - 1);
}

console.log(sum(5));

// Exercício 7

function wordEnd (word, ending) {
    if (word.endsWith(ending))
        return true;
    return false;
}

console.log(wordEnd('trybe', 'be'));
console.log(wordEnd('joaofernando', 'fernan'));
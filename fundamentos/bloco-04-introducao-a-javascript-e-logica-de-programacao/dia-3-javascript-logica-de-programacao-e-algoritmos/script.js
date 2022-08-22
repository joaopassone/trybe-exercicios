// Exercício 1

function fatorial (n) {
    if (n == 1)
        return n;
    return (n * fatorial (n - 1)); 
}

console.log (fatorial(10));

// Exercício 2

let word = 'tryber';

word = word.split('');
word.reverse();
word = word.join('');

console.log (word);

// Exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let min = array[0];
let max = array[0]

array.forEach(x => x.length < min.length ? min = x : min);
array.forEach(x => x.length > max.length ? max = x : max);

console.log (min, max);

// Exercício 4

let prime = [];

for (let i = 2; i < 51; i += 1) {
    prime.push(i);
    for (let j = 2; j <= Math.sqrt(i); j += 1) {
        if (i % j == 0) {
            prime.pop();
            break;
        }
    }
}

console.log (prime[prime.length - 1]);

// Bônus 1

let n = 1;
let str = '*';
let spc = ' ';

for (let i = 0; i < n; i+= 1)
    console.log(str.repeat(n));

// Bônus 2

for (let i = 0; i < n; i+= 1)
    console.log(str.repeat(i + 1));

// Bônus 3

for (let i = 0; i < n; i+= 1)
    console.log(spc.repeat(n - i - 1) + str.repeat(i + 1));

// Bônus 4

for (let i = 0; i < n; i+= 2)
    console.log(spc.repeat((n - i - 1)/2) + str.repeat(i + 1) + spc.repeat((n - i - 1)/2));

// Bônus 5

console.log(spc.repeat((n - 1)/2) + '*' + spc.repeat((n - 1)/2));

for (let i = 2; i < n - 2; i+= 2)
    console.log(spc.repeat((n - i)/2) + '*' + spc.repeat(i + 1 - 2) + '*' + spc.repeat((n - i)/2));

console.log(str.repeat(n));

// Bônus 6

let primeNumber = 45;

for (let i = 2; i <= Math.sqrt(primeNumber); i += 1) {
    if (primeNumber % i == 0) {
        console.log("Não é primo!")
        return;
    }
}

console.log("É primo!!");

// Exercício 1

const a = 56;
const b = 18;

console.log ("Adição = ", a + b);
console.log ("Subtração = ", a - b);
console.log ("Multiplicação = ", a * b);
console.log ("Divisão = ", (a / b).toFixed(2));
console.log ("Módulo = ", a % b);

// Exercício 2

console.log (Math.max(a, b));

// Exercício 3

const c = 78;

console.log (Math.max(a, b, c));

// Exercício 4

const value = -56;

if (value > 0)
    console.log ("Positivo");
else if (value < 0)
    console.log ("Negativo");
else
    console.log ("Zero");

// Exercício 5

let angle1 = 60, angle2 = 87, angle3 = 33;

if (angle1 + angle2 + angle3 == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0)
    console.log(true);
else
    console.log(false);

// Exercício 6

let pecaDeXadrez = "CAVALO";

switch (pecaDeXadrez) {
    case "rei":
    case "REI":
        console.log("Adjacente");
        break;
    case "rainha":
    case "RAINHA":
        console.log("Qualquer direção");
        break;
    case "bispo":
    case "BISPO":
        console.log("Diagonal");
        break;
    case "cavalo":
    case "CAVALO":
        console.log("L");
        break;
    case "torre":
    case "TORRE":
        console.log("Perpendicular");
        break;
    case "peão":
    case "PEÃO":
        console.log("Pra frente");
        break;
    default:
        console.log("Nem existe essa peça, vacilão!!");
}

// Exercício 7

let nota = 4;
let porcentagem = nota/10*100;

if (porcentagem > 100 || porcentagem < 0) {
    console.log("Deu ruim!");
    return;
}

if (porcentagem >= 90)
    console.log("A");
else if (porcentagem >= 80)
    console.log("B");
else if (porcentagem >= 70)
    console.log("C");
else if (porcentagem >= 60)
    console.log("D");
else if (porcentagem >= 50)
    console.log("E");
else
    console.log("F");

// Exercício 8

const i = 3, j = 7, k = 8;

if (i % 2 == 0 || j % 2 == 0 || k % 2 == 0)
    console.log(true);
else
    console.log(false);

// Exercício 9

if (i % 2 != 0 || j % 2 != 0 || k % 2 != 0)
    console.log(true);
else
    console.log(false);

// Exercício 10

const custo = 30, valorVenda = 42;

if (custo < 0 || valorVenda < 0) {
    console.log ("Isso ae nem existe, meu chapa!");
    return;
}

console.log(valorVenda - 1.2*custo);

// Exercício 11

const salarioBruto = 3000;
let salarioBase;

if (salarioBruto > 5189.82)
    salarioBase = salarioBruto - 570.88;
else if (salarioBruto >= 2594.93)
    salarioBase = salarioBruto - salarioBruto*0.11;
else if (salarioBruto >= 1556.95)
    salarioBase = salarioBruto - salarioBruto*0.09;
else
    salarioBase = salarioBruto - salarioBruto*0.08;
console.log(salarioBase)

if (salarioBase > 4664.68)
    salarioBase -= (salarioBase*0.275 - 869.36);
else if (salarioBase >= 3751.06)
    salarioBase -= (salarioBase*0.225 - 636.13);
else if (salarioBase >= 2826.66)
    salarioBase -= (salarioBase*0.15 - 354.8);
else if (salarioBase >= 1903.99)
    salarioBase -= (salarioBase*0.075 - 142.8);

console.log (salarioBase);

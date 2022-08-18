const currentHour = 5;
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


let weekDay = 'domingo';

if (weekDay == 'sábado' || weekDay == 'domingo')
    console.log ('FINALMENTE, descanso merecido UwU');
else
    console.log ("Oba, mais um dia de aprendizado na Trybe >:D");


let estado = 'lista';

switch (estado) {
    case 'aprovada':
        console.log ("Parabéns, você foi aprovado(a)!");
        break;

    case 'lista':
        console.log ("Você está na nossa lista de espera!");
        break;

    case 'reprovada':
        console.log ("Você foi reprovado(a)!");
        break;
}

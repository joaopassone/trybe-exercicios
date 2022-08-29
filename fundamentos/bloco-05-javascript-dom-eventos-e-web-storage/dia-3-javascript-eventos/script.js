function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//   Exercício 1

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth(daysList) {
    for (day of daysList) {
        let newItem = document.createElement('li');
        if (day === 25) {
            newItem.className = 'day friday holiday';
        }
        else if (day === 24 || day === 31) {
            newItem.className = 'day holiday';
        }
        else if (day === 4 || day === 11 || day === 18) {
            newItem.className = 'day friday';
        }
        else {
            newItem.className = 'day';
        }
        newItem.innerText = day;
        document.getElementById('days').appendChild(newItem);
    }
}

createDaysOfTheMonth(decemberDaysList);

// Exercício 2

function createHolidayButton(string) {
    let newButton = document.createElement('button');
    newButton.innerText = string;
    newButton.id = 'btn-holiday';
    document.getElementsByClassName('buttons-container')[0].appendChild(newButton);
}

createHolidayButton('Feriados');

// Exercício 3

function holidaysColor(event) {
    let days = document.getElementsByClassName('holiday');
    for (day of days) {
        if (day.style.backgroundColor !== 'lightgreen') {
            day.style.backgroundColor = 'lightgreen';
        }
        else {
            day.style.backgroundColor = 'rgb(238, 238, 238)';
        }
    }
}

document.getElementById('btn-holiday').addEventListener('click', holidaysColor);

// Exercício 4

function createFridayButton(string) {
    let newButton = document.createElement('button');
    newButton.innerText = string;
    newButton.id = 'btn-friday';
    document.getElementsByClassName('buttons-container')[0].appendChild(newButton);
}

createFridayButton('Sexta-feira');

// Exercício 5

function sextou(event) {
    let fridays = document.getElementsByClassName('friday');
    for (friday of fridays) {
        if (friday.innerText === 'Sextou!') {
            if (friday.nextSibling.innerText == 2) {
                friday. innerText = 1;
            }
            else {
                let dayNumber = parseInt(friday.previousSibling.innerText) + 1;
                friday.innerText = dayNumber;
            }
        }
        else {
            friday.innerText = 'Sextou!';
        }
    }
}

document.getElementById('btn-friday').addEventListener('click', sextou);

// Exercício 6

function zoomIn(event) {
    event.target.style.fontSize = '30px';
}

function zoomOut(event) {
    event.target.style.fontSize = '20px';
}

let days = document.getElementsByClassName('day');
    for (day of days) {
    day.addEventListener('mouseenter', zoomIn);
    day.addEventListener('mouseleave', zoomOut);
}

// Exercício 7

function createTask(task) {
    let newTask = document.createElement('span');
    newTask.innerText = task;
    document.getElementsByClassName('my-tasks')[0].appendChild(newTask);
}

createTask('Estudar');

// Exercício 8

function taskBackgroundColor(color) {
    let newDiv = document.createElement('div');
    newDiv.className = 'task';
    newDiv.style.backgroundColor = color;
    document.getElementsByClassName('my-tasks')[0].appendChild(newDiv);
}

taskBackgroundColor('red');

// Exercício 9

function selectedTask(event) {
    let tasks = document.getElementsByClassName('task');
    for (task of tasks) {
        if (task == event.target) {
            if (task.className === 'task selected') {
                task.className = 'task';
            }
            else {
                task.className = 'task selected';
            }
        }
        else {
            task.className = 'task';
        }
    }
}

let tasks = document.getElementsByClassName('task');

for (task of tasks) {
    task.addEventListener('click', selectedTask);
}

// Exercício 10

function taskColor(event) {
    if (document.getElementsByClassName('task selected').length === 0) {
        event.target.style.color = 'rgb(119, 119, 119)';
        return;
    }
    if (event.target.style.color === document.getElementsByClassName('task selected')[0].style.backgroundColor) {
        event.target.style.color = 'rgb(119, 119, 119)';
    }
    else {
        event.target.style.color = document.getElementsByClassName('task selected')[0].style.backgroundColor;
    }
}

for (day of days) {
    day.addEventListener('click', taskColor);
}

// Bônus

function addAppointment(appoint) {
    newTask = document.createElement('li');
    newTask.innerText = appoint;
    document.querySelector('.task-list').appendChild(newTask);
}

function appointment() {
    let input = document.querySelector('input');
    if (input.value == '') {
        alert('Escreva alguma coisa, jovem!');
    } else {
        addAppointment(input.value);
        input.value = '';
    }
}

function keyPress(event) {
    if (event.key == 'Enter') {
        appointment();
    }
}

document.getElementById('btn-add').addEventListener('click', appointment);
document.getElementById('task-input').addEventListener('keypress', keyPress);

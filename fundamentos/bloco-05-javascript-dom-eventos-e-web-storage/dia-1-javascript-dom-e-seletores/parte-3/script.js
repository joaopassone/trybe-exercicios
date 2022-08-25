document.getElementsByTagName('header')[0].style.backgroundColor = 'rgb(47, 193, 140)';
let emergencyTasks = document.querySelectorAll('.emergency-tasks div');
let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks div');

for (let i = 0; i < emergencyTasks.length; i += 1) {
  emergencyTasks[i].style.backgroundColor = 'salmon';
  noEmergencyTasks[i].style.backgroundColor = 'rgb(250, 200, 0)';
}

let emergencyTasksText = document.querySelectorAll('.emergency-tasks h3');
let noEmergencyTasksText = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < emergencyTasksText.length; i += 1) {
  emergencyTasksText[i].style.backgroundColor = 'purple';
  noEmergencyTasksText[i].style.backgroundColor = 'black';
}

document.querySelectorAll('section div h3').forEach((x) => x.style.marginTop = '0');
document.querySelector('.emergency-tasks div').style.paddingTop = '10px';
document.querySelector('.no-emergency-tasks div').style.paddingTop = '10px';

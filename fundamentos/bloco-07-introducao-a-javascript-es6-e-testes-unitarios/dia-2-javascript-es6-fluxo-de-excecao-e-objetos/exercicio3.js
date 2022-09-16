const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addShift(object, key, value) {
  object[key] = value;
}

addShift(lesson2, 'turno', 'noite');

const listKeys = (object) => console.log(Object.keys(object));

const objectSize = (object) => console.log(Object.keys(object).length);

const listValues = (object) => console.log(Object.values(object));

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

const totalStudents = (object) => {
  let sum = 0;
  for (const keys in object) {
    sum += object[keys].numeroEstudantes;
  }
  return sum;
};

const getValueByNumber = (object, n) => console.log(Object.values(object)[n]);

function verifyPair(object, key, value) {
  if (key in object)
    if (object[key] === value)
      return true;
  return false;
}

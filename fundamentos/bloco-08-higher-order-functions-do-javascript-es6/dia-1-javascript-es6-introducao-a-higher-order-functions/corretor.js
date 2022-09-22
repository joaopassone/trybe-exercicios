const corretor = (rightAnswers, studentAnswers) => {
  let grade = 0;
  for (let index in rightAnswers) {
    if (rightAnswers[index] === studentAnswers[index])
      grade += 1;
    if (rightAnswers[index] != studentAnswers[index] && studentAnswers[index] != 'N.A')
      grade -= 0.5;
  }
  return console.log(grade);
};

const exam = (rightAnswers, studentAnswers, funcResult) => {
  funcResult(rightAnswers, studentAnswers);
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

exam(RIGHT_ANSWERS, STUDENT_ANSWERS, corretor);

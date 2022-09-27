const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const answer = students.map((student, index) => {
    return {
      name: student,
      average: grades[index].reduce((sum, grade) => sum + grade, 0) / grades[index].length
    }
  });
  return answer;
}

console.log(studentAverage());

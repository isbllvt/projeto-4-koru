// Exercício 3 - Filter e Find

// a. Use filter para encontrar estudantes inativos

const students = [
  { id: 1, name: "Joana", age: 19, grades: [80, 95, 70], active: false },
  { id: 2, name: "Gabriel", age: 21, grades: [78, 90, 60], active: true },
  { id: 3, name: "Bernardo", age: 22, grades: [85, 70, 65], active: true },
  { id: 4, name: "Hana", age: 18, grades: [95, 90, 85], active: true },
  { id: 5, name: "Sophia", age: 20, grades: [75, 60, 65], active: false },
];

const inactiveStudents = students.filter((student) => student.active === false);
console.log("Estudantes inativos:", inactiveStudents);

// b. Use find para encontrar o estudante com id = 3

const findStudent = students.find((student) => student.id === 3);
console.log("Estudante com id 3:", findStudent);

// c. Use filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70

const lowPerformanceStudents = students.filter((student) =>
  student.grades.some((grade) => grade < 70)
);
console.log(
  "Estudantes com pelo menos uma nota abaixo de 70:",
  lowPerformanceStudents
);

// d. Combine filter e map para obter apenas os nomes dos estudantes com média > 85

const highPerformanceStudents = students
  .filter((student) => {
    const sumOfGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
    const average = sumOfGrades / student.grades.length;

    return average > 85;
  })
  .map((student) => student.name);
console.log("Estudantes com a média acima de 85:", highPerformanceStudents);

const studentProfiles = [
  {
    name: "Anna",
    sex: "F",
    mark: 12,
  },
  {
    name: "Lars",
    sex: "H",
    mark: 11,
  },
  {
    name: "Maria",
    sex: "F",
    mark: 14,
  },
  {
    name: "Sophie",
    sex: "F",
    mark: 1,
  },
  {
    name: "Luke",
    sex: "H",
    mark: 17,
  },
  {
    name: "Tom",
    sex: "H",
    mark: 13,
  },
  {
    name: "Hariett",
    sex: "F",
    mark: 20,
  },
  {
    name: "Martin",
    sex: "H",
    mark: 8,
  },
  {
    name: "Cindy",
    sex: "F",
    mark: 8.5,
  },
  {
    name: "Olaf",
    sex: "H",
    mark: 10.5,
  },
  {
    name: "Francesca",
    sex: "F",
    mark: 12,
  },
  {
    name: "Iris",
    sex: "F",
    mark: 14.5,
  },
  {
    name: "Alex",
    sex: "H",
    mark: 15.5,
  },
  {
    name: "Marvin",
    sex: "H",
    mark: 9.5,
  },
  {
    name: "Galvin",
    sex: "H",
    mark: 16,
  },
  {
    name: "Ursula",
    sex: "F",
    mark: 9.5,
  },
  {
    name: "Luke",
    sex: "H",
    mark: 13.5,
  },
  {
    name: "Joe",
    sex: "H",
    mark: 12,
  },
  {
    name: "Fran",
    sex: "F",
    mark: 13,
  },
  {
    name: "Felix",
    sex: "H",
    mark: 17,
  },
  {
    name: "Lilly",
    sex: "F",
    mark: 18.5,
  },
  {
    name: "Doris",
    sex: "F",
    mark: 5.5,
  },
  {
    name: "Gerard",
    sex: "H",
    mark: 16.5,
  },
  {
    name: "Kyle",
    sex: "H",
    mark: 12.5,
  },
];

//console.log(studentProfiles);

// Average class
const sumMark = studentProfiles.reduce((total, currentV) => {
  return total + currentV.mark;
}, 0);
const average = Math.floor((sumMark / studentProfiles.length) * 10) / 10;
console.log(`the average of the class is ${average}`);

// Average per sex
//// Male
const sumMarkMale = studentProfiles.reduce((total, currentV) => {
  return currentV.sex === "H" ? total + currentV.mark : total;
}, 0);
const numberMale = studentProfiles.reduce((total, currentV) => {
  return currentV.sex === "H" ? total + 1 : total;
}, 0);
const averageMale = Math.floor((sumMarkMale / numberMale) * 10) / 10;
console.log(`the male average is ${averageMale}`);

//// Female
const sumMarkFem = studentProfiles
  .filter((e) => e.sex === "F")
  .reduce((total, currentV) => {
    return total + currentV.mark;
  }, 0);
const numberFem = studentProfiles.filter((e) => e.sex === "F").length;
const averageFem = Math.floor((sumMarkFem / numberFem) * 10) / 10;
console.log(`the female average is ${averageFem}`);

// Max mark
const maxMark = studentProfiles.reduce((total, currentV) => {
  if (currentV.mark > total) {
    total = currentV.mark;
  }
  return total;
}, -1);
console.log(`the max mark is ${maxMark}`);

// Min mark
const minMark = studentProfiles.reduce((total, currentV) => {
  if (currentV.mark < total) {
    total = currentV.mark;
  }
  return total;
}, 21);
console.log(`the max mark is ${minMark}`);

// max + min
const minMax = studentProfiles.reduce(
  (total, currentV) => {
    if (currentV.mark < total.min.mark) {
      total.min.mark = currentV.mark;
      total.min.name = currentV.name;
    }
    if (currentV.mark > total.max.mark) {
      total.max.mark = currentV.mark;
      total.max.name = currentV.name;
    }
    return total;
  },
  { min: { mark: 21, name: "" }, max: { mark: -1, name: "" } }
);

console.log(
  `${minMax.max.name} has the best mark and ${minMax.min.name} has the worst mark`
);

// name which mark>12
const mark12 = studentProfiles.filter((s) => s.mark >= 12).map((s) => s.name);
console.log(`These students marked more than 12 ${mark12}`);

// ---- Nouvelle list de notes ---- //
const students = [
  {
    name: "Emily",
    grades: [
      { date: "2019-01-19", subject: "maths", grade: 12.5 },
      { date: "2019-06-19", subject: "physics", grade: 14.5 },
      { date: "2019-07-10", subject: "maths", grade: 9.5 },
      { date: "2019-08-05", subject: "chemistry", grade: 7.5 },
    ],
  },
  {
    name: "Nina",
    grades: [
      { date: "2019-01-19", subject: "maths", grade: 5.5 },
      { date: "2019-06-19", subject: "physics", grade: 17.5 },
      { date: "2019-07-10", subject: "maths", grade: 10 },
      { date: "2019-08-05", subject: "chemistry", grade: 13.5 },
    ],
  },
  {
    name: "Ed",
    grades: [
      { date: "2019-01-19", subject: "maths", grade: 18.5 },
      { date: "2019-06-19", subject: "physics", grade: 19 },
      { date: "2019-07-10", subject: "maths", grade: 11.5 },
      { date: "2019-08-05", subject: "chemistry", grade: 16 },
    ],
  },
  {
    name: "Jon",
    grades: [
      { date: "2019-01-19", subject: "litterature", grade: 18.5 },
      { date: "2019-06-19", subject: "French", grade: 19 },
      { date: "2019-07-10", subject: "philosophy", grade: 11.5 },
      { date: "2019-08-05", subject: "physics", grade: 16 },
    ],
  },
];

const st = students
  .flatMap((s) => s.grades)
  .filter((g) => g.subject === "maths")
  .map((s) => s.grade);
console.log(st);

// Max grade
const maxGrade = students
  .flatMap((s) => s.grades)
  .map((g) => g.grade)
  .reduce((prev, current) => {
    return current > prev ? current : prev;
  }, 0);
console.log("maxGrade", maxGrade);

// List of all math grades
const mathGrades = students
  .flatMap((s) => s.grades)
  .filter((g) => g.subject === "maths")
  .map((g) => g.grade);
console.log("math grades", mathGrades);

// Average grade physics test in June
//return phy grades
//filer by date
//return array of grades
//calculate the average
const gradesPhyJune = students
.flatMap( s => s.grades )
.filter( g => g.subject === "physics")
.filter(g => new Date(g.date).getMonth() === 5)
.map( g => g.grade);

const avgGradesPhyJune = (gradesPhyJune.reduce((p,c)=> p+c, 0)) / (gradesPhyJune.length);

console.log('gradesPhyJune', gradesPhyJune)
console.log('avgGradesPhyJune', avgGradesPhyJune)

// Student names with more than 10 in maths
const studentNames = students
.reduce(
  (prev, current) => {
    const gradeMaths = current
    .grades.filter(g=>g.subject === "maths")
    .map( m => m.grade )
    .reduce( (pM, cM) => {
      return cM > pM ? cM : pM
    }, 0);

    if(gradeMaths > 10){
      prev.push(current.name)
    }
    return prev;
  }
  ,[]);

console.log(studentNames);

const studentNames2 = students
.filter( s => {
  const markMathStu = s.grades
  .filter(g=> g.subject === "maths")
  .filter(m => m.grade>10)

  return markMathStu.length>0
})
.map( s => s.name);

console.log('studentNames2',studentNames2);

const studentNames3 = students
  .flatMap(s => s.grades.map(g => ({...g, name: s.name})))
  .filter(g => g.grade > 10 && g.subject === "maths")
  .map(g => g.name);

console.log('studentNames3', [...new Set(studentNames3)]);

const a = ["a", "b", "c", "d"];
const a1 = a.map((value) => value + "x");
// console.log(a1);

const b = [
  ["a", "b"],
  ["c", "d"],
];
const b1 = a.flatMap((value) => value + "x");
// console.log(b1);

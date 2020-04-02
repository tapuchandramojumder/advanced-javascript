const students = [
  { id: 32, name: 'John' },
  { id: 31, name: 'TimberLake' },
  { id: 45, name: 'Rahul' },
  { id: 74, name: 'Linda' }
];
// const output = [];

// for (let i = 0; i < students.length; i++) {
//   const element = students[i];
// //   console.log(element);
//   output.push(element.name);
// }
// console.log(output);

const names = students.map(element => element.name);
console.log(names);

const ids = students.map(element => element.id);
console.log(ids);

const bigger = students.filter(element => element.id > 32);
console.log(bigger);

const biggerOne = students.find(element => element.id > 32);
console.log(biggerOne);

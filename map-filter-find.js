const numbers = [303, 4, 5, 6, 7, 8, 9];
// const square = [];

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//  square.push(result);
// }
const square = numbers.map(element => element * element); // map have three parameters like(element,index,array) and map returns new array with the transformed elements

console.log(square); //result:[91809,16,25,36,49,64,81]

const bigger = numbers.filter(element => element > 5);
console.log(bigger); //result:[303,6,7,8,9]

const biggerOne = numbers.find(element => element > 5);
//find provides just  which one is matching element;
console.log(biggerOne); //result:303

const result = numbers.reduce((element, value) => element - value);
//reducer takes four parameter(element, current Value,index,array)
console.log(result); //result:264

const number2 = [1, 29, 47];
const numArr = [];
number2.forEach(function(element) {
  //forEach() method returns undefined
  const todo = element + element;
  numArr.push(todo);
});
console.log(numArr); //result:[2,58,94]

//Q.A : forEach() Vs map() in javascript?

// Null Vs Undefined , different ways I will get undefined;

let name;
console.log(name); // result undefined;

function addNumber(num1, num2) {
  //if i don't write return it's say undefined;
  return num1 + num2;
}

const result = addNumber(5, 6);
console.log(result);

const lover = { name: 'linda', phone: 4233256, address: 'new york' };
console.log(lover.friend); // result : undefined;

let fun = undefined;
console.log(fun); //result: undefined ; "because I set var fun = undefined"


// Example of null 
// null means empty . null is "nothing". It is supposed to be something that doesn't exist.

var person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' };
person = null;
console.log(person);// result : null ; 



// Q.A : null Vs undefined;
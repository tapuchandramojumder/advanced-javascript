function addNumber(num1, num2) {

    // return num1+num2
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];

    sum = sum + element;
  }
  return sum;
}
result = addNumber(3, 5, 5, 8, 7, 2);
console.log(result);


// Q.A: I have pass two parameters in a function but I have want to sum more than two parameters of objects in javascript learn with w3schools.com
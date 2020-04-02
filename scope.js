let bonus = 30;
function sum(first, second) {
  let result = first + second + bonus;

  if (result > 9) {
    var mood = 'happy';
    mood = 'funny';
    mood = 'enjoy';
    // console.log(mood);
  }
  console.log(mood);
  return result;
}
const output = sum(25, 20);
console.log(output);

//Q.A : what is hoisting?
//Ans:if I declared variable with var thats means its global variable but if I declared const or let variable in a scope function I didn't access it thats call hoisting

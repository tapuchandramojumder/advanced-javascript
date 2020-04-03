const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = numbers.slice(2, 6);
//console.log(part);//slice means  cut the number of  array  it has two parameters (start array number,end array number)
//and it doesn't change of array
//console.log(numbers)

const remove = numbers.splice(2, 4, 22, 55, 12);
// console.log(remove); //splice means its remove array number and it has three parameters(start array number, how many number of delete, add array)
// console.log(numbers);

const together = numbers.join(',');
console.log(together);
//join add the variable remove and variable number

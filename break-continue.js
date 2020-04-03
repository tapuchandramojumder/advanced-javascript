const number = [1, 2, -3, 4, -5, 6, 7, 8, 9];
// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   if (element > 6) {
//     break;
//   }
//   console.log(element);
// }

for (let i = 0; i < number.length; i++) {
  const element = number[i];
  if (element < 0) {
    continue;
  }
  console.log(element);
}

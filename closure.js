let l = 'L is a global scope variable';
function OuterFun() {
  let j = 'J is a outer variable';
  console.log(l);
  console.log(j);
  //console.log(k); result: error ; because it doesn't exit OuterFun

  function InnerFun() {
    let k = 'K is a Inner variable';
    console.log(k);
    console.log(j);
    console.log(l);
  }
  InnerFun();
}
OuterFun();







//Q.A: what is closure?
//Ans: If function  have Inside a function this inside function doesn't exits outer function variable but outer function exits inner function variable thats call closure;
function add(var1, var2) {
  return var1 + var2;
}

function subtract(var1, var2) {
  return var1 - var2;
}

function sum(arr1) {
  let temp = 0;
  for (let i = 0; i < arr1.length; i++) {
    temp = temp + arr1[i];
  }
  console.log({ temp });
  return temp;
}

function multiply(arr1) {
  let temp = 1;
  for (let i = 0; i < arr1.length; i++) {
    temp = temp * arr1[i];
  }
  console.log({ temp });
  return temp;
}

function power(var1, var2) {
  return Math.pow(var1, var2);
}

function factorial(var1) {
  if (var1 === 0) return 1;
  else {
    let fact = 1;
    for (let i = 1; i <= var1; i++) fact = fact * i;

    return fact;
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const input = document.querySelector(".numberInput");
const para = document.querySelector("p");

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num == 0) return 1;

  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

input.onchange = function() {
  const num = input.value;
  if (isNaN(num)) para.textContent = "Enter a valid number.";
  else {
    para.textContent =
      num +
      " squared is " +
      squared(num) +
      " " +
      " cubed is " +
      cubed(num) +
      " " +
      " factorial is " +
      factorial(num);
  }
};

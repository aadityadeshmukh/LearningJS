const base = document.querySelector(".base");
const power = document.querySelector(".power");
const answer = document.querySelector(".answer");
function calcPower(baseNum, powNum) {
  let calc = 1;
  for (i = 0; i < powNum; i++) {
    calc *= baseNum;
  }
  return calc;
}

base.onchange = function() {
  const b = base.value;
  const p = power.value;
  answer.textContent = calcPower(b, p);
};

power.onchange = function() {
  const b = base.value;
  const p = power.value;
  answer.textContent = calcPower(b, p);
};

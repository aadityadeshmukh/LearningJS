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

const reverseString = function(str) {
  let strFinal = "";
  let idxSpace = str.indexOf(" ");
  if (idxSpace > -1) {
    let arrStr = str.split(" ");
    for (i = arrStr.length; i > 0; --i) {
      console.log(i);
      strFinal += reverSingleWord(arrStr[i - 1]);
      console.log("final str " + strFinal);
    }
  } else strFinal = reverSingleWord(str);

  return strFinal;
};
function reverSingleWord(str) {
  console.log("RSW: " + str);
  let arrStr = str.split("");
  let returnStr = "";
  for (i = arrStr.length - 1; i >= 0; i--) {
    returnStr += arrStr[i];
  }
  console.log("RSW: " + returnStr);
  return returnStr;
}
reverseString("hello there");

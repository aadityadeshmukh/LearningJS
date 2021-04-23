const reverseString = function(str) {
  if (str == null) return "ERROR";
  console.log(typeof str);
  if (typeof str != "string") return "ERROR";
  let strFinal = "";
  let idxSpace = str.indexOf(" ");
  if (idxSpace > -1) {
    let arrStr = str.split(" ");
    for (j = arrStr.length; j > 0; j--) {
      strFinal += reverSingleWord(arrStr[j - 1]);
    }

    strFinal = [
      strFinal.slice(0, idxSpace),
      " ",
      strFinal.slice(idxSpace)
    ].join("");
  } else strFinal = reverSingleWord(str);

  return strFinal;
};
function reverSingleWord(str) {
  let arrStr = str.split("");
  let returnStr = "";
  for (i = arrStr.length - 1; i >= 0; i--) {
    returnStr += arrStr[i];
  }
  return returnStr;
}

module.exports = reverseString;

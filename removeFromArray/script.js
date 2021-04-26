const removeFromArray = function(
  arrInp,
  remElem1,
  remElem2,
  remElem3,
  remElem4
) {
  let arrRem = [];
  if (arrInp.indexOf(remElem1) > -1) arrRem.push(remElem1);
  if (arrInp.indexOf(remElem2) > -1) arrRem.push(remElem2);
  if (arrInp.indexOf(remElem3) > -1) arrRem.push(remElem3);
  if (arrInp.indexOf(remElem4) > -1) arrRem.push(remElem4);
  console.log(arrRem);
  for (i = 0; i < arrRem.length; i++) {
    let idx = -1;
    console.log(arrRem[i]);
    idx = arrInp.indexOf(arrRem[i]);
    if (idx != -1) console.log(arrInp.splice(idx, 1));
  }

  console.log(arrInp);
  return arrInp;
};

module.exports = removeFromArray;

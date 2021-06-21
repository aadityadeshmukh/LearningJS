const palindromes = function(strVal) {
  strVal = strVal.replace('!', '');
  strVal = strVal.replace(/,/g, '');
  strVal = strVal.replace('.', '');
  strVal = strVal.replace(/ /g, '');
  strVal = strVal.toLowerCase();
  console.log({ strVal });
  let reverseVal = reverseString(strVal);
  if (reverseVal === strVal) return true;
  else return false;
};

function reverseString(inpVal) {
  let reversedVal = '';

  console.log({ inpVal });
  for (let i = inpVal.length - 1; i >= 0; i--) reversedVal += inpVal.charAt(i);

  console.log({ reversedVal });
  return reversedVal;
}

module.exports = palindromes;

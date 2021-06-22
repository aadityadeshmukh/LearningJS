const fibonacci = function(fibElem) {
  if (fibElem < 0) return 'OOPS';

  if (typeof fibElem == 'string') fibElem = parseInt(fibElem);

  let arrFib = [];
  arrFib[0] = 1;
  for (let i = 1; i <= fibElem; i++) {
    if (i === 1) arrFib[i] = arrFib[i - 1] + 0;
    else arrFib[i] = arrFib[i - 1] + arrFib[i - 2];
  }
  console.table({ arrFib });
  return arrFib[fibElem - 1];
};

module.exports = fibonacci;

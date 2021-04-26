const ftoc = function(tempF) {
  let tempC = ((tempF - 32) * 5) / 9;
  return Math.round(tempC * 10) / 10;
};

const ctof = function(tempC) {
  let tempF = (tempC * 9) / 5 + 32;
  return Math.round(tempF * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};

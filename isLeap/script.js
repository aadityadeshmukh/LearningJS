const leapYears = function(inpYear) {
  if (typeof inpYear != "number") return "ERROR";
  if (inpYear < 0) return "ERROR";

  console.log(inpYear);
  let isLeap = false;
  if (inpYear % 4 == 0) {
    if (inpYear % 100 == 0 && inpYear % 400 != 0) isLeap = false;
    else isLeap = true;
  }

  return isLeap;
};

module.exports = leapYears;

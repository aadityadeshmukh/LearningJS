const repeatString = function(str, iter) {
  let newstr = "";
  if (iter < 0) return "ERROR";
  if (str == null) return "ERROR";
  for (let i = 0; i < iter; i++) {
    newstr += str;
  }
  return newstr;
};

module.exports = repeatString;

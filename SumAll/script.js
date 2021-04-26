const sumAll = function(seriesStart, seriesEnd) {
  if (typeof seriesStart != "number" || typeof seriesEnd != "number")
    return "ERROR";
  if (seriesStart < 0 || seriesEnd < 0) return "ERROR";

  if (seriesEnd < seriesStart) {
    //num swap
    seriesStart = seriesStart + seriesEnd;
    seriesEnd = seriesStart - seriesEnd;
    seriesStart = seriesStart - seriesEnd;
  }
  let result = 0;
  for (i = seriesStart; i <= seriesEnd; i++) result += i;

  return result;
};

module.exports = sumAll;

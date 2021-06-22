let findTheOldest = function(listPeople) {
  let arrSortedList = listPeople.sort(function(a, b) {
    let firstGuy = getYOD(a) - a.yearOfBirth;
    let lastGuy = getYOD(b) - b.yearOfBirth;
    if (lastGuy > firstGuy) return -1;
    else return 1;
  });
  console.table({ arrSortedList });
  console.log(arrSortedList[arrSortedList.length - 1].name);
  return arrSortedList[arrSortedList.length - 1];
};

function getYOD(objA) {
  let YOD = 0;
  if (objA.yearOfDeath === undefined) YOD = new Date().getFullYear();
  //still living
  else YOD = objA.yearOfDeath;

  return YOD;
}

module.exports = findTheOldest;

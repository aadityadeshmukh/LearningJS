console.log("Hello!");
function computerPlay() {
  let randomSel = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  if (randomSel == 1) console.log("Computer: Rock");
  else if (randomSel == 2) console.log("Computer: Paper");
  else if (randomSel == 3) console.log("Computer: Scissors");
  return randomSel;
}

computerPlay();

console.log("Hello!");
function computerPlay() {
  //Get a random number from 1-3
  let randomSel = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let compSel = "";
  //Assign values to drawn numbers
  if (randomSel == 1) compSel = "Rock";
  else if (randomSel == 2) compSel = "Paper";
  else if (randomSel == 3) compSel = "Scissor";
  return compSel;
}

function playRound(player, computer) {
  //Allows users to enter value in any case
  let strPlayer = player.toLowerCase();
  let strComp = computer.toLowerCase();
  //Check cases. Total 9 cases. 3 are draws.
  //Computer and Player win for 3 cases each
  if (strPlayer == strComp) {
    return "draw";
  } else {
    if (strPlayer === "rock") {
      if (strComp === "paper") return "You lose!";
      else if (strComp === "scissor") return "You win!";
    }
    if (strPlayer === "paper") {
      if (strComp === "scissor") return "You lose!";
      else if (strComp === "rock") return "You win!";
    }
    if (strPlayer === "scissor") {
      if (strComp === "paper") return "You win!";
      else if (strComp === "rock") return "You lose!";
    }
  }
}
//Activate an input field when play button is clicked and continue play
let playbtn = document.getElementById("play");
playbtn.onclick = function() {
  let playerSel = prompt("Enter choice");
  console.log(playerSel);
  let compSel = computerPlay();
  console.log(compSel);
  console.log(playRound(playerSel, compSel));
};

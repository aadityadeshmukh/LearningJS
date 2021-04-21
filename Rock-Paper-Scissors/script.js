console.log("Hello!");
function computerPlay() {
  let randomSel = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let compSel = "";
  if (randomSel == 1) compSel = "Rock";
  else if (randomSel == 2) compSel = "Paper";
  else if (randomSel == 3) compSel = "Scissor";
  return compSel;
}
function playRound(player, computer) {
  let strPlayer = player.toLowerCase();
  let strComp = computer.toLowerCase();
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
let playbtn = document.getElementById("play");
playbtn.onclick = function() {
  let playerSel = prompt("Enter choice");
  console.log(playerSel);
  let compSel = computerPlay();
  console.log(compSel);
  console.log(playRound(playerSel, compSel));
};

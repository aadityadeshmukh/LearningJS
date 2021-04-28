//A rock paper scissors game
//Mostly a console game as of now
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
    return "Match Drawn";
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
//   //Activate an input field when play button is clicked and continue play
//   let playbtn = document.getElementById("play");
//   playbtn.onclick = function() {
//     let playerSel = prompt("Enter choice");
//     console.log(playerSel);
//     let compSel = computerPlay();
//     console.log(compSel);
//     console.log(playRound(playerSel, compSel));
//   };

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let selID = button.id;
    console.log(`Selection: ${selID}`);
    let playaPara = document.getElementById("PlayerPara");
    let origPlayaText = playaPara.textContent;
    if (origPlayaText != "Player Selection: ") {
      origPlayaText = origPlayaText.slice(0, 18);
    }
    playaPara.textContent = origPlayaText + selID;

    let compSel = computerPlay();
    let compPara = document.getElementById("ComputerPara");
    let origCompText = compPara.textContent;
    if (origCompText != "Computer Selection: ") {
      origCompText = origCompText.slice(0, 20);
    }
    compPara.textContent = origCompText + compSel;

    let result = playRound(selID, compSel);
    let resPara = document.getElementById("Result");
    let origResText = resPara.textContent;
    if (origResText != "Result: ") {
      origResText = origResText.slice(0, 8);
    }
    resPara.textContent = origResText + result;
  });
});

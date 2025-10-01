function play(userChoice) {
  let randomNumber = Math.random() * 3;
  let computerChoice;

  if (randomNumber <= 1) {
    computerChoice = "Stone";
  } else if (randomNumber <= 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  let resultMsg;
  if (userChoice === computerChoice) {
    resultMsg = "It's a TIE!";
    document.getElementById("result").style.color = "#FFD700";
  } else if (
    (userChoice === "Stone" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Stone") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    resultMsg = "YOU WON!";
    document.getElementById("result").style.color = "#00FF7F";
  } else {
    resultMsg = "COMPUTER WON!";
    document.getElementById("result").style.color = "#FF6347";
  }

  document.getElementById(
    "result"
  ).innerText = `You chose ${userChoice}, Computer chose ${computerChoice} → ${resultMsg}`;
}

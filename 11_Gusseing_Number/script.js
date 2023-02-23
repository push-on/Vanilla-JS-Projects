/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * Done: Use the initGame() function to restart the game
 */

let guesses = [];
let CorrectNumber = getRandomNumber();
console.log("Correct Number " + CorrectNumber);
// -------- Window on load ------------
window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  let input = document.getElementById("number-guess");

  input.addEventListener("keypress", function (event) {
    if (input.value.length > 0 && event.key === "Enter") {
      playGame();
    }
  });
  document.getElementById("restart-game").addEventListener("click", initGame);
};
function playGame() {
  let numberGuess = parseInt(document.getElementById("number-guess").value);
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
  document.getElementById("number-guess").value = "";
}
function displayResult(numberGuess) {
  if (numberGuess === CorrectNumber) {
    console.log(numberGuess + " is correct");
    showYouWon();
  } else if (numberGuess > CorrectNumber) {
    console.log(numberGuess + " is too big");
    showNumberAbove();
  } else {
    console.log(numberGuess + " is too small");
    showNumberBelow();
  }
}

function initGame() {
  CorrectNumber = getRandomNumber();
  guesses = [];
  displayHistory();
  document.getElementById("result").innerHTML = "";
}

function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
  console.log(guesses);
}

function displayHistory() {
  let index = 0;
  let list = "<ul class='list-group'>";
  while (index < guesses.length) {
    list +=
      "<li class='list-group-item'>" +
      CorrectNumber +
      " you guessed " +
      guesses[index] +
      "</li>";
    index += 1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Hint: Your guess is too high!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Hint: Your guess is too low!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

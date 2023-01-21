
var targetNumber = Math.floor(Math.random() * 100) + 1;
var guessInput = document.getElementById("guessInput");
var result = document.getElementById("result");
var button =document.getElementById('btn');
var chances = 10;

function guess() {
  var guess = guessInput.value;
  if (guess == targetNumber) {
    result.innerHTML = "Congratulations! You guessed the number!";
  } else if (guess > targetNumber) {
    result.innerHTML = "Sorry, your guess was too high. Try again.";
  } else {
    result.innerHTML = "Sorry, your guess was too low. Try again.";
  }
  chances--;
  if (chances === 0) {
    result.innerHTML = "Sorry, you have used all your chances. The correct number was " + targetNumber;
    guessInput.setAttribute("disabled", "true");
    
    button.setAttribute("disabled", "true");
    guessInput.value = "";
  } else {
    result.innerHTML += "<br>You have " + chances + " chances left.";
  }
}

var randomNumberOne = Math.floor(Math.random() * 6) + 1;
var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

// h1 Selector

var hSelector = document.querySelector("h1");

document.querySelectorAll("img")[0].src = "images/dice" + randomNumberOne + ".png";
document.querySelectorAll("img")[1].src = "images/dice" + randomNumberTwo + ".png";

if(randomNumberOne === randomNumberTwo){
  hSelector.innerHTML = "Its a Draw!";
}

else if (randomNumberOne > randomNumberTwo){
  hSelector.innerHTML = "Player 1 Wins!";
}

else {
  hSelector.innerHTML = "Player 2 Wins!";
}

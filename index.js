let gameRound = 0;
//index corresponds to specific color
let colors = [1,2,3,4];
let gameArray = [];

const generateRandomColor = () => {
  let generatedColor = colors[Math.floor(Math.random() * 4)];
    gameArray.push(generatedColor);
  }

const outputColor = () => {
    for (var i = 0; i < gameArray.length; i ++) {

    }
}

const resetGame = () => {
    gameArray.length = 0;
    alert("You have started a new game!");
}
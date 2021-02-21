
let playerScoreNumber = 0;
document.getElementById("playerScoreNumber").innerHTML = playerScoreNumber;

let compScoreNumber = 0;
document.getElementById("compScoreNumber").innerHTML = compScoreNumber;

let buttonClick = document.getElementsByTagName("button");

for (var i = 0; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener("click", function () {
        let playerSelection = this.className;
        function computerPlay() {
            const playArr = ['Rock', 'Paper', 'Scissors'];
            let computerPlay = playArr[Math.floor(Math.random() * 3)];
            return computerPlay;
        };
        let computerSelection = computerPlay();
        // PLAYER WINS
        if ((playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS")
            || (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK")
            || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER")) {
            playerScoreNumber += 1;
            document.getElementById("playerScoreNumber").innerHTML = playerScoreNumber;
            let capFirst = playerSelection[0].toUpperCase()
            let restOfWord = playerSelection.toLowerCase().slice(1);
            document.getElementById("result").innerHTML = `${capFirst}${restOfWord} beats ${computerSelection.toLowerCase()}, you win 1 point!`;
            if (playerScoreNumber == 5) {
                //game over player wins
                let confirmation = confirm(`YOU WON ${playerScoreNumber} TO ${compScoreNumber}! Play again?`)
                if (confirmation) {
                    location.reload();
                }
            }
        }
        // DRAW
        else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
            let capFirst = playerSelection[0].toUpperCase()
            let restOfWord = playerSelection.toLowerCase().slice(1);
            document.getElementById("result").innerHTML = `${capFirst}${restOfWord} and ${computerSelection.toLowerCase()}, that\'s a draw!`;
            }
        // PLAYER LOSES
        else {
            compScoreNumber += 1;
            document.getElementById("compScoreNumber").innerHTML = compScoreNumber;
            let capFirst = computerSelection[0].toUpperCase()
            let restOfWord = computerSelection.toLowerCase().slice(1);
            document.getElementById("result").innerHTML = `Computer wins one point, ${capFirst}${restOfWord} beats ${playerSelection}!`;
            if (compScoreNumber == 5) {
                //game over computer wins
                confirmation = confirm(`YOU LOST ${playerScoreNumber} TO ${compScoreNumber}! Play again?`);
                if (confirmation) {
                    location.reload();
                }
            }
        };
    });
};


/*
function game() {
    // SET THE STAGE
    var playerScoreNumber = 0;
    var compScoreNumber = 0;
   // var roundCount = 1;

    //while (roundCount <= 5) {

        // PLAYER SELECTS PLAY
        let playerSelection = (prompt('Choose: Rock, Paper, or Scissors'));

        // RANDOM COMPUTER PLAY
        function computerPlay() {
            const playArr = ['Rock', 'Paper', 'Scissors'];
            let computerPlay = playArr[Math.floor(Math.random() * 3)];
            return computerPlay;
        };
        let computerSelection = computerPlay();

        // PLAYER WINS
        if ((playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS")
            || (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK")
            || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER")) {
            playerScoreNumber += 1;
            let capFirst = playerSelection[0].toUpperCase()
            let restOfWord = playerSelection.toLowerCase().slice(1);
            console.log(capFirst + restOfWord + ' beats ' + computerSelection + ', you win 1 point');
            roundCount += 1;
        }
        // DRAW
        else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
            let capFirst = playerSelection[0].toUpperCase()
            let restOfWord = playerSelection.toLowerCase().slice(1);
            console.log(capFirst + restOfWord + ' and ' + computerSelection.toLowerCase() + ', that\'s a draw!');
            roundCount += 1;

        }
        // PLAYER LOSES
        else {
            compScoreNumber += 1;
            let capFirst = computerSelection[0].toUpperCase()
            let restOfWord = computerSelection.toLowerCase().slice(1);
            console.log('Computer wins one point ' + capFirst + restOfWord + ' beats ' + playerSelection + '.');
            roundCount += 1;
        };
    //}
     if (compScoreNumber < playerScoreNumber) {
        console.log('YOU WIN! ' + playerScoreNumber + ' TO ' + compScoreNumber + '!');
    } else if (compScoreNumber == playerScoreNumber) {
        console.log('THE WHOLE THING\'S A DRAW!!');
    } else {
        console.log('YOU LOSE! ' + playerScoreNumber + ' TO ' + compScoreNumber + '!');
    };
};


game();
*/
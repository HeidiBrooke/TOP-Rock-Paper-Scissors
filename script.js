


//dislay a message that a 5 round game of rock paper scissors has begun
//begin when the user answers ready

let startMessage = "A five round game of Rock-paper-scissors is about to begin! Are you ready?"
let readyInput = prompt(startMessage, "Y/N");
if (readyInput === "y" || readyInput === "Y") {
    game();
}
else {
    console.log("No problem! Refresh the page and enter 'Y' when you're ready!");
}

//Begin the game

function game() {
    let tally = ["", "", "", "", ""];
    for (i = 0; i < 5; i++){
        tally[i] = playRound();
        let result = tally[i];
        console.log("Round " + (i +1 ) + " is done here comes the next!")
    }
    console.log("Here are the results of this game: " + tally);
}

function getComputerChoice(){
    //define consts rock paper scissors that correlate to a number (array with index)
    const playsArray = ["rock", "paper", "scissors"];
    //have computer choose a random number between 0-2 (3 choices)
    let randomIndex = getRandomIntof3();
    //return the computers choice and store it
    let computerChoice = playsArray[randomIndex];
    let notifyCompChoice = "The computer has made a choice.";
    console.log(notifyCompChoice);
    return computerChoice;
}

function getPlayerChoice () {
    //prompt user to enter their choice and store input
    //convert to lower case
    let userPlayPrompt = "What'll be -- Rock, Paper or Scissors?";
    let userChoice = prompt(userPlayPrompt, "").toLowerCase();
    //return value
    return userChoice;
}

function playRound(){
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let result = "unkown";
    switch (computerChoice) {
        case "rock":
            switch (playerChoice) {
                case "rock":
                    result = "tie";
                    break;
                case "paper":
                    result = "user win";
                    break;
                case "scissors":
                    result = "computer win"
                    break;
            }
        break;
        case "paper":
            switch (playerChoice) {
                case "rock":
                    result = "computer win";
                    break;
                case "paper":
                    result = "tie";
                    break;
                case "scissors":
                    result = "user win"
                    break;
            }
        break;
        case "scissors":
            switch (playerChoice) {
                case "rock":
                    result = "user win";
                    break;
                case "paper":
                    result = "computer win";
                    break;
                case "scissors":
                    result = "tie"
                    break;
            }
        break;
    }
    console.log ("You: " + playerChoice + ", Comp: " + computerChoice + ", Result: " + result);
    return result;
}

function getRandomIntof3() {
    return Math.floor(Math.random() * 3);
}



//dislay a message that a 5 round game of rock paper scissors has begun
//begin when the user answers ready

let startMessage = "A five round game of Rock-paper-scissors is about to begin! Are you ready?"
let readyInput = prompt(startMessage, "Y/N");
if (readyInput === "y" || readyInput === "Y") {
    game();
}

//Begin the game

function game() {
    for (i = 0; i < 5; i++){
        playRound();
    }
}

//Begin the round
function playRound(){

//get a computer play and notify the user
    console.log(getComputerChoice());
    

//get the users play
    //getPlayerChoice();

//calculate the winner
    //findWinner();

//store the winner results for the round
    //storeWinner();

//display the results to the user

//notify the second round is beginning

}



function getComputerChoice(){
    //define consts rock paper scissors that correlate to a number (array with index)
    const playsArray = ["rock", "paper", "scissors"];
    //have computer choose a random number between 0-2 (3 choices)
    let randomIndex = getRandomIntof3();
    //return the computers choice and store it
    let computerChoice = playsArray[randomIndex];
    return computerChoice;
}

//function getPlayerChoice
//repeat steps up to five times

//after 5 rounds are played display the round results
function getRandomIntof3() {
    return Math.floor(Math.random() * 3);
}
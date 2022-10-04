let playerPoints = 0;
let compPoints = 0;

function getComputerChoice(){
    //define consts rock paper scissors that correlate to a number (array with index)
    const playsArray = ["rock", "paper", "scissors"];
    //have computer choose a random number between 0-2 (3 choices)
    let randomIndex = getRandomIntof3();
    //return the computers choice and store it
    let computerChoice = playsArray[randomIndex];
    // let notifyCompChoice = "The computer has made a choice.";
    // console.log(notifyCompChoice);
    return computerChoice;
}


function playRound(e){
    let computerChoice = getComputerChoice();
    let playerChoice = e.target.value;
    let result = "Try pressing one of the buttons!";
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

    //console.log ("You: " + playerChoice + ", Comp: " + computerChoice + ", Result: " + result);
    const divResults = document.getElementById('results');
    divResults.textContent = "You: "+ playerChoice + " Comp: " + computerChoice + " Results: " + result;
    return result;
}

function getRandomIntof3() {
    return Math.floor(Math.random() * 3);
}


function tallyWinner(e){
    const divTally = document.getElementById('tally'); 
    let winner = playRound(e);
    if (playerPoints === 5){
        return divTally.textContent = "Player: " + playerPoints +"/5 Comp: " + compPoints + "/5 Game finished! You win! Refresh to restart.";
    }
    else if (compPoints === 5){
        return divTally.textContent = "Player: " + playerPoints +"/5 Comp: " + compPoints + "/5 Game finished! Computer wins! Refresh to restart.";
    }
    switch (winner) {
        case "user win":
            playerPoints += 1;
            console.log(compPoints, playerPoints);
            break;
        case "computer win":
                compPoints += 1;
                console.log(compPoints, playerPoints);
                break;
        }
    divTally.textContent = "Player: " + playerPoints +"/5 Comp: " + compPoints + "/5";
    //console.log(compPoints, playerPoints);
    return 0;
}
window.addEventListener('click', tallyWinner);
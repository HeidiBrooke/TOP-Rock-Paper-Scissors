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

window.addEventListener('click', playRound);
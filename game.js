//I think we should stick to lowercase to return the results so it's easier

function computerPlay() {
    //should return "rock", "paper", or "scissors"
    let computer_choice = Math.floor(Math.random() * 3);
    if (computer_choice == 0){
        return "rock";
    }
    else if (computer_choice == 1){
        return "paper";
    }
    else if (computer_choice == 2){
        return "scissors";
    }
    else {
        computerPlay();
    }
}


function playerPlay(/*round*/) {
    // should return "rock", "paper", or "scissors" 
    // I think it would be nice to show the player in the prompt what round is playing, so maybe it should get it as a parameter
    // prevent the player to write anything anything different to rock, paper or scissors, also it shouldn't matter if they use lower or uppercase
    // (NOTE: I am not sure if it should be the right way)
    const options = ["rock", "paper", "scissors"];
    let selectOption = prompt("Select: 'rock', 'paper', or 'scissors'");
    selectOption = selectOption.toLowerCase();

    while (!options.includes(selectOption)) {
        selectOption = prompt("Invalid choice. Please, select: 'rock', 'paper', or 'scissors'");
        selectOption = selectOption.toLowerCase();
    }    
    let round = 1;
    return "The selected option is: " + selectOption + " ; and this is round: " + round;
    round++
}

function playRound(/*playerSelection,computerSelection*/) {
    // should return who the winner is, player, computer or is a tie
    // gets playerSelection, and computerSelection
    if (playerSelection==computerSelection){
        return "tie"
    } else {
       switch (playerSelection) {
        case "rock":
           return computerSelection=="paper"? "computer" : "player";
        case "paper":
            return computerSelection=="scissors"?"computer" : "player";
        case "scissors":
            return computerSelection=="rock"? "computer" : "player";
        } 
    }
}

function game() {
    //it calls the other three functions
    //provide round variable to playerPlay()
    //gets "rock","paper" of "scissors" from playerPlay() and computerPlay()
    //provide (playerSelection,computerSelection) in that order and as single variables, not object nor array, to playRound()   
}

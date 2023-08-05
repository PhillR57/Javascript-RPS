function computerPlay() {
  let computer_choice = Math.floor(Math.random() * 3);
  if (computer_choice == 0) {
    return "rock";
  } else if (computer_choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerPlay(round) {
  const options = ["rock", "paper", "scissors"];
  while (true) {
    let selectOption = prompt(
      `Round ${round}: Type one of the following options:\n'rock'\n'paper'\n'scissors'`
    );
    
    if(selectOption===null){
      let confirmation = confirm("Are you sure you want to exit the game?");
      if(confirmation) {
        return "cancel";
      } else {
        selectOption = "";
      } 
    } 

    selectOption = selectOption.toLowerCase().trim();
    if (options.includes(selectOption)) {
      return selectOption;
    } else {
      alert("Invalid choice. Please, type: 'rock', 'paper', or 'scissors'")
    }
  }
} 

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else {
    switch (playerSelection) {
      case "rock":
        return computerSelection == "paper" ? "computer" : "player";
      case "paper":
        return computerSelection == "scissors" ? "computer" : "player";
      case "scissors":
        return computerSelection == "rock" ? "computer" : "player";
    }
  }
}

const virusAscii = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡔⠂⠀⠀⠐⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁
⠀⠀⠀⠀⢀⡀⠀⠀⢀⣠⣴⣶⡇⠀⠀⠀⠀⣄⠐⠂⠤⡀⠀⠀⢀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⠴⣭⠞⠑⢕⢿⣿⣿⡿⢇⡀⠀⠀⢀⣻⢀⡀⠀⡠⡣⠋⢙⠵⠂⠀⠀⠀
⠀⠐⠁⢴⠁⠀⠀⠀⢑⡯⠁⠀⠈⠉⠉⠋⠉⠁⠀⠀⣽⡍⠀⠀⠀⢱⡂⠀⠀⠀
⠀⠀⠀⣴⣷⣄⣀⡴⠟⠁⠢⣀⠀⠄⠀⠀⠀⠀⣀⠄⠘⢟⢦⣄⡰⠋⠱⡀⠀⠀
⠀⠀⣸⣿⣿⡿⠁⢀⣼⣦⡀⠈⠑⠪⢄⣧⠵⠚⠁⢀⣤⣷⡈⠁⢃⠀⠀⢡⠀⠀
⠎⠉⠙⠹⢛⢇⠀⢸⣿⡇⢨⣶⣄⠆⠈⠀⠑⣤⢴⡏⠈⣿⡇⠀⣨⡐⠢⠈⠀⠀
⠀⠀⠀⠀⠀⢸⠀⢸⣿⣷⣀⠉⢉⣨⣶⣷⣜⡉⠉⣀⣼⣿⡇⢰⣿⠀⠀⠀⠀⠀
⠀⠀⠀⣀⣀⡼⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠠⠿⣀⣀⠀⠀⠀
⠀⠀⢻⣿⣿⣧⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠱⠛⠛⠻⠀⠀
⠎⠉⠙⠹⢿⣇⠀⠀⠀⠈⠻⣿⡿⠟⠛⠛⠻⢿⡟⠁⠀⣠⡶⠳⡣⡀⢀⠃⠀⠀
⠀⠀⠀⢠⠷⣄⠀⢀⣴⣿⣶⣦⡌⠉⠁⠀⠉⡹⣤⣶⣿⣦⡀⠀⣠⠖⠅⠀⠀⠀
⠀⠀⠀⠈⠓⠊⠁⠉⠛⠿⢿⣿⡇⠀⠀⠀⠀⠃⣿⡿⠿⠻⡉⠉⠑⠐⠁⠀⠀⠀
⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠣⠄⠀⠀⠠⠴⠀⠀⠀⠀⠈⠢⡀⠀⠀⠀⠀⡠`;

function getPlayerName() {
  let playerName = prompt("Enter your name");
  if(playerName==null || playerName=="") playerName = "Player";
  playerName.trim();
  alert(`${playerName} prepare to play!`)
  return playerName;
}

function handleEndGame(status,playerScore,computerScore,playerName) {
  if (status==="cancel") {
    console.warn("GAME OVER");
    console.log("You lost your data");
    alert("GAME OVER\nYou lost your data");
  }  else {
    console.log("Final Score:");
    console.log(`${playerName}: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    if(playerScore==computerScore){
      alert("It was a tie, you didn't defeted the sinister Virus")
    } else if (playerScore>computerScore) {
      alert("You defeated the sinister Virus, congrats, your data is now safe!!!");  
    } else {
      alert("The sinister Virus!!!! You lost your data")
    }    
  }
  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    console.clear();
    game(); // Restart the game
  } else {
    console.log("Thank you for playing! Goodbye!");
    alert("Thank you for playing! Goodbye!");
    console.clear();
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gameStatus = "";
  alert("Greetings, puny human!\nI am the sinister Virus, lurking in the dark corners of your digital world. My sole purpose is to annihilate all your precious data, leaving nothing but a void in your pathetic existence. Your files, memories, and cherished moments - all shall be devoured by my insatiable hunger for chaos.\nPrepare yourself, for the only way to thwart my wicked plot is to face me in a perilous 5-round showdown of ROCK, PAPER, SCISSORS.\nCan you summon the courage to outsmart me, the all-knowing Virus? Do you possess the cunning to anticipate my every move?\nBeat me in five rounds and you will save your data.\nYou have to repeat the round until you win it to pass to the next round.\nOpen the browser's console or Press F12 and\nPrepare to play!")
  let playerName = getPlayerName();  
  console.log(virusAscii);
  console.log("Try to beat me!")
  
  for (let round = 1; round <= 5; round++) {
    let playerSelection = playerPlay(round);
    let computerSelection = computerPlay();
    if (playerSelection==="cancel") {
      gameStatus = "cancel"
      break;
    } else {
      result = playRound(playerSelection, computerSelection);
      console.warn(`Round ${round}:`);
      console.log(`${playerName} selection: ${playerSelection}`);
      console.log(`Virus selection: ${computerSelection}`);
      if (result === "player") {
        console.warn(`${playerName} wins this round!`);
        playerScore++;
      } else if (result === "computer") {
        console.warn("Virus wins this round! Let's play this round again.");
        computerScore++;
      } else {
        console.warn("It's a tie! Let's play another round.");
      }
    }
    gameStatus = "played";
    if(round==3) alert("You are half way, keep going!");
    if(round==4) alert("Your are almost there, keep going!");
  }
  
  handleEndGame(gameStatus,playerScore,computerScore,playerName);
}

game();

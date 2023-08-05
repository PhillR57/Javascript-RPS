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
    
    if(selectOption===null) return "cancel" //cancels the game
    
    selectOption = selectOption.toLowerCase();
    if (options.includes(selectOption.trim())) {
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



function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gameFinished = false;
  alert("Greetings, puny human!\nI am the sinister Virus, lurking in the dark corners of your digital world. My sole purpose is to annihilate all your precious data, leaving nothing but a void in your pathetic existence. Your files, memories, and cherished moments - all shall be devoured by my insatiable hunger for chaos.\nPrepare yourself, for the only way to thwart my wicked plot is to face me in a perilous 5-round showdown of ROCK, PAPER, SCISSORS.\nCan you summon the courage to outsmart me, the all-knowing Virus? Do you possess the cunning to anticipate my every move?\nBeat me in five rounds and you will save your data.\nYou have to repeat the round until you win it to pass to the next round.\nOpen the browser's console or Press F12 and\nPrepare to play!")
  let playerName = prompt("Enter your name");
  if(playerName==null || playerName=="") playerName = "Player";
  console.log(virusAscii);
  console.log("Try to beat me!")
  for (let round = 1; round <= 5 && gameFinished==false; round++) {
    playerSelection = "";
    computerSelection = "";
    result = "";
    while (result!="player" && gameFinished==false) {
      playerSelection = playerPlay(round);
      computerSelection = computerPlay();
      if (playerSelection==="cancel") {
        console.warn("GAME OVER");
        console.log("You lost your data");
        alert("GAME OVER\nYou lost your data");
        gameFinished = !gameFinished;
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
          console.warn("It's a tie! Let's play this round again.");
        }
      }
    }
    if(round==3) alert("You are half way, keep going!");
    if(round==4) alert("Your are almost there, keep going!");
  }

  if(gameFinished===false){
    alert("You defeated the sinister Virus, congrats, your data is now safe!!!")
    console.log("Final Score:");
    console.log(`${playerName}: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
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

game();

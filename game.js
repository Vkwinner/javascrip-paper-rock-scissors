const getUserChoice =function(userInput){
  userInput =userInput.toLowerCase();
  if(userInput==="rock" ||userInput==="paper"||userInput==="scissors"){
    return userInput;
  }else{
    console.log("Error");
  }
}

const getComputerChoice = function(){
 const randomNumber= Math.floor(Math.random()*3)
  switch(randomNumber){
    case 0:
      return "rock";
      break;
      case 1:
      return "paper";
      break;
      case 2:
      return "scissors";
      break;
   
  }
}

const determineWinner=function(userChoice,computerChoice){
  if(userChoice===computerChoice){
    return "The game is a tie!";
  }
  if(userChoice ==="rock"){
  if(computerChoice==="paper"){
    return "The computer won"
  }else{
    return "you won"
  }
  }
  if(userChoice ==="paper"){
  if(computerChoice==="scissors"){
    return "The computer won"
  }else{
    return "you won"
  } 
}
  
  if(userChoice ==="scissors"){
  if(computerChoice==="rock"){
    return "The computer won"
  }else{
    return "you won"
  } 
}
}
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('User choice: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
console.log(playGame())
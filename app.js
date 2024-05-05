//Variables
let playerPoints = 0;
let computerPoints = 0;

let playerPointsTxt = document.querySelector("#humanPoints");
let computerPointsTxt = document.querySelector("#iaPoints");

let text = document.querySelector("#resultTitle");
let playerSelectionImg = document.querySelector("#playerSelection");
let computerSelectionImg = document.querySelector("#iaSelection");

let selections = ["rock", "paper", "scissors"];
let images = ["./Assets/rock-hand.png", "./Assets/paper-hand.png", "./Assets/scissors-hand.png"];

let buttons = document.querySelectorAll(".btn");
buttons.forEach(button =>{
    button.addEventListener("click", playRound);
});

let restartBtn = document.querySelector("#restart-btn");
restartBtn.addEventListener("click", restartGame);

function restartGame(){
    playerPoints = 0;
    playerPointsTxt.innerText = playerPoints;
    computerPoints = 0;
    computerPointsTxt.innerText = computerPoints;
    text.innerText = "YEAHH! Let's play again!";
    restartBtn.hidden = true;
    document.querySelector("#rock").disabled = false;
    document.querySelector("#paper").disabled = false;
    document.querySelector("#scissors").disabled = false;
}

function gameWin(){
    text.innerText = "YOU HAVE 5 POINTS! YOU WIN THIS GAME! :)";
    restartBtn.removeAttribute("hidden");
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

function gameOver(){
    text.innerText = "THE IA HAVE 5 POINTS! YOU LOSE THIS GAME! :(";
    restartBtn.removeAttribute("hidden");
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

function setImages(userSelection, cpuSelection){
    let cpuImage;
    let userImage;

    if(userSelection == "rock"){
        userImage = 0;
    }
    else if(userSelection == "paper"){
        userImage = 1;
    }
    else{
        userImage = 2;
    }

    if(cpuSelection == "rock"){
        cpuImage = 0;
    }
    else if(cpuSelection == "paper"){
        cpuImage = 1;
    }
    else{
        cpuImage = 2;
    }

    computerSelectionImg.src = images[cpuImage];
    playerSelectionImg.src = images[userImage];
}

function playRound(e){
    let computerChoice = selections[Math.floor(Math.random()*3)];
    let userChoice = e.currentTarget.id;

    setImages(userChoice, computerChoice);

    if(computerChoice == userChoice){
        //DRAW path
        text.innerText = "DRAW! Let's try again!"
    }
    else if(userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper"){
        //WIN path
        text.innerText = "YOU WIN! You earn 1 point!"
        playerPoints++;
        playerPointsTxt.innerText = playerPoints;
        if(playerPoints==5){
            gameWin();
        }
    }
    else{
        //LOSE path
        text.innerText = "YOU LOSE! Computer earn 1 point!"
        computerPoints++;
        computerPointsTxt.innerText = computerPoints;
        if(computerPoints==5){
            gameOver();
        }
    }
}
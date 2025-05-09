let userScore = 0;
let compScore = 0;

let reset = document.querySelector(".button-reset");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //  rock,paper,scissor
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "User win";
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red"
    }
}

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "blue"
}


const playGame = (userChoice) =>{
    console.log("userChoice =",userChoice)
    // generate computer choice
    const compScore = genComputerChoice();
    console.log("comp choice =",compScore)

    if(userChoice === compScore){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compScore === "paper" ? false: true;
        } else if(userChoice === "paper"){
            userWin === "scissors" ? false : true;
        } else {
            userWin = compScore === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})




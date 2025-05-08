let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    
    //  rock,paper,scissor

}


const play = (userChoice) =>{
    console.log("userChoice =",userChoice)
    // generate computer choice
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("clicked",userChoice);
        playGame(userChoice);
    })
})


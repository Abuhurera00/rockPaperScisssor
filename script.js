let cpuChoice = document.getElementById('cpu-choice');
let userChoice = document.getElementById('user-choice');
let resultDisplay = document.getElementById('result-display');
let scoreDisplay = document.getElementById('score-display');
let possibleUserInts = document.querySelectorAll('button');

let cpuInput;
let userinput;
let randomNumber;
let score = 0;


let choice = ['rock', 'paper', 'scissor']
let cpuInputs = ()=>{
    randomNumber = Math.floor(Math.random()*choice.length)
    cpuInput = ['rock', 'paper', 'scissor'][randomNumber]
    console.log(cpuInput)
    cpuChoice.innerHTML = cpuInput
}


possibleUserInts.forEach(possibleUserInts=>{
    possibleUserInts.addEventListener('click', (e)=>{
        userinput = e.target.id
        userChoice.innerHTML = userinput
        cpuInputs()
        // console.log(cpuInput)
        // console.log(userinput)

        if(userinput === 'rock' && cpuInput === 'paper'){
            result = "you Lose"
        }
       else if(userinput === 'rock' && cpuInput === 'scissor'){
            result = "you Won"
            score++
        }
       else if(userinput === 'paper' && cpuInput === 'rock'){
            result = "you Won"
            score++
        }
       else if(userinput === 'paper' && cpuInput === 'scissor'){
            result = "you Lose"
        }
       else if(userinput === 'scissor' && cpuInput === 'rock'){
            result = "you Lose"
        }
       else if(userinput === 'scissor' && cpuInput === 'paper'){
            result = "you Won"
            score++
        }else{
            result = 'Draw'
        }
        resultDisplay.innerHTML = result;
        scoreDisplay.innerHTML = score;
    })
})
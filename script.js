const screen = document.querySelector('.inside');


for(let i = 0; i< 200;i++) {
    let randomWidth = Math.floor(Math.random()*100)
    let randomHeight = Math.floor(Math.random()*100)
    let star= document.createElement('div')  
    star.classList.add('star')
    star.style.top= randomHeight + '%';
    star.style.left= randomWidth + '%';
    screen.appendChild(star)
}
const options = ['rock','paper','scissors','lizard','spock']

const btns = document.querySelectorAll('.btn');
const finalResult = document.querySelector('.final-result')
const currentResult = document.querySelector('.current-result')
const currentResultContainer = document.querySelector('.current-result-container');
const pcPointsDisplay=document.querySelector('.pc-result-display');
const userPointsDisplay=document.querySelector('.user-result-display');
const restartButton = document.querySelector('.restart-button')
const restartTemplate = document.querySelector('.restart-template ') 

let userChoice;
let pcChoice;

let pcPoints = 0;
let userPoints = 0;

btns.forEach(btn =>{      
    btn.addEventListener('click',() => {
      userChoice = btn.getAttribute('data-id');
      btn.classList.add('user-choice')
       pcChoicer();
       checkResult(); 
       finalResults();
    })
})

function pcChoicer(){
let randomNumber =  Math.floor(Math.random()*options.length)
pcChoice = options[randomNumber];
}

function checkResult() {
   switch (pcChoice + userChoice) {
    case 'scissorspaper':
    currentResult.innerHTML='scissors cuts paper'
    pcPoints++
    pcPointsDisplay.innerHTML=pcPoints
    break;
    case 'paperrock':
    currentResult.innerHTML='paper covers rock'
    pcPoints++
    pcPointsDisplay.innerHTML=pcPoints
    break;
    case 'rocklizard':
    currentResult.innerHTML='rock chrushes lizard'
    pcPoints++
    pcPointsDisplay.innerHTML=pcPoints
    break;
    case 'lizardspock':
    currentResult.innerHTML='lizard poisons spock'
    pcPoints++
    pcPointsDisplay.innerHTML=pcPoints
    break;
    case 'spockscissors':
    currentResult.innerHTML='spock smashes scissors'
    pcPoints++
    pcPointsDisplay.innerHTML=pcPoints
    break;
    case 'scissorslizard':
    currentResult.innerHTML='scissors decapitates lizard'
    pcPoints++
    pcPointsDisplay.innerHTML=pcPoints
    break;
    case 'lizardpaper':
    currentResult.innerHTML='lizard eats paper'
    pcPoints++
    pcPointsDisplay.innerHTML=pcPoints
    break;
    case 'paperspock':
    currentResult.innerHTML='paper disproves spock'
    pcPoints++
    pcPointsDisplay.innerHTML=pcPoints
    break;
    case 'spockrock':
    currentResult.innerHTML='spock vaporizes rock'
    pcPoints++
    pcPointsDisplay.innerHTML=pcPoints
    break;
    case 'rockscissors':
    currentResult.innerHTML='rock crushes scissors'
    pcPoints++
    pcPointsDisplay.innerHTML=pcPoints
    break;
   /*userwins*/ 
   case 'paperscissors':
    currentResult.innerHTML='scissors cuts paper'
    userPoints++
    userPointsDisplay.innerHTML=userPoints
    break;
    case 'rockpaper':
    currentResult.innerHTML='paper covers rock'
    userPoints++
    userPointsDisplay.innerHTML=userPoints
    break;
    case 'lizardrock':
    currentResult.innerHTML='rock chrushes lizard'
    pcPoints++
    userPointsDisplay.innerHTML=userPoints
    break;
    case 'spocklizard':
    currentResult.innerHTML='lizard poisons spock'
    userPoints++
    userPointsDisplay.innerHTML=userPoints
    break;
    case 'scissorsspock':
    currentResult.innerHTML='spock smashes scissors'
    userPoints++
    userPointsDisplay.innerHTML=userPoints
    break;
    case 'lizardscissors':
    currentResult.innerHTML='scissors decapitates lizard'
    userPoints++
    userPointsDisplay.innerHTML=userPoints
    break;
    case 'paperlizard':
    currentResult.innerHTML='lizard eats paper'
    userPoints++
    userPointsDisplay.innerHTML=userPoints
    break;
    case 'spockpaper':
    currentResult.innerHTML='paper disproves spock'
    userPoints++
    userPointsDisplay.innerHTML=userPoints
    break;
    case 'rockspock':
    currentResult.innerHTML='spock vaporizes rock'
    userPoints++
    userPointsDisplay.innerHTML=userPoints
    break;
    case 'scissorsrock':
    currentResult.innerHTML='rock crushes scissors'
    userPoints++
    userPointsDisplay.innerHTML=userPoints
    break;
    /*samechoice */
    case 'paperpaper':
        case 'rockrock':
        case 'lizardlizard':
        case 'spockspock':
        case 'scissorsscissors':
            currentResult.innerHTML='You chose the same!'
   }
}

function finalResults(){
    if(userPoints+pcPoints == 5) {
        restartTemplate.classList.add('active')
        currentResult.innerHTML=''
        if(userPoints>pcPoints) {
            finalResult.innerHTML='You win!'
        } else if(pcPoints> userPoints) {
            finalResult.innerHTML='You lose!' 
        }
       } 
}

restartButton.addEventListener('click',()=>{
    restartTemplate.classList.remove('active')
    pcPoints = 0
    userPoints=0
    pcPointsDisplay.innerHTML=pcPoints
    userPointsDisplay.innerHTML=userPoints
    finalResult.innerHTML ='Rock Paper Scissors Lizard Spock'
})
const startBtn = document.getElementById('Start');
const nxtBtn = document.getElementById('Next')
const RestartBtn = document.getElementById('restart')

const discriptionCont = document.getElementById('App-DescriptionID');
const questionCont = document.getElementById('ques00');
const selectedQuestion = document.getElementById('question');
const counter01 = document.getElementById('counter');
const   ansBtnsBox = document.getElementById('ansBtns')
startBtn.disabled = false;
nxtBtn.disabled = true;
RestartBtn.disabled = true;
let  randomQuestion ;
let count = 0;

startBtn.addEventListener('click',startGame )
nxtBtn.addEventListener('click',startGame)
RestartBtn.addEventListener('click',reset)


function startGame(){
    console.log("game Started ");
    startBtn.disabled = true;
    nxtBtn.disabled = false;
    discriptionCont.classList.add("hidden")
    questionCont.classList.remove("hidden")
    count++ ; 
    randomQuestion = questionsArray[Math.floor(Math.random()*4)]
    if(count==10){
        nxtBtn.disabled = true;
        RestartBtn.disabled= false;
    }
    nextQuestion()
}

function reset(){
    
    startBtn.disabled = false;
    nxtBtn.disabled = true;
    resetCounter()
}
function resetCounter(){
    count = 0;
    counter01.innerText = count;
}




function nextQuestion(){
    reset2()
  showQuestion(questionsArray[randomQuestion])
}


function showQuestion(question){
    selectedQuestion.innerText = randomQuestion.question;
    console.log(randomQuestion);
    counter01.innerText = count + " /10";  

    randomQuestion.answers.forEach(ans => {
        const button = document.createElement('button')
        button.innerText = ans.text
        button.classList.add('button')
        if(ans.correct){
            button.dataset.correct = ans.correct
        }
        button.addEventListener('click',chooseAns)
        ansBtnsBox.appendChild(button)
    })
}

function reset2(){
    while(ansBtnsBox.firstChild){
             ansBtnsBox.removeChild(ansBtnsBox.firstChild)
        }

}



function chooseAns(){

}



const questionsArray = [

{
    question : "choose the correct answer 1*9" ,
    answers  : [
        {text: '9' , correct: true} ,
        {text: '5', correct: false},
        {text: '20' , correct: false} ,
        {text: '55', correct: false}
    ]  
    
},

{
    question : "2*9" ,
    answers  : [
        {text: '9' , correct: false} ,
        {text: '98', correct: true},
        {text: '99' , correct: true} ,
        {text: '18', correct: false}
    ]  
},

{
    question : "3*9" ,
    answers  : [
        {text: '9' , correct: false} ,
    {text: '98', correct: true},
    {text: '99' , correct: true} ,
    {text: '18', correct: false}
    ]  
},
{
    question : "4*9" ,
    answers  : [
        {text: '9' , correct: false} ,
        {text: '98', correct: true},
        {text: '99' , correct: true} ,
        {text: '18', correct: false}
    ]  
},



{
    question : "choose the correct answer 5*9" ,
    answers  : [
        {text: '9' , correct: false} ,
        {text: '98', correct: true},
        {text: '99' , correct: true} ,
        {text: '18', correct: false}
    ]  
    
},

{
    question : "6*9" ,
    answers  : [
        {text: '9' , correct: false} ,
        {text: '98', correct: true},
        {text: '99' , correct:false} ,
        {text: '18', correct: false}
    ]  
},

{
    question : "7*9" ,
    answers  : [
        {text: '9' , correct: true} ,
        {text: '5', correct: false}
    ]  
},
{
    question : " choose the correct answer 8*9" ,
    answers  : [
        {text: '9' , correct: true} ,
        {text: '5', correct: false}
    ]  
}

,

{
    question : "9*9" ,
    answers  : [
        {text: '9' , correct: true} ,
        {text: '5', correct: false}
    ]  
    
},

{
    question : "10*9" ,
    answers  : [
        {text: '9' , correct: false} ,
        {text: '18', correct: true}
    ]  
},

{
    question : "11*9" ,
    answers  : [
        {text: '9' , correct: true} ,
        {text: '5', correct: false}
    ]  
},
{
    question : "12*9" ,
    answers  : [
        {text: '9' , correct: true} ,
        {text: '5', correct: false}
    ]  
}


]












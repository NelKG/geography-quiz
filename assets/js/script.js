// id of start button 
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

const restartButton = document.getElementById('restart');
let countOfQuestion = document.querySelector('number-of-question');
const scoreArea = document.getElementById('score-area')
const userScore = document.getElementById('score');
//const showFinalScore = document.getElementById('finalscore');

//let scorearea = document.querySelector = ('score-area');
const questionCounter = document.getElementById ('question-counter');
const questionCounterText = document.getElementById('questionCounter');
let container = document.getElementById('question-container');
//const scoreText = document.getElementById('score');
//const resultBox = document.getElementById('resultBox');
//let restart
let shuffledQuestions, currentQuestionIndex;
var correctAnswers = 0;
var incorrectAnswers = 0;
let score = 0;
//code to enable start button to start the click//
//event listender for the next button//
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {

    console.log(questionCounter, "< ===questionCounter")
    if(parseInt(questionCounter.innerText) < 8){
    // console.log(typof, questionCounter.innerText);
    //hide button
    //display restart
    questionCounter.innerText =  parseInt(questionCounter.innerText) + 1
    }else{
        nextButton.style.display = "none";
        restartButton.classList.add("hide");
    
      //..nextButton.classList('my-hide')
      //..restartButton.style.display('my-hide')
      //resetValues();
      //tartQuiz();
    };
    

    // move these inside the if statement
    currentQuestionIndex++;
    setNextQuestion();

    // else hide the button 
    
});


//code to start the quiz //
function startQuiz() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    container.style.visibility = 'visible';
    const scoreArea = document.getElementById('score-area');
    scoreArea.style.display = 'block';
    nextButton.style.display = 'block'
    //startButton.classList.add('hide');
    //restart.style.display = 'hide';
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
    
    
}

//code to set next question and shuffle each question//
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

//code to take shuffled questions// 

function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
        
            
    });
    
}
  


function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
       answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }


    

}


function selectAnswer(e) {
    answerButtonsElement.childNodes.forEach(function (btn) {
        btn.disabled = true;
    });
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    const score = document.getElementById("score");
    const scoreVal = parseInt(score.innerText);
    const incorrect = document.getElementById("incorrect");
    const incorrectVal = parseInt(incorrect.innerText);
    if (correct) {
        score.innerText = scoreVal + 1;
        console.log("score", parseInt(score.innerText));

        correctAnswers++;
    } else {
        incorrect.innerText = incorrectVal + 1;
        console.log("score", parseInt(incorrect.innerText));
    }
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
       nextButton.classList.remove('hide');
    } else {
       
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');

    }
    
//nextButton.classList.remove('hide');



}
//code to set the correct and incorrect answer 
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {

        element.classList.add('correct');

    } else {

        element.classList.add('incorrect');


    }
}
//code that clears each answer after each question//
function clearStatusClass(element) {
    element.classList.remove('score');
    element.classList.remove('incorrect');

}


function resetValues(){
    correctAnswers = 0;
    incorrectAnswers = 0;
    questionCounter = 1;
    //questionCounter.textContent =1;
    //scoreArea.style.display = 'none';
    //startButton.style.display = 'none';
    
    }

function restartQuiz(){
restartButton.addEventListener('click', resetValues());

}

//list of questions used in the quiz//
const questions = [
    {
        question: "What is the capital of Sweden?",
        answers: [
            { text: "Oslo", correct: false },
            { text: "Paris", correct: false },
            { text: "Stockholm", correct: true },
            { text: "Cardiff", correct: false },
        ]
    },
    {
        question: "What is the capital of Thailand?",
        answers: [
            { text: "Bangkok", correct: true },
            { text: "Manila", correct: false },
            { text: "Dili", correct: false },
            { text: "Jakarta", correct: false },
        ]



    },
    {
        question: "What is the capital of Mexico?",
        answers: [
            { text: "Caracas", correct: false },
            { text: "Santiago", correct: false },
            { text: "Mexico City", correct: true },
            { text: "Lima", correct: false },
        ]

    },

    {
        question: "What is the capital of Malaysia?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Hong Kong", correct: false },
            { text: "Kuala Lampur", correct: true },
            { text: "Kabul", correct: false },
        ]
    },
    {
        question: "What is the capital of Libya?",
        answers: [
            { text: "Addis Ababa", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Algiers", correct: false },
            { text: "Tripoli", correct: true },
        ]
    },
    {
        question: "What is the capital of Egypt?",
        answers: [
            { text: "Dakar", correct: false },
            { text: "Nairobi", correct: false },
            { text: "Stockholm", correct: false },
            { text: "Cairo", correct: true },
        ]
    },

    {
        question: "What is the capital of Denmark?",
        answers: [
            { text: "Budapest", correct: false },
            { text: "Amsterdam", correct: false },
            { text: "Copenhagen", correct: true },
            { text: "Helsinki", correct: false },
        ]
    },
    {
        question: "What is the capital of Slovenia?",
        answers: [
            { text: "Ljublijana", correct: true },
            { text: "Prague", correct: false },
            { text: "Lisbon", correct: false },
            { text: "Moscow", correct: false },
        ]
    }

];



//check if current question is 8
//if 8, remove the next button, and display the restart button
//the restart button's visibility should not depend on whether the user has selected an option or not


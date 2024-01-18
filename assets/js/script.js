// id of start button 
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const userScore = document.getElementById('user-score');
const restart = document.getElementById('restart');
let countOfQuestion = document.querySelector('number-of-question');
let scorearea = document.querySelector = ('score-area');
const questionCounter = document.getElementById ('question-counter')
const questionCounterText = document.getElementById('questionCounter');
let container = document.getElementById('question-container');
//const scoreText = document.getElementById('score');
//const resultBox = document.getElementById('resultBox');

let shuffledQuestions, currentQuestionIndex;
var correctAnswers = 0;
let score = 0;



//code to enable start button to start the click//

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    console.log(questionCounter, "< ===questionCounter")
    if(parseInt(questionCounter.innerText) < 8){
    questionCounter.innerText =  parseInt(questionCounter.innerText) + 1
    }
    currentQuestionIndex++;
    setNextQuestion();
});
//code to start the quiz //
function startQuiz() {
    startButton.classList.add('hide');
    // questionContainerElement.classList.remove('hide');
    container.style.visibility = 'visible';
    const scoreArea = document.getElementById('score-area');
    scoreArea.style.display = 'block';
    nextButton.style.display = 'block'
    startButton.classList.add('hide');
    restart.style.display = 'hide';
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
//questionContainerElement.classList.remove('hide');
//    ClasscontainerElement.className.add('hide');
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
        console.log("correct", parseInt(score.innerText));

        correctAnswers++;
    } else {
        incorrect.innerText = incorrectVal + 1;
        console.log("correct", parseInt(incorrect.innerText));
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
//nextButton.style.dislay = "block";


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

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');

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


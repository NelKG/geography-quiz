const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const userScore= document.getElementById('user-score');
// const questionCounterText = document.getElementById('questionCounter');
// const scoreText = document.getElementById('score');
const resultBox=document.getElementById('resultBox');

let shuffledQuestions, currentQuestionIndex;
var correctAnswers = 0;
let score = 0;

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

//     for (let button of buttons) {
//         button.addEventListener("click", function () {
//             if (this.getAttribute("data-type") === "submit") {
//                 checkAnswer();
//             } else {
//                 let gameType = this.getAttribute("data-type");
//                 runGame(gameType);
//             }
//         });
//     }




startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    score = 0;
    questionCounter = 0;
    
}

// function loadScore() {
//     const totalScore = document.getElementById("score");
//     totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
// }


function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

// questionCounter++;
// questionCounterText.innerText = questionCounter + "/" + Max_Questions;

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
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    const score = document.getElementById("score");
    const scoreVal = parseInt(score.innerText);
    const incorrect = document.getElementById("incorrect");
    const incorrectVal = parseInt(incorrect.innerText);
    if (correct) {
        score.innerText = scoreVal + 1;
        console.log("correct", parseInt(score.innerText));
        
        //correctAnswers++;
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
        element.innerText = correctAnswers.toString() + "/" + RandomQuestions.length.toString();
        correctAnswers = 0;
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');

    }
    restartBtn.addEventListener('click, restart');
    // button.disabled = correct;
}
nextButton.style.dislay = "block";

// function selectAnswer(e) {
//     const selectedButton = e.target;
//     const correct = selectedButton.dataset.correct;
//     if (correct) {
//         correctAnswers++;
//     }
//     setStatusClass(document.body, correct);
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct);
//     });
//     if (RandomQuestions.length > currentQuestion + 1) {
//         nextButton.classList.remove('hide');
//     } else {
//         display(correctAnswers.toString() + "/" + RandomQuestions.length.toString());
//         correctAnswers = 0;
//         startButton.innerText = 'Restart';
//         startButton.classList.remove('hide');
//     }
// }



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

// function showScore(){
//     resetState();
//   questionElement.innerHTML = `You scored ${score} out of
//       ${questions.length}!`;
//       nextButton.innerHTML= "Play Again";
//       nextButton.style.display = "block";

//  }

//  function handleNextButton(){
//      currentQuestionIndex++;
//     if(currentQuestionIndex <questions.length){
//         showQuestion();
//   }else{
//          showScore();
//    }

    


// nextButton.addEventListener("click", () =>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }
    
// });
// function showScore(){
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
//     nextButton.innerHTML ="Play Again";
//     nextButton.style.display= "block";

// }
// // function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
    
//     nextButton.addEventListener("click", ()=>{
//         if(currentQuestionIndex < questions.length {
//             handleNextButton();
//         }else{
//             startQuiz();

//         }
//         });



// function incrementScore() {

// //     let oldScore = parseInt(document.getElementById("score").innerText);
// //     document.getElementById("score").innerText = ++oldScore;

// // }
// //     function incrementWrongAnswer() {

// //         let oldScore = parseInt(document.getElementById("incorrect").innerText);
// //         document.getElementById("incorrect").innerText = ++oldScore;
//     // }


//  function nextQuestion(e) {
// //     questionCounter++;
// //     questionNumber.innerText = `${questionCounter}`;
// //     document.getElementById(answerSelected).classList.remove("correctbtn", "incorrectbtn");
// //     let displayCorrectAnswer = document.querySelector("[data-correct='true']");
// //     displayCorrectAnswer.classList.remove("correctbtn");
// //     // Remove the attribute on correct question ready for the next question
// //     // loops through to check for correct answer & adds data attribute to the correct answer 
// //     for (let button of answerButtons) {
// //         if (button.innerHTML === correctAnswer) {
// //             button.removeAttribute("data-correct", "true");
// //         }
//     // }
    //  getQuestion(data);


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


//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }
// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
// // }

// function resetState() {

//     nextButton.style.display = "none";
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// // }

// function selectAnswer(e) {
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if (isCorrect) {
//         selectedBtn.classList.add("correct");
//         score++;
//     } else {
//         selectedBtn.classList.add("correct");

//     }

//     Array.from(answerButtons.children).forEach(button => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });

//     nextButton.style.display = "block";





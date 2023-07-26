const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container');
// const questionElement = document.getElementById('question');
// const answerButtons = document.getElementById('answer-buttons');

// let shuffledQuestions, currentQuestionIndex;
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    console.log('Started');
    startButton.classList.add('hide');
    // shuffledQuestions = questions.sort(() => Math.random() -.5);
    // currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
}

    // setNextQuestion(){

    // }


function setNextQuestion(){
    // showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {
    // questionElement.innerText = question.question;


}

function selectAnswer(){


}


// const questions = [
//     {
//         question: "What is the capital of Sweden?",
//         answers: [
//             { text: "Oslo", correct: false },
//             { text: "Paris", correct: false },
//             { text: "Stockholm", correct: true },
//             { text: "Cardiff", correct: false },
//         ]
//     },
//     {
//         question: "What is the capital of Thailand?",
//         answers: [
//             { text: "Bangkok", correct: true },
//             { text: "Manila", correct: false },
//             { text: "Dili", correct: false },
//             { text: "Jakarta", correct: false },
//         ]



//     },
//     {
//         question: "What is the capital of Mexico?",
//         answers: [
//             { text: "Caracas", correct: false },
//             { text: "Santiago", correct: false },
//             { text: "Mexico City", correct: true },
//             { text: "Lima", correct: false },
//         ]

//     },

//     {
//         question: "What is the capital of Malaysia?",
//         answers: [
//             { text: "Beijing", correct: false },
//             { text: "Hong Kong", correct: false },
//             { text: "Kuala Lampur", correct: true },
//             { text: "Kabul", correct: false },
//         ]
//     },
//     {
//         question: "What is the capital of Libya?",
//         answers: [
//             { text: "Addis Ababa", correct: false },
//             { text: "Cape Town", correct: false },
//             { text: "Algiers", correct: false },
//             { text: "Tripoli", correct: true },
//         ]
//     },
//     {
//         question: "What is the capital of Egypt?",
//         answers: [
//             { text: "Dakar", correct: false },
//             { text: "Nairobi", correct: false },
//             { text: "Stockholm", correct: false },
//             { text: "Cairo", correct: true },
//         ]
//     },

//     {
//         question: "What is the capital of Denmark?",
//         answers: [
//             { text: "Budapest", correct: false },
//             { text: "Amsterdam", correct: false },
//             { text: "Copenhagen", correct: true },
//             { text: "Helsinki", correct: false },
//         ]
//     },
//     {
//         question: "What is the capital of Slovenia?",
//         answers: [
//             { text: "Ljublijana", correct: true },
//             { text: "Prague", correct: false },
//             { text: "Lisbon", correct: false },
//             { text: "Moscow", correct: false },
//         ]
//     }



// ]
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }
// // function showQuestion() {
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
// }

// function resetState() {

//     nextButton.style.display = "none";
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

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
// }

// startQuiz();
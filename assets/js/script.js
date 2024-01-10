const questionElement= document.getElementById("question");
const answerButton = document.getElementById("answer-buttins");
const nextButton= document.getElementById ("answer-btn");

let currentQuestionIndex = 0;
let score = 0;


function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();


}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;


}



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

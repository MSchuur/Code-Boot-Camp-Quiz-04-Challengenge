var body =document.querySelector(".container");
var viewing = document.querySelector(".viewing");
var timerEl = document.querySelector(".timer");

// Creating Element to place the Quiz Question
var divQuestion = document.createElement("div")
// Creating Element for the ordered list for answers
var listEl = document.createElement("ul");
// Creating Element for the timer display
var scoreEl = document.getElementById("time");

var quizNum = 0;
var correctAnswer;
var secondsLeft = 15;
// Variable to select the proper elements to change
var footer = document.querySelector("ansDisplay")

// var next = document.querySelector("ul");
var start = document.querySelector(".startB");

// Questions and answers for the quiz
var quiz = [
    {
        ask: "Which of the following <tags> requires a closing </tag>?",
        options: [
            "<br>", "<p>", "<img>", "<meta>"
        ],
        answer: "<p>"
    },
    {
        ask: "Which of the following is a text-decortation",
        options: [
            "30px", "color", "bold", "underline"
        ],
        answer: "underline" 
    },
    {
        ask: "CSS is the acroynm for?",
        options: [
            "Cassading Style Sheet", "Computer Style Sheet", "Colorful Style Sheet", "Common Style Sheet"
        ],
        answer: "Cassading Style Sheet"
    },
    {
        ask: "What Java Script command do you use to add an elemet to a parent?",
        options: [
            ".remove", ".getElement", ".uppendChild", ".createElement"
        ],
        answer: ".uppendChild"
    },
    {
        ask: "What is the extension for a Jave Script file?",
        options: [
            ".doc", ".html", ".css", ".js"
        ],
        answer: ".js"
    }
]

function startQuiz(event) {
    var startElButton = document.getElementById("startButton");
    var headingEl = document.getElementById("heading");
    startElButton.remove();
}

// Initialize and run timer
function setTimer() {
    console.log("timer starting");

    
    scoreEl = setInterval(function() {
        
        secondsLeft--;
        timerEl.textContent = "Timer: " + secondsLeft;
        timerEl.setAttribute("style", "font-size: 1.1em; font-weight: bold");
        
        if(secondsLeft === 0) {
            clearInterval(scoreEl);
            inptInt();  
        }
    }, 1000);
}

// Function to renderthe question and answers
function renderQuestion() {

    console.log(quizNum);
    divQuestion.textContent = quiz[quizNum].ask;
    viewing.appendChild(divQuestion);
    viewing.appendChild(listEl);

    for (var i = 0; i < quiz.length -1; i++) {
        var li = document.createElement("li");
        li.textContent = quiz[quizNum].options[i];
        listEl.appendChild(li);
    
    }
}

function checkAnswer(){
    console.log("It arrived");
    console.log(correctAnswer);
    if(correctAnswer === true) {
        correctAnswer = false;
        renderQuestion();
    }
    else {
        console.log("Time to be Deducted");
        renderQuestion();
    }
}

// Function for the Input of initials and edisplaying the score
function inptInt(){
    // Insert code here
}

// Starts the fucntion for the quiz when the start button is clicked
start.addEventListener("click", function(event) {
    startQuiz();
    renderQuestion();
    setTimer();
});
    // Start timer

listEl.addEventListener("click", function(event) {

    var element = event.target;
    var elementText = event.target.innerText;

    if(element.matches("li") && elementText === quiz[quizNum].answer) {
        // console.log(quizNum);
        quizNum ++;
        listEl.textContent = "";
        viewing.appendChild(listEl);
        correctAnswer = true
        checkAnswer();
    }
    else if (element.matches("li") && elementText !== quiz[quizNum].answer) {
        // console.log(quizNum);
        quizNum ++;
        listEl.textContent = "";
        viewing.appendChild(listEl);

        checkAnswer();
    }
    else {
        
    }
    
});

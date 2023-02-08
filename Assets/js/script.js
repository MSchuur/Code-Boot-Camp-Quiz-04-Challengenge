var body =document.querySelector(".container");
var viewing = document.querySelector(".viewing");
var timerEl = document.querySelector(".timer");
var scoreEl = document.getElementById("time");
var footerEl = document.getElementById("ansDisplay");
var start = document.querySelector(".startB");



// Creating Element to place the Quiz Question
var divQuestion = document.createElement("div")
// Creating Element for the ordered list for answers
var listEl = document.createElement("ul");
// Creating Element for the timer display


var quizNum = 0;
var correctAnswer;
var secondsLeft = 75;

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

// Initialize and starts timer/scorer
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
    // Checks to see if all quiz questions have been asked and if true stop quiz and brings up input form
    if(quiz.length !== quizNum) {
        console.log(quiz.length);
        console.log(quizNum);
        // inptInt();
    }
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

// Checks to see if the answer is correct and deducts time from the timer if incorrect
function checkAnswer(){
    
    // Set the stlye element of the footer to indicate correct or incorrect answer
    footerEl.setAttribute("style", "font-size: 42px; font=weight: bold; text-align: center; padding-top: 750px");
    
    if(correctAnswer === true) {
        correctAnswer = false;
        footerEl.textContent = "Correct";
        
        renderQuestion();
    }
    else {
        console.log("Time to be Deducted");
        secondsLeft = secondsLeft - 15;
        footerEl.textContent = "Wrong";
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
    // Renders the first question
    renderQuestion();
    // Starts the timer/score
    setTimer();
});

// Listens for a click then determines if it is targeting the LI and then detirmeine if the guess is correct 
listEl.addEventListener("click", function(event) {

    var element = event.target;
    var elementText = event.target.innerText;

    if(element.matches("li") && elementText === quiz[quizNum].answer) {
        quizNum ++;
        // resets to a blank list
        listEl.textContent = "";
        viewing.appendChild(listEl);
        correctAnswer = true
        checkAnswer();
    }
    else if (element.matches("li") && elementText !== quiz[quizNum].answer) {
        quizNum ++;
        // Resets to a blank list 
        listEl.textContent = "";
        viewing.appendChild(listEl);

        checkAnswer();
    }
});

var body = document.querySelector(".container");
var viewing = document.querySelector(".viewing");
var timerEl = document.querySelector(".timer");
var scoreEl = document.getElementById("time");
var footerEl = document.getElementById("ansDisplay");
var start = document.querySelector(".startB");
var highScoreEl = document.getElementById("highscore");


// Creating Element to place the Quiz Question
var divQuestion = document.createElement("div")
// Creating Element for the ordered list for answers
var listEl = document.createElement("ul");
// Creating Element for the timer display
var formEl = document.createElement("form");
var labelEl = document.createElement("label");
var inputEl = document.createElement("input");
var formP1El = document.createElement("p");
var formP2El = document.createElement("p");
var submitEl = document.createElement("button");
var highScoreEl = document.createElement("li");

var quizNum = 0;
var correctAnswer;
var secondsLeft = 75;
var score;
var highScore = [];

function init() {
    var storedHS = JSON.parse(localStorage.getItem("highscore"));
    console.log(storedHS);
}

// function saveHighScore() {
    
//     var highScore = [inputEl.innerHTML, score];
//     }
// }

// function renderHighScore () {
    
// }

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
    startElButton.remove();
    startElButton = document.getElementById("title");
    startElButton.remove();
}

// Initialize and starts timer/scorer
function setTimer() {
    console.log("timer starting");

    
    scoreEl = setInterval(function() {
        
        secondsLeft--;
        timerEl.textContent = "Timer: " + secondsLeft;
        score = secondsLeft;
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
    
    console.log(quizNum);
    divQuestion.textContent = quiz[quizNum].ask;
    viewing.appendChild(divQuestion);
    viewing.appendChild(listEl);

    for (var i = 0; i < quiz.length -1; i++) {
        var li = document.createElement("li");
        li.textContent = quiz[quizNum].options[i];
        listEl.appendChild(li);
        listEl.setAttribute("class", "veiwing");
        
    
    }
}

// Checks to see if the answer is correct and deducts time from the timer if incorrect
function checkAnswer(){
    
    // Set the stlye element of the footer to indicate correct or incorrect answer
    footerEl.setAttribute("style", "font-size: 42px; font=weight: bold; text-align: center; padding-top: 750px");
    
    if(correctAnswer === true) {
        correctAnswer = false;
        footerEl.textContent = "Correct";
        
        if(quiz.length === quizNum) {
            clearInterval(scoreEl);
            inptInt();
        }
        else {
            renderQuestion();
        }
    }
    else {
        secondsLeft = secondsLeft - 15;
        footerEl.textContent = "Wrong";
        
        if(quiz.length === quizNum) {
            clearInterval(scoreEl);
            inptInt();
        }
        else {
            renderQuestion(); 
        }
    }
}

// Function for the Input of initials and eisplaying the score
function inptInt(){
    
    // Clear quiz from veiewing area
    divQuestion.textContent = " ";

    // Create form
    viewing.appendChild(formEl);
    formEl.setAttribute("class", "veiwing");
    
    // Create first text on the form
    formEl.appendChild(formP1El);
    formP1El.textContent = "All DONE";
    formP1El.setAttribute("class", "msg");
        
    // Create the sencod msg with the score on the form
    formEl.appendChild(formP2El)
    formP2El.textContent = "Your final score is: " + score;
    formP2El.setAttribute("class", "score");
    
    // Create label and input
    formEl.appendChild(labelEl);
    labelEl.textContent = "Initials: ";
    labelEl.setAttribute("class", "label")
    formEl.appendChild(inputEl);
    inputEl.setAttribute("placeholder", "Enter your initials here.");
    inputEl.setAttribute("class", "formInpt");

    // Create submit button
    labelEl.appendChild(submitEl);
    submitEl.setAttribute("class", "submitBtn");
    submitEl.textContent = "Submit";
}

// Loads High Scores and starts the quiz
init();


// Starts the fucntion for the quiz when the start button is clicked
start.addEventListener("click", function(event) {
    secondsLeft = 75;
    listEl.textContent = "";
    viewing.appendChild(listEl);
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
        // Resets to a blank list
        listEl.textContent = "";
        viewing.appendChild(listEl);
        correctAnswer = true;
        console.log(correctAnswer);
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

// Checks if the submit button is pressed for the input initials screen
submitEl.addEventListener("click", function(event) {
    var subElement = event.target;
    event.preventDefault();
    console.log(subElement);

    if(subElement.matches("button") === true) {
    
        renderHighScoreList ()

    }
})


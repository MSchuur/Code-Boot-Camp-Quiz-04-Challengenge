var body = document.querySelector(".container");
var viewing = document.querySelector(".viewing");
var timerEl = document.querySelector(".timer");
var scoreEl = document.getElementById("time");
var footerEl = document.getElementById("ansDisplay");
var start = document.querySelector(".startB");
var highScoreDivEl = document.querySelector(".high-score");
var highScoreListEl = document.querySelector(".hslist");
var highScoreLiEl = document.querySelector("#highscore");


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
var initials;
var highScoreEl = document.createElement("li");
var hsTitleEl = document.createElement("h1");
var hsTextEl = document.createElement("h4");
var clearBtnEl = document.createElement("button");
var goBackBtnEl = document.createElement("button");


var quizNum = 0;
var correctAnswer;
var secondsLeft = 75;
var score;
var highScore = [];
var storedHighScore = 0;
var initials;
var delayTime = 2;


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
    
    scoreEl = setInterval(function() {
        
        secondsLeft--;
        timerEl.textContent = "Timer: " + secondsLeft;
        score = secondsLeft;
        timerEl.setAttribute("style", "font-size: 1.1em; font-weight: bold");
        
        if(secondsLeft === 0) {
            clearInterval(scoreEl);
            divQuestion.textContent = "";
            listEl.textContent = "";
            footerEl.textContent = "";
            inptInt();  
        }
    }, 1000);
}

// Function to renderthe question and answers
function renderQuestion() {
    
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
    footerEl.setAttribute("class", "footer");
    
    if(correctAnswer === true) {
        correctAnswer = false;
        footerEl.textContent = "Correct";
                
        if(quiz.length === quizNum) {
            clearInterval(scoreEl);
            divQuestion.textContent = "";
            listEl.textContent = "";
            footerEl.textContent = "";
            inptInt();
        }
        // Delays going to the next question to see if the answer is correct
        else {
            setTimeout(function() {
                divQuestion.textContent = "";
                listEl.textContent = "";
                footerEl.textContent = "";
                renderQuestion();         
            }, 750);
        }
    }
    else {
        secondsLeft = secondsLeft - 15;
        footerEl.textContent = "Wrong";
                
        if(quiz.length === quizNum) {
            clearInterval(scoreEl);
            divQuestion.textContent = "";
            listEl.textContent = "";
            footerEl.textContent = "";
            inptInt();
        }
        // Delays going to the next question to see if the answer is correct
        else {
            setTimeout(function() {
                divQuestion.textContent = "";
                listEl.textContent = "";
                footerEl.textContent = "";
                renderQuestion();         
            }, 750);
            
        }
    }
}

// Function for the Input of initials and eisplaying the score
function inptInt(){
    
    // Clear quiz from veiewing area
    divQuestion.textContent = " ";
    footerEl.textContent = " ";

    // Create form
    viewing.appendChild(formEl);
    formEl.setAttribute("class", "form");
    
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
    inputEl.setAttribute("text", "int-text.");
    inputEl.setAttribute("class", "formInpt");

    // Create submit button
    viewing.appendChild(submitEl);
    submitEl.setAttribute("class", "submitBtn");
    submitEl.textContent = "Submit";
}

function highScoreList () {
    
    
    // Clear viewing area
    viewing.textContent = "";
    
    // Create High Score Screen Title
    viewing.appendChild(hsTitleEl);
    hsTitleEl.getAttribute("class", "hsh1");
    hsTitleEl.textContent = "High Scores";

    // Compare High Score and store top High Score
    
    var lastHighScore = localStorage.getItem("HighScore", score);
    
    // Check to see if a High Score is stored
    if (lastHighScore === null) {
        lastHighScore = 0;
    }

    // Displays and stores if High score is beaten
    if (lastHighScore < score) {
        localStorage.setItem("HighScore", score);
        viewing.appendChild(hsTextEl);
        hsTextEl.textContent = "Congrats!!! " + initials + " You now have the High Score: " + score;
    }
    // Condolence msg if High Score is not beaten
    else {
        viewing.appendChild(hsTextEl);
        hsTextEl.textContent = "Sorry!!! " + initials + " You did not beat the High Score of: " + lastHighScore;
    }

    // Create Go Back Button
    viewing.appendChild(goBackBtnEl);
    goBackBtnEl.getAttribute("class", "goBackBtn");
    goBackBtnEl.textContent = "Go Back";
        
    // Create Clear High Score button
    
    viewing.appendChild(clearBtnEl);
    clearBtnEl.getAttribute("class", "clearbtn");
    clearBtnEl.textContent = "Clear High Score";

    
    
    // // Create High Score Text
    // viewing.appendChild(hsP1El);
    // hsTextEl.getAttribute("class", "hsp");
    // hsTextEl.textContent = initials + "   " + score;
    
    

    // // var li =document.createElement("li");
    // highScoreEl.textContent = hsTextEl.textContent;
    // body.appendChild(highScoreDivEl);
    // highScoreDivEl.appendChild(highScoreListEl);
    // highScoreListEl.appendChild(highScoreLiEl);    
}
    




    
    
    
// Loads High Scores and starts the quiz

// Starts the fucntion for the quiz when the start button is clicked
start.addEventListener("click", function(event) {
    
    event.preventDefault();
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

    event.preventDefault();
    var element = event.target;
    var elementText = event.target.innerText;
    
    if(element.matches("li") && elementText === quiz[quizNum].answer) {
        
        quizNum ++;
        viewing.appendChild(listEl);
        correctAnswer = true;
        checkAnswer();
    }
    else if (element.matches("li") && elementText !== quiz[quizNum].answer) {
        
        quizNum ++;
        viewing.appendChild(listEl);
        
        checkAnswer();
    }
});

// Checks if the submit button is pressed for the input initials screen
submitEl.addEventListener("click", function(event) {
    var subElement = event.target;
    event.preventDefault();
    
    if(subElement.matches("button") === true) {
        initials = inputEl.value.trim();
        initials = initials.toUpperCase();
        highScoreList ();

    }
})
// Checks if the enter key is pressed for the input initials screen
inputEl.addEventListener("submit", function(event) {
    var keyPress = event.target;
    if (keyPress === "Enter") {
        event.preventDefault();
    } 
})

goBackBtnEl.addEventListener("click", function(event) {
    var backElement = event.target;
    event.preventDefault();
    
    if(backElement.matches("button") === true) {
        console.log(backElement);
        window.location.reload();
    }
})

clearBtnEl.addEventListener("click", function(event) {
    var backElement = event.target;
    event.preventDefault();
    
    if(backElement.matches("button") === true) {
        score = "";
        localStorage.setItem("HighScore", score);
    }
})
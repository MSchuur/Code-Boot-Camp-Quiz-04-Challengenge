var body = document.querySelector(".viewing");
var divQuestion = document.createElement("div")
var olEl = document.createElement("ol");
var liEl = document.createElement("li");

var start = document.querySelector(".sButton");

var question1 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Thrid Answer", "Fourth Answer", 0];
var question2 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Thrid Answer", "Fourth Answer", 0];
var question3 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Thrid Answer", "Fourth Answer", 0];
var question4 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Thrid Answer", "Fourth Answer", 0];
var question5 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Thrid Answer", "Fourth Answer", 0];
var question6 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Thrid Answer", "Fourth Answer", 0];
var questions = [question1, question2, question3, question4, question5, question6]    

// Function to remove the start screen on the click of the Start Quiz Button
function startQuiz(event) {
    var startElButton = document.getElementById("startButton");
    startElButton.remove();
    console.log("Pressed");
}

// Function to add element for the questions
function quizQuestions() {
    divQuestion.textContent = questions[0][0];
    body.appendChild(divQuestion);
}

// Starts the fucntion for the quiz event listener
start.addEventListener("click", function(event) {
    startQuiz();
    quizQuestions();
    console.log(divQuestion);;
});

// article.appendChild(divQuestion);
console.log(divQuestion);

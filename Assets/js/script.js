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
    var startEl = document.getElementById("viewing-area");
    var startElButton = document.getElementById("startButton");
    startEl.remove();
    startElButton.remove();
    console.log("Pressed");
}

// Starts the fucntion for the quiz event listener
start.addEventListener("click", startQuiz);
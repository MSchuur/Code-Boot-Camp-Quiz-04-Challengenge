var viewing = document.querySelector(".viewing");
// Creating Element to place the Quiz Question
var divQuestion = document.createElement("div")
// Creating Element for the ordered list for answers
var listEl = document.createElement("ol");
// Creating Element each answer in list item
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var start = document.querySelector(".startB");
// var answer = docunemt.querySelector("li");

var question1 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Third Answer", "Fourth Answer", 0];
var question2 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Third Answer", "Fourth Answer", 0];
var question3 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Third Answer", "Fourth Answer", 0];
var question4 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Third Answer", "Fourth Answer", 0];
var question5 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Third Answer", "Fourth Answer", 0];
var question6 = ["Insert the first Question 1 here?", "First Answer", "Second Answer", "Third Answer", "Fourth Answer", 0];
var questions = [question1, question2, question3, question4, question5, question6]    

// Function to remove the start screen on the click of the Start Quiz Button
function startQuiz(event) {
    var startElButton = document.getElementById("startButton");
    var headingEl = document.getElementById("heading");
    startElButton.remove();
    console.log("Pressed");
}

// Function to add element for the questions
function quizQuestions() {
    // Inserting the text from the Array Questions
    divQuestion.textContent = questions[0][0];
    li1.textContent = questions[0][1];
    li2.textContent = questions[0][2];
    li3.textContent = questions[0][3];
    li4.textContent = questions[0][4];
    viewing.appendChild(divQuestion);
    viewing.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
}

// Starts the fucntion for the quiz event listener
start.addEventListener("click", function(event) {
    startQuiz();
    quizQuestions();
    console.log(divQuestion);;
});





var body =document.querySelector(".container");
var viewing = document.querySelector(".viewing");
// Creating Element to place the Quiz Question
var divQuestion = document.createElement("div")
// Creating Element for the ordered list for answers
var listEl = document.createElement("ul");
// Creating Element each answer in list item
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var questNum = 0;
// Variable to select the proper elements to change
var footer = document.querySelector("ansDisplay")
var next = document.querySelector("ul");
var start = document.querySelector(".startB");
var correctAns;

// Questions and answers for the quiz
var question = [
    {
        quest: "Which of the following <tags> requires a closing </tag>?",
        ans: [
            "<br>", "<p>", "<img>", "<meta>"
        ],
        ansNum: "<p>"
    },
    {
        quest: "Which of the following is a text-decortation",
        ans: [
            "30px", "color", "bold", "underline"
        ],
        ansNum: 3 
    },
    {
        quest: "CSS is the acroynm for?",
        ans: [
            "Cassading Style Sheet", "Computer Style Sheet", "Colorful Style Sheet", "Common Style Sheet"
        ],
        ansNum: 0
    },
    {
        quest: "What Java Script command do you use to add an elemet to a parent?",
        ans: [
            ".remove", ".getElement", "uppendChild", "createElement"
        ],
        ansNum: 2
    },
    {
        quest: "What is the extension for a Jave Script file?",
        ans: [
            ".doc", ".html", ".css", "<.js>"
        ],
        ansNum: 3
    }
]

function startQuiz(event) {
    var startElButton = document.getElementById("startButton");
    var headingEl = document.getElementById("heading");
    startElButton.remove();
    console.log("Pressed");
}

// Function to add element for the questions
function quizQuestions() {
    // Inserting the text from the Array Questions
    var i = questNum;
    divQuestion.textContent = question[i].quest;
    li1.textContent = question[i].ans[0];
    li2.textContent = question[i].ans[1];
    li3.textContent = question[i].ans[2];
    li4.textContent = question[i].ans[3];
    correctAns = question[i].ansNum;
    
    viewing.appendChild(divQuestion);
    viewing.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    li1.onclick = () =>{
        if(li1 === correctAns) {
            footer.textContent = "Correct";
            body.appendChild(footer);
            i ++;
        }
        
        else {
            console.log(false);
            questNum ++;
            console.log(questNum);
            quizQuestions();

        }
        
    }
    // }
    

    
    
}

// Starts the fucntion for the quiz event listener
start.addEventListener("click", function(event) {
    startQuiz();
    quizQuestions();
});
    // Start timer
listEl.addEventListener("click", function(event) {
    
    questNum ++;
    quizQuestions();
    console.log(questNum);
    
})
    
    

    console.log(divQuestion);
    




// 



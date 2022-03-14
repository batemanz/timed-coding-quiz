var startBtn = document.querySelector("#startQuiz");
var qContainer = document.querySelector("#quizContainer")
var questionAsked = document.querySelector("#question")
var optone = document.querySelector("#opt1");
var opttwo = document.querySelector("#opt2");
var optthree = document.querySelector("#opt3");
var optfour = document.querySelector("#opt4");
var endGame = document.querySelector("#endGame");

// basic setup for timer
//
//
// Selects element by class
var timerEl = document.querySelector("#timer");
// Selects element by id
// var mainEl = document.getElementById("main");

function setTime() {
    var secondsLeft = 10;
  // Sets interval in variable
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}
// Function
function sendMessage() {
  timerEl.textContent = " Game Over!";
}

//button that initiates the timer
startBtn.addEventListener("click", function() {
    setTime();
});

//logs information from the form
var form = document.querySelector("form");
var log = document.querySelector("#log");
//event listener to log info from form once button is clicked
form.addEventListener("submit", function(event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
        output = output + entry[0] + "=" + entry[1] + "\r";
    };
    log.innerText = output;
    event.preventDefault();
}, false);

// questions, choices and answers objects and arrays
var quiz = [
    {
    question: "Question numero uno",
    choices: [
        "A: choice a",
        "B: choice b",
        "C: choice c",
        "D: choice d"
    ],
    answer: "B: choice b"
},
{
    question: "Question numero dos",
    choices: [
        "A: choice 1",
        "B: choice 2",
        "C: choice 3",
        "D: choice 4"
    ],
    answer: "C: choice 3"
},
{
    question: "Question numero tres",
    choices: [
        "A: choice a",
        "B: choice b",
        "C: choice c",
        "D: choice d"
    ],
    answer: "A: choice a"
},
{
    question: "Question numero quatro",
    choices: [
        "A: choice 1",
        "B: choice 2",
        "C: choice 3",
        "D: choice 4"
    ],
    answer: "D: choice 4"
}
]
var startBtn = document.querySelector("#startQuiz");
var qContainer = document.querySelector("#quizContainer");
var questionAsked = document.querySelector("#question");
var optOne = document.querySelector("#opt1");
var opttwo = document.querySelector("#opt2");
var optthree = document.querySelector("#opt3");
var optfour = document.querySelector("#opt4");
var endGame = document.querySelector("#endgame");
var viewHighScore = document.querySelector("#viewHigh");
var timePointEl = document.querySelector("#timePoint");
var introEl = document.querySelector("#intro");
var pointsEl = document.querySelector("#points");
var formEl = document.querySelector("#form");
var timerEl = document.querySelector("#timer");
var correctWrong = document.querySelector("#yesNo");
var initialsEl = document.querySelector("#initials");
var highScoreBtn = document.querySelector("#submitScore");
var scoreListEl = document.querySelector("#scoreList");
var timerInterval;
var quizChoices;
var secondsLeft = 10;
let index = 0;
var point = 0;

// sets a number of things to display none so they are not visible untill we are ready for them
scoreListEl.style.display = "none";
timePointEl.style.display = "none";
qContainer.style.display = "none";
endGame.style.display = "none";

// questions, choices and answers objects and arrays
var quiz = [
  {
    question: "Question numero uno",
    choices: ["A: choice a", "B: choice b", "C: choice c", "D: choice d"],
    answer: "B: choice b",
  },
  {
    question: "Question numero dos",
    choices: ["A: choice 1", "B: choice 2", "C: choice 3", "D: choice 4"],
    answer: "C: choice 3",
  },
  {
    question: "Question numero tres",
    choices: ["A: choice a", "B: choice b", "C: choice c", "D: choice d"],
    answer: "A: choice a",
  },
  {
    question: "Question numero quatro",
    choices: ["A: choice 1", "B: choice 2", "C: choice 3", "D: choice 4"],
    answer: "D: choice 4",
  },
];

// function that runs the timer
function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds.";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

      qContainer.style.display = "none";
      endGame.style.display = "block";
      startBtn.style.display = "block";
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

// Function to stop the game
function sendMessage() {
  timerEl.textContent = " Game Over!";
  timerEl.style.color = "orangered";
  var finalScore = initialsEl.value.trim();

  var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  
  var newScore = {
    score: point,
    initials: finalScore
  }

  highScores.push(newScore)
  window.localStorage.setItem("highScores", JSON.stringify(highScores))
  console.log(highScores)
}

// checks if choice is correct, shows txt of correct or wrong. also adds points if you are right or takes away time from clock if you are wrong
function validateAnswer() {
  console.log("Button clicked is " + this.textContent);
  var submission = this.textContent;
  var correctAnswer = quiz[index].answer;
  var subtractTime;
  console.log("correctAnswer is " + correctAnswer);

  // check for a right or wrong answer
  if (submission === correctAnswer) {
    //alert message right answ
    correctWrong.textContent = "Correct! Points Earned";
    point = point += 4;
    pointsEl.textContent = point;
    correctWrong.style.color = "orange";
    //add score
  } else {
    //alert for wrong answer
    correctWrong.textContent = "Incorrect! Time Penalty";
    if (secondsLeft >= 4){
    subtractTime = secondsLeft -= 3;
    } //time penality

    timerEl.textContent = subtractTime;
    correctWrong.style.color = "orangered";
    
  }
  //move to the next question
  index = index + 1;

  //we run out of questions then alert and stop the clock
  if (index === quiz.length) {
    endGame.style.display = "block";
    qContainer.style.display = "none";
    startBtn.style.display = "block";
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    sendMessage();
  } else {
    displayQA();
  }
}

// displays the quiz including questions and choices
function displayQA() {
  questionAsked.textContent = quiz[index].question;
  quizChoices = quiz[index].choices;
  console.log(quizChoices);

  //set value to the buttons
  optOne.textContent = quiz[index].choices[0];
  opttwo.textContent = quiz[index].choices[1];
  optthree.textContent = quiz[index].choices[2];
  optfour.textContent = quiz[index].choices[3];
}

// function that allows you to pull up the high scores
// if else statement checks to see whate state its in and switches it to make it visible or not
function displayHighScore() {
  if (scoreListEl.style.display == "none") {
    scoreListEl.style.display = "block";
  }else {
  scoreListEl.style.display = "none";
  }
}

// **************** EVENT LISTENERS HERE ***********************

//button that initiates the timer and starts the quiz
startBtn.addEventListener("click", function () {
  setTime();
  qContainer.style.display = "block";
  timePointEl.style.display = "block";
  startBtn.style.display = "none";
  endGame.style.display = "none";
  introEl.style.display = "none";
  
  displayQA();
});

//Event listeners
highScoreBtn.addEventListener("click", sendMessage);
viewHighScore.addEventListener("click", displayHighScore);

optOne.addEventListener("click", validateAnswer);
opttwo.addEventListener("click", validateAnswer);
optthree.addEventListener("click", validateAnswer);
optfour.addEventListener("click", validateAnswer);

// the magical for loop thats itterating through the quiz index and choices to array length
for (let i = 0; i < quiz[index].choices.length; i++) {

}

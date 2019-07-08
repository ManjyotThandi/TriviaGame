// var questions = ["Who are the champs?", "Who is the MVP?"]
// var questionOne = ["Raptors", "Lakers", "Warriors"]
var questionTwo = ["Curry", "Lebron", "Harden", "Giannis"]

var right = "Correct!"
var wrong = "Incorrect!"
var questionIndex = 0
var score = 0
var counter = 30

var questions = [
    {q: "Who are the Champs?", a: "Raptors", o: ["Raptors", "Warriors"]},
    {q: "Who is the MVP?", a: "Harden", o: ["Curry", "LeBron", "Giannis"]}
]

// Set the countdown timer
var timeStart = 
// display the question
function displayQuestion () {
   if(questionIndex < questions.length){
       $("#question").text(questions[questionIndex].q);
   }
}

// display possible answers
function displayAnswers () {
    for(i=0; i < questions[questionIndex].o.length ; i++) {
    var possibleAnswer = $("<li>")
    possibleAnswer.attr("id", questions[questionIndex].o[i])
    possibleAnswer.text(questions[questionIndex].o[i])
    $("#answers").append(possibleAnswer)
}
}

// display score
function displayScore() {
    $("#score").text("Score:" + score)
}

// add in all values to empty tags

function fillHTML() {
    $("#gameName").text("NBA Trivia Game")
    $("#timeLeft").text("Time Remaning:" + counter)
    $("#questionHeader").text("Question")
}

// counter for the timer
function timer() {
setInterval(function(){
    counter = counter - 1
    $("#timeLeft").text("Time Remaning:" + counter)
},1000)
}

// once you click on start display all HTML details

function startClick() {
    document.getElementById("start").onclick = function() {
        fillHTML()
        displayQuestion ()
        displayAnswers ()
        displayScore ()
        
    }
}


// Once you click on correct answer, display this screen for three seconds
function correctanswer() {
    $("#screen").hide()
    $("#correctAnswer").remove()
    var winner = $("<h1>")
    winner.attr("id","correctAnswer")
    winner.text("CORRECT!")
    $("#body").append(winner)
    setTimeout(function(){
    $("#screen").show()
    $("#correctAnswer").text("")
    },3000)
}

// If you click on incorrect answer, display this for three seconds
function incorrectAnswer() {
    $("#screen").hide()
    $("#correctAnswer").remove()
    var winner = $("<h1>")
    winner.attr("id","correctAnswer")
    winner.text("INCORRECT!")
    $("#body").append(winner)
    setTimeout(function(){
    $("#screen").show()
    $("#correctAnswer").text("")
    },3000)
}
//-------------------------------------------MAIN CODE --------------------------------------

startClick()



 document.getElementById("answers").onclick = function(event) {
     var userclick = event.target.id
     console.log(userclick)
     if(userclick === questions[questionIndex].a) {
         score = score + 1
         correctanswer()
         
    }
     else {
        incorrectAnswer()
     }
     displayScore()
     questionIndex = questionIndex + 1
     $("#answers").empty()
     displayQuestion()
     displayAnswers()
    
 }




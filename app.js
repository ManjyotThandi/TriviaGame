// var questions = ["Who are the champs?", "Who is the MVP?"]
// var questionOne = ["Raptors", "Lakers", "Warriors"]
var questionTwo = ["Curry", "Lebron", "Harden", "Giannis"]

var right = "Correct!"
var wrong = "Incorrect!"
var questionIndex = 0
var score = 0
var counter
var myTimer
var incorrect = 0

var questions = [
    {q: "Who are the Champs?", a: "Raptors", o: ["Raptors", "Warriors"]},
    {q: "Who is the MVP?", a: "Giannis", o: ["Curry", "LeBron", "Giannis"]},
    {q: "Finish the Name. Lebron", a: "James", o: ["Curry", "LeBron", "James"]},
    {q: "Finish the Name. Kobe", a: "Bryant", o: ["Curry", "LeBron", "Bryant"]},
    {q: "Finish the Name. Michael", a: "Jordan", o: ["Jordan", "LeBron", "Pietrus"]}
]


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

// display score and incorrect
function displayScore() {
    $("#score").text("Score:" + score)
    $("#incorrect").text("Incorrect:" + incorrect)
}


// add in all values to empty tags

function fillHTML() {
    $("#gameName").text("NBA Trivia Game")
    $("#timeLeft").text("Time Remaning:" + counter)
    $("#questionHeader").text("Question")
}

// counter for the timer
function timer() {
$("timeLeft").text("Time Remaning" + counter)
counter = counter -1
$("#timeLeft").text("Time Remaning:" + counter)
if (counter === 0) {
    outOfTime()


}
}


// clear interval

// once you click on start display all HTML details

function startClick() {
    document.getElementById("start").onclick = function() {
        fillHTML()
        displayQuestion ()
        displayAnswers ()
        displayScore ()
        //timer()
        myTimer = setInterval(timer,1000)
        $("#start").hide()
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

// When timer goes to zero
function outOfTime() {
    clearInterval(myTimer)
    questionIndex = questionIndex + 1
    displayQuestion()
    displayAnswers()
    $("#answers").empty()
     $("#timeLeft").empty()
     // allows for the gap between the three second correct or incorrect screen
     counter = 33
     displayQuestion()
     displayAnswers()
     // gets the timer going again
     myTimer = setInterval(timer,1000)
    $("#screen").hide()
    var noTime = $("<h1>")
    noTime.attr("id", "times")
    noTime.text("YOU RAN OUT OF TIME")
    $("#body").append(noTime)
    setTimeout(function() {
        $("#screen").show()
        $("#times").text("")
    },3000)
    incorrect = incorrect + 1
    displayScore()
}
//-------------------------------------------MAIN CODE --------------------------------------

counter = 30

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
        incorrect = incorrect + 1
     }
     console.log(myTimer)
     clearInterval(myTimer)
     displayScore()
     questionIndex = questionIndex + 1
     $("#answers").empty()
     $("#timeLeft").empty()
     // allows for the gap between the three second correct or incorrect screen
     if(questionIndex < questions.length){
     counter = 33
     displayQuestion()
     displayAnswers()
     // gets the timer going again
     myTimer = setInterval(timer,1000)
     }
     else {
        $("#body").hide()
        var noTime = $("<p>")
        var notright = $("<p>")
        noTime.attr("id", "final")
        noTime.text("Number of correct answers : " + score)
        notright.text("Number of Incorrect Answers : " + incorrect)
        $("#bodyy").append(noTime)
        $("#bodyy").append(notright)
        var playagain = $("<button>")
        playagain.attr("id","playagain")
        playagain.text("Play again")
        $("#bodyy").append(playagain)
        document.getElementById("playagain").onclick = function() {
            location.reload()

           }
        }

     
 }
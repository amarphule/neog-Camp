var readlinesync = require('readline-sync')

var userAnswer = readlinesync.question("What is your name?")

console.log("Welcome " + userAnswer + ", Best luck for Game")

var score = 0
var highScore = {
  name: "Amar",
  score: 10,
}
var questions = [
  {
    question: "What is Capital of India?",
    answer: "Delhi"
  },
  {
    question: "Who is PM of India?",
    answer: "Narendra Modi"
  },
  {
    question: "Which city is called Pink-city?",
    answer:"Jaipur"
  },
  {
    question: "Who is the captain of Indian cricket team?",
    answer:"Virat Kohli"
  },
  {
    question: "Which city is called IT capital of India?",
    answer:"Bengalore"
  }
]

function Play(question, answer){
  var userAns = readlinesync.question(question)
  if(userAns==answer){
    console.log("Right")
    score= score + 2
    console.log(score)
  }else {
    console.log("Wrong")
  }
}

for(var i=0; i<questions.length; i++){
  Play(questions[i].question, questions[i].answer)
}

if(highScore.score > score){
  console.log("Your score is "+ score+ " and Highscore is "+highScore.score)
}

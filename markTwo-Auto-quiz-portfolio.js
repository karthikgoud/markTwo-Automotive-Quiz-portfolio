var readlineSync = require("readline-sync");

// Welcome user message

var userName = readlineSync.question("Enter Username: ");

console.log("Hello "+userName+", Welcome to Auto Quiz 2022");

console.log("All the best...!!!. Let`s begin.");
console.log("--------------------------------");

var score = 0;

// function

function play (question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log("you`re right");
    score = score +1;
  }else{
    console.log("you`re wrong");
    score = score -1;
    console.log("right answer is: "+answer);
  };
  console.log("total score "+score);
  console.log("---------------*******------------");
}

// array

var questions = [{
  question:"Which animal features in logo of Lamborghini? ",
  answer:"bull"
},{
  question:"What is original color of all Ferrari models? ",
  answer:"red"
},{
  question:"How many rings are there is Audi logo? ",
  answer:"four"
},{
  question:"What is the best-selling electric car in history?",
  answer:"tesla"
},{
  question:"What is the oldest car company still in business today",
  answer:"benz"
}]

// loop

for (var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Grand score is : "+score);

// last message
if (score >=4){
    console.log ("Well done");
  }else{
    console.log ("Try again")
  }

// link to play live 

// https://replit.com/@karthikgoud5/markTwo-Auto-Quiz-portfolio?embed=1&output=1

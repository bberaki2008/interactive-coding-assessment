// Selects element by id
let timerEl = document.getElementById("timer");
let scoreEl = document.getElementById("score");
let headerEl = document.getElementById("header");
let paraEl = document.getElementById("para");
let listChoiceEl = document.getElementById("listChoices");
let listEl ="";
let correctAnswers = 0;
let wrongAnswers = 0;
let secondsLeft = 75;

function setTime() {
   // Sets interval in variable
   let timerInterval = setInterval(function() {
    timerEl.textContent = secondsLeft;
    secondsLeft--;
    if(secondsLeft === 0){
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      timerEl.textContent = 0;
    }
   }, 1000)
}

let btnEl = document.getElementById("startQuize");
btnEl.addEventListener("click", function(event){
    paraEl.remove();
    btnEl.remove();
    setTime();
    // let text = event.target;
    // console.log(text.textContent);
    for(let i =0; i < quizQuest.length; i++) {
//  calls fuction to create the question with the choice lists
        getQuestion(i);
    }
}); 

// Fuction to create the question with their corresponding choices
function getQuestion(index){
    headerEl.classList.add("questions");
    listChoiceEl.setAttribute("style", "justify-content: left")
    let node;
    let count = 0;
    headerEl.textContent = quizQuest[index].question;
    for (let property in quizQuest[index].choices) {
      count++;
        listEl = document.createElement("a");
        node = document.createTextNode(count + ". " + quizQuest[index].choices[property]);
        listEl.appendChild(node);
        listChoiceEl.appendChild(listEl);
        listEl.classList.add("btn-choice");
        listEl.setAttribute("href", "#");
    }
    // calls a function to create a correct or wrong message after the user selects choices
    answerStatement("wrong");
}

// Function to create a message "wrong" or "Correct" and creates a horizontal line
function answerStatement(answer) {
  let para = document.createElement("p");
  let node = document.createTextNode( answer +"!")
  listChoiceEl.appendChild(document.createElement("hr"));
  para.appendChild(node)
  listChoiceEl.appendChild(para);
  para.setAttribute("id", "ansStatement");
}

// creates an object of quizesQuest which holds an array of  objects and the objects hold string and arrays
let quizQuest = [
    { question:'Commonly used data types DO Not Include:', 
      choices: ['strings', 'booleans', 'alerts', 'numbers'], 
      answer: "c"
    },
    { question:'The condition in an if / else statement is enclosed with _________', 
      choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'], 
      answer: "c"
    },
    { question:'Arrays in JavaScript can be used to store _________',
      choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      answer: "d"
    },
    { question:'String values must be enclosed within ________ when being assigned to variables.', 
      choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'], 
      answer: "c"},
    { question:'A very useful tool used during development and debugging for printing content to the debugger is:', 
      choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
      answer:"d"}
    ];

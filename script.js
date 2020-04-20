var counter = document.querySelector("#counter");
var elQuestion = document.querySelector("#question");
var option1 = document.querySelector("#option-1");
var option2 = document.querySelector("#option-2");
var option3 = document.querySelector("#option-3");
var option4 = document.querySelector("#option-4");
var timer = document.querySelector("#timer");
var highest = document.querySelector("#highest");
var back = document.querySelector("#back");

var score = 0;
var totalSeconds = 10;
var question = 1;
var going = true;
var highscore;
if (localStorage.getItem("highscore") === null) {
    highscore = 0;
}
else{
    highscore = localStorage.getItem("highscore");
}
var temp = 0;
back.style.visibility = "hidden";

function countdown(){
  if(totalSeconds > 0){
    highest.style.visibility = "hidden";
    questions();
    timer.textContent = "Seconds Left: " + totalSeconds + "s";
    totalSeconds--;
  }
  else if(totalSeconds === 0){
    option1.remove();
    option2.remove();
    option3.remove();
    option4.remove();
    elQuestion.remove();
    counter.textContent = "All Done Good Job, Your Final Score Was: " + score;
    highest.textContent = "Previous High Score Was: " + highscore;
    highest.style.visibility = "visible";  
    back.style.visibility = "visible";   


    if(score > highscore){
        localStorage.setItem("highscore", score);
    }

    totalSeconds--;
  }    
}

function correct(){
    question++;
    score+=10;
}

function wrong(){
    score--;
    totalSeconds-=3;
}

function setQuestion(){
    counter.textContent = "Question " + question;
}

function questions(){

    if(question === 1 || question === 5){
        option2.removeEventListener("click", wrong);
        option2.addEventListener("click", correct);
    }
    else{
        option2.removeEventListener("click", correct);
        option2.addEventListener("click", wrong);
    }

    if(question === 2){
        option1.removeEventListener("click", wrong);
        option1.addEventListener("click", correct);
    }
    else{
        option1.removeEventListener("click", correct);
        option1.addEventListener("click", wrong);
    }

    if(question === 3){
        option3.removeEventListener("click", wrong);
        option3.addEventListener("click", correct);
    }
    else{
        option3.removeEventListener("click", correct);
        option3.addEventListener("click", wrong);
    }

    if(question === 4){
        option4.removeEventListener("click", wrong);
        option4.addEventListener("click", correct);
    }
    else{
        option4.removeEventListener("click", correct);
        option4.addEventListener("click", wrong);
    }

    if(question === 1){
        score = 0;
        setQuestion();
        elQuestion.textContent = "Which of these shapes has four sides?"
        option1.textContent = "Triangle"        
        option2.textContent = "Square"               
        option3.textContent = "Octagon"
        option4.textContent = "Circle"
    }

    else if(question === 2){
        setQuestion();
        elQuestion.textContent = "Which group is Iron Man part of?"
        option1.textContent = "Avengers"
        option2.textContent = "Jedi"
        option3.textContent = "Justice League"
        option4.textContent = "X-Men"
    }

    else if(question === 3){
        setQuestion();
        elQuestion.textContent = "Which one isn't a bird?"
        option1.textContent = "Goose"
        option2.textContent = "Duck"
        option3.textContent = "Rottweiler"
        option4.textContent = "Pigeon"
    }

    else if(question === 4){
        setQuestion();
        elQuestion.textContent = "Which of these car brands isn't Japanese?"
        option1.textContent = "Toyota"
        option2.textContent = "Honda"
        option3.textContent = "Nissan"
        option4.textContent = "Hyundai"
    }

    else if(question === 5){
        setQuestion();
        elQuestion.textContent = "Which isn't a front end programming language?"
        option1.textContent = "HTML"
        option2.textContent = "PHP"
        option3.textContent = "CSS"
        option4.textContent = "Java Script"
    }

    else{
        option1.remove();
        option2.remove();
        option3.remove();
        option4.remove();
        elQuestion.remove();
        counter.textContent = "All Done Good Job, Your Final Score Was: " + score;

        highest.textContent = "Previous High Score Was: " + highscore;
        highest.style.visibility = "visible";   
        back.style.visibility = "visible";  

        if(score > highscore){
            localStorage.setItem("highscore", score);
        }

        totalSeconds--;
    }   
    
}

function startTimer(){  
  setInterval(function(){ countdown() }, 1000);  
}

startTimer();





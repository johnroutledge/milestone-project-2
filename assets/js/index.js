 let currentScore = 0;
 let highScore;
 let actionWord = ["Pop","Bang","Boing"];
 let direction = Boolean;
 
 let clickedCircle;
 let nextCircle;

 
function startGame() {
    let clickedCircle;
    direction = true;
    currentCircle = 1;

    selectAction();
    
    getClickedCircle();
        
    calculateCorrectCircle();
    checkAnswer();
}

 //credit: Stack Overflow - How to set one minute counter in javascript?
function startTimer() {
    var seconds = 60;
    function tick() {
        var clock = document.getElementById("clock");
        seconds--;
        clock.innerHTML = (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            alert("Time's Up!");
        }
    }
    tick();
    var action = document.getElementById("action");
    action.innerHTML = actionWord[Math.floor(Math.random() * actionWord.length)];
}

//gets the circle player just clicked
function getClickedCircle () {
    var circles = document.getElementsByClassName("outer");
    var circlesCount = circles.length;
    
    for (let i=0; i < circlesCount; i++) {
        circles[i].onclick = function () {
            console.log(i+1);
            clickedCircle = i+1;
        }
    }
}

//gets the current circle and current action word to calculate correct circle
function calculateCorrectCircle() {
    var step;
    var currentAction = document.getElementById("action").innerHTML;
    
    if (currentAction === "Pop") {
        step = +1
    } else if (currentAction === "Bang") {
        step = -1
    } else if (currentAction === "Boing") {
        step = +2
    }

    if (direction) { 
        nextCircle = currentCircle + step; 
    } else { 
        nextCircle = currentCircle - step;
    }

    if (nextCircle === "9") {
        nextCircle = "1"
    } else if (nextCircle === "10") {
        nextCircle = "2"
    } else if (nextCircle === "-1") {
        nextCircle = "8"
    } else if (nextCircle === "-2") {
        nextCircle = "7"
    }
    console.log(nextCircle);
}

function checkAnswer() {
    console.log("clicked circle=" & clickedCircle);
    console.log("next circle=" & nextCircle);
    if (clickedCircle === nextCircle) {
        console.log("correct");
    } else {
        console.log("wrong");
    }
}

// select random action from actionWord array 
function selectAction() {
    var action = document.getElementById("action");
    action.innerHTML = actionWord[Math.floor(Math.random() * actionWord.length)];
}


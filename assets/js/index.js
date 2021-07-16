 let currentScore = 0;
 let highScore = 0;
 let actionWord = ["Pop","Bang","Boing"];
 let direction = Boolean;
 let clickedCircle;

 let nextCircle;

 
function resetGame() {
    document.getElementById("score").innerHTML = 0;
    clickedCircle = 0;
    direction = true;
    currentCircle = 1;
    currentScore = 0;
    startClock();
    playGame();
}

function playGame() {
    selectAction();
    calculateCorrectCircle();

    var circles = document.getElementsByClassName("outer");
    var circlesCount = circles.length;
    
    for (let i=0; i < circlesCount; i++) {
        circles[i].onclick = function () {
            clickedCircle = (i + 1);
            console.log("clicked " + clickedCircle);
            console.log("next " + nextCircle);   
        
            checkAnswer();  
        }
        
    }

      
}


 //credit: Stack Overflow - How to set one minute counter in javascript
function startClock() {
    var seconds = 60;
    function tick() {
        var clock = document.getElementById("clock");
        seconds--;
        clock.innerHTML = (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            alert("Time's Up!");
            endGame();
        }
    }

    tick();
}

//gets the circle player just clicked
function getClickedCircle () {
    var circles = document.getElementsByClassName("outer");
    var circlesCount = circles.length;
    
    for (let i=0; i < circlesCount; i++) {
        circles[i].onclick = function () {
            clickedCircle = (i + 1);
        }
    }
}

//gets the current circle and current action word to calculate correct circle
function calculateCorrectCircle() {
    var step;
    var currentAction = document.getElementById("action").innerHTML;
    console.log("CCC " + currentCircle);
    if (currentAction === "Pop") {
        step = 1;
    } else if (currentAction === "Bang") {
        step = -1;
    } else if (currentAction === "Boing") {
        step = 2;
    }
    

    if (direction) { 
        console.log("direction is true");
        nextCircle = currentCircle + step;
        console.log(nextCircle);
    } else { 
        console.log("direction is false");
        nextCircle = currentCircle - step;
        console.log(nextCircle);
    }

    if (nextCircle === 9) {
        nextCircle = 1;
    } else if (nextCircle === 10) {
        nextCircle = 2;
    } else if (nextCircle === -1) {
        nextCircle = 8;
    } else if (nextCircle === -2) {
        nextCircle = 7;
    } else if (nextCircle === 0) {
        nextCircle = 8;
    }
    
    switch(currentAction) {
        case "Pop":
        direction = direction;
        console.log(direction);
        break;
        case "Boing":
        direction = direction;
        console.log(direction);
        break;
        case "Bang":
        direction = !direction;
        console.log(direction);
        break;
    }

    currentCircle = nextCircle;
}

function checkAnswer() {
    if (clickedCircle === nextCircle) {
        console.log("correct");
        updateScore();
        playGame();
    } else {
        console.log("wrong");
        endGame();
    }
}

// select random action from actionWord array 
function selectAction() {
    var action = actionWord[Math.floor(Math.random() * actionWord.length)];
    document.getElementById("action").innerHTML = action;
    
    
    
}

//enter score update code here
function updateScore() {
    currentScore = currentScore + 1;
    document.getElementById("score").innerHTML = currentScore;
}

//enter end of game code here
function endGame() {
    console.log("game over!");
    updateHighScore();
}

function updateHighScore() {
    highScore = document.getElementById("high-score").innerHTML;
    
    if (currentScore > highScore) {
        //add code to have pop-up high score notification
        document.getElementById("high-score").innerHTML = currentScore;
    }
}

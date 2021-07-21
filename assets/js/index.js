 let currentScore = 0;
 let highScore = 0;
 let actionWord = ["Pop","Bang","Boing"];
 let direction = Boolean;
 let clickedCircle;
 let nextCircle;
 
function resetGame() {
    document.getElementById("score").innerHTML = "Score:00";
    clickedCircle = 0;
    direction = true;
    endGame.called = false;
    currentCircle = 1;
    currentScore = 0;
    // countdown();
    startClock();
    document.getElementById("play-button").classList.add("disabled");
    disableCircles(true);
    
    //this is a bugfix for audio delay when clicking during game play - see README for more
    playAudio("silence");
    playGame();
}

function playGame() {
    // endGame.called = false;
    // startClock();
    disableCircles(false);
    selectAction();
    calculateCorrectCircle();

    var circles = document.getElementsByClassName("outer");
    var circlesCount = circles.length;
    
    for (let i=0; i < circlesCount; i++) {
        circles[i].onclick = function () {
            clickedCircle = (i + 1);
            highlightCurrentCircle();
            checkAnswer();  
        }
    }
}

 //credit: Stack Overflow - How to set one minute counter in javascript
function startClock() {
    var seconds = 10;
    function tick() {
        var clock = document.getElementById("clock");
        seconds--;
        clock.innerHTML = (seconds < 10 ? "0" : "") + String(seconds);
        
        if (endGame.called === true) {
             seconds = 0;
            //  endGame();
        }        

        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            endGame();
        }
    }

    tick();
}

function countdown() {
    var seconds = 4;
    function tick() {
        var countdown = document.getElementById("action");
        seconds--;
        countdown.innerHTML = String(seconds);

        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            countdown.innerHTML = "Go!";
        }
    }

    tick();
}



//gets the circle player just clicked - currently sitting in playGame function
// function getClickedCircle () {
//     var circles = document.getElementsByClassName("outer");
//     var circlesCount = circles.length;
    
//     for (let i=0; i < circlesCount; i++) {
//         circles[i].onclick = function () {
//             clickedCircle = (i + 1);
//             console.log("hey");
//             highlightCurrentCircle();
//         }
//     }
// }

//highlights the current circle so player knows where they are
function highlightCurrentCircle() {
    var circles = document.getElementsByClassName("outer");
    var circlesCount = circles.length;
    
    playAudio("click");

    for (let i=0; i < circlesCount; i++) {
        if (i === clickedCircle -1) {
            document.getElementById(i+1).classList.add("highlighted");
        } else {
            document.getElementById(i+1).classList.remove("highlighted");
        }
    }
}


//gets the current circle and current action word to calculate correct circle
function calculateCorrectCircle() {
    var step;
    var currentAction = document.getElementById("action").innerHTML;
    if (currentAction === "Pop") {
        step = 1;
    } else if (currentAction === "Bang") {
        step = -1;
    } else if (currentAction === "Boing") {
        step = 2;
    }
    

    if (direction) { 
        nextCircle = currentCircle + step;
    } else { 
        nextCircle = currentCircle - step;
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
        break;
        case "Boing":
        direction = direction;
        break;
        case "Bang":
        direction = !direction;
        break;
    }

    currentCircle = nextCircle;
}

function checkAnswer() {
    if (clickedCircle === nextCircle) {
        updateScore();
        playGame();
    } else {
        playAudio("wrong");
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
    var score = document.getElementById("score");

    currentScore = currentScore + 1;
    score.innerHTML = "Score:" + (currentScore < 10 ? "0" : "") + String(currentScore);
}

//enter end of game code here
function endGame() {
    endGame.called = true;
    disableCircles(true);
    document.getElementById("action").innerHTML = "Game Over";
    document.getElementById("play-button").classList.remove("disabled");
    document.getElementById("clock").innerHTML = "00";
    resetCircles();
    updateHighScore();
}

//play selected sound
function playAudio(soundName) {
    let sound = document.getElementById("audio");
    let src = "assets/audio/" + soundName + ".wav"; 
    sound.src = src;
    sound.play();
}

function resetCircles() {
    var circles = document.getElementsByClassName("outer");
    var circlesCount = circles.length;
   
    for (let i=0; i < circlesCount; i++) {
         if (i===0) {
            document.getElementById(i+1).classList.add("highlighted");
         } else {
            document.getElementById(i+1).classList.remove("highlighted");
         }
     } 
}

function disableCircles(onOff) {
    var circles = document.getElementsByClassName("outer");
    var circlesCount = circles.length;
   
    for (let i=0; i < circlesCount; i++) {
         if (onOff) {
            document.getElementById(i+1).classList.add("disabled");
         } else {
            document.getElementById(i+1).classList.remove("disabled");
         }
     } 
}

function updateHighScore() {
    highScore = document.getElementById("high-score").innerHTML.slice(-2);
    
    if (currentScore > highScore) {
        //add code to have pop-up high score notification
        if (currentScore < 10) {
            currentScore = "0" + String(currentScore);
        }
        document.getElementById("high-score").innerHTML = "High:" + currentScore;
        playAudio("highscore");
        document.getElementById("action").innerHTML = "New High!";
    }
}

function loadInstructionsModal() {
    $('#instructionsModal').modal('show');
}

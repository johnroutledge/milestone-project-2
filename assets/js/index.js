 let currentScore = 0;
 let highScore = 0;
 let actionWord = ['Pop','Bang','Boing'];
 let direction; //true being clockwise and false being anticlockwise
 let clickedCircle;
 let nextCircle;

/**
 * Resets elements in preparation for start of game, disables help and play
 * buttons so they can't be clicked in-play, sets start circle back to top,
 * sets direction to clockwise (true), sets current score to zero, initiates
 * three-second countdown timer to prepare player for start of game.
 */
function resetGame() {
    document.getElementById('help-button').classList.add('disabled');
    document.getElementById('play-button').classList.add('disabled');
    document.getElementById('score').innerHTML = 'Score:00';
    document.getElementById('action').innerHTML = 'Ready?';
    clickedCircle = 0;
    direction = true;
    endGame.called = false;
    currentCircle = 0;
    currentScore = 0;

    //loops four times - three second countdown plus 'Go!' message
    let timeleft = 4;
    let countdownTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(countdownTimer);
            document.getElementById('action').innerHTML = 'Go!';
            startClock();
            disableCircles(true);
            
            //bugfix for audio delay when clicking during game play - see README for details
            playAudio('silence');
            playGame();
        } else if (timeleft === 1) {
             document.getElementById('action').innerHTML = 'Go!';
        } else {
            document.getElementById('action').innerHTML = (timeleft - 1);
        }
        timeleft -= 1;
    }, 1000);
}

//starts the interactive gameplay which lasts for a maximum of thirty seconds
function playGame() {
    disableCircles(false);
    selectAction();
    calculateCorrectCircle();

    //establishes which circle the player just clicked
    var circles = document.getElementsByClassName('outer');
    var circlesCount = circles.length;
    
    for (let i=0; i < circlesCount; i++) {
        circles[i].onclick = function () {
            clickedCircle = i;
            highlightCurrentCircle();
            checkAnswer();  
        }
    }
}

//starts 30 second countdown - credit: Stack Overflow - How to set one minute counter in javascript
function startClock() {
    var seconds = 30;
    function tick() {
        var clock = document.getElementById('clock');
        seconds--;
        clock.innerHTML = (seconds < 10 ? '0' : '') + String(seconds);
        
        if (endGame.called === true) {
             seconds = 0;
        }        

        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            playAudio('times_up');
            endGame();
        }
    }
    tick();
}

//highlights the current circle so player knows where they are
function highlightCurrentCircle() {
    var circles = document.getElementsByClassName('outer');
    var circlesCount = circles.length;
    
    playAudio('click');

    for (let i=0; i < circlesCount; i++) {
        if (i === clickedCircle) {
            document.getElementById(i).classList.add('highlighted');
        } else {
            document.getElementById(i).classList.remove('highlighted');
        }
    }
}

//gets the current circle and current action word to calculate correct circle
function calculateCorrectCircle() {
    var step;
    var currentAction = document.getElementById('action').innerHTML;
    
    if (currentAction === 'Pop') {
        step = 1;
    } else if (currentAction === 'Bang') {
        step = -1;
    } else if (currentAction === 'Boing') {
        step = 2;
    }

    if (direction) { 
        nextCircle = currentCircle + step;
    } else { 
        nextCircle = currentCircle - step;
    }

    if (nextCircle === 8) {
        nextCircle = 0;
    } else if (nextCircle === 9) {
        nextCircle = 1;
    } else if (nextCircle === -2) {
        nextCircle = 6;
    } else if (nextCircle === -1) {
        nextCircle = 7;
    }

    switch(currentAction) {
        case 'Pop':
        direction = direction;
        break;
        case 'Boing':
        direction = direction;
        break;
        case 'Bang':
        direction = !direction;
        break;
    }

    currentCircle = nextCircle;
}

//checks whether player has clicked on the correct circle
function checkAnswer() {
    if (clickedCircle === nextCircle) {
        updateScore();
        playGame();
    } else {
        document.getElementById('action').innerHTML = 'Oops!';
        playAudio('wrong');
        wait(1000);  //1 second in milliseconds
        endGame();
    }
}

//selects random action word from actionWord array 
function selectAction() {
    let actionText = document.getElementById('action');
    var action = actionWord[Math.floor(Math.random() * actionWord.length)];
    actionText.innerHTML = action;
    let randomColor = Math.floor(Math.random() * 360) + 1;
    actionText.style.color = 'hsl(' + randomColor + ',100%,54%)';
}

//increments current game by one score if correct circle clicked
function updateScore() {
    var score = document.getElementById('score');

    currentScore = currentScore + 1;
    score.innerHTML = 'Score:' + (currentScore < 10 ? '0' : '') + String(currentScore);
}

/**
 * Resets elements at end of game, notifies player of end of game, 
 * disables all circle buttons, enables play and help buttons, 
 * resets action word color and game score to zero.
 */
function endGame() {
    endGame.called = true;
    disableCircles(true);
    let actionText = document.getElementById('action');
    actionText.innerHTML = 'Game Over';
    actionText.style.color = 'var(--clr-neon)';
    document.getElementById('help-button').classList.remove('disabled');
    document.getElementById('play-button').classList.remove('disabled');
    document.getElementById('clock').innerHTML = '00';
    resetCircles();
    updateHighScore();
}

//plays selected sound by passing the parameter of soundName which corresponds to audio file 
function playAudio(soundName) {
    let sound = document.getElementById('audio');
    let src = 'assets/audio/' + soundName + '.wav'; 
    sound.src = src;
    sound.play();
}

//clears all circles and highlights the top one ready for new game
function resetCircles() {
    var circles = document.getElementsByClassName('outer');
    var circlesCount = circles.length;
   
    for (let i=0; i < circlesCount; i++) {
         if (i===0) {
            document.getElementById(i).classList.add('highlighted');
         } else {
            document.getElementById(i).classList.remove('highlighted');
         }
     } 
}

//disables or enables circle buttons depending on value of onOff parameter
function disableCircles(onOff) {
    var circles = document.getElementsByClassName('outer');
    var circlesCount = circles.length;
   
    for (let i=0; i < circlesCount; i++) {
         if (onOff) {
            document.getElementById(i).classList.add('disabled');
         } else {
            document.getElementById(i).classList.remove('disabled');
         }
     } 
}

//updates the high score if current game score exceeds current high score
function updateHighScore() {
    highScore = document.getElementById('high-score').innerHTML.slice(-2);
    
    if (currentScore > highScore) {
        if (currentScore < 10) {
            currentScore = '0' + String(currentScore);
        }
        document.getElementById('high-score').innerHTML = 'High:' + currentScore;
        playAudio('highscore');
        document.getElementById('action').innerHTML = 'New High!';
    }
}

function loadInstructionsModal() {
    $('#instructionsModal').modal('show');
}

function hideInstructionsModal() {
    $('#instructionsModal').modal('hide'); 
}

//delays gameplay by duration passed to it as ms parameter 
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
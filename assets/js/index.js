let currentScore = 0;
let highScore = 0;
let actionWord = ['Pop', 'Bang', 'Boing']; //the three game action words
let direction; //true being clockwise and false being anticlockwise
let clickedCircle; //the circle user clicks
let nextCircle; //the correct circle to be clicked

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

    //bugfix for audio delay when clicking during game play - see README for details
    playAudio('silence');
    resetCircles();

    //loops four times to give three second countdown plus 'Go!' message
    let timeleft = 4;
    let countdownTimer = setInterval(function() {
        if (timeleft <= 0) {
            clearInterval(countdownTimer);
            document.getElementById('action').innerHTML = 'Go!';
            startClock();
            disableCircles(true);
            playGame();
        } else if (timeleft === 1) {
            playAudio('high_countdown_pip');
            document.getElementById('action').innerHTML = 'Go!';
        } else {
            playAudio('countdown_pip');
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
    let circles = document.getElementsByClassName('neon-circle');
    let circlesCount = circles.length;

    for (let i = 0; i < circlesCount; i++) {
        circles[i].onclick = function() {
            clickedCircle = i;
            highlightCurrentCircle();
            checkAnswer();
        }
    }
}

//starts 30 second timer - credit: Stack Overflow - How to set one minute counter in javascript
function startClock() {
    let seconds = 30;

    function tick() {
        let clock = document.getElementById('clock');
        seconds--;
        clock.innerHTML = (seconds < 10 ? '0' : '') + String(seconds);

        if (endGame.called === true) {
            seconds = 0;
        }

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (endGame.called === true) { //prevents 'times_up' audio and 'wrong' audio being called together
                endGame();
            } else {
                playAudio('times_up');
                document.getElementById('action').innerHTML = 'Time\'\s Up!';
                endGame();
            }
        }
    }
    tick();
}

//highlights the current circle so player knows where they are
function highlightCurrentCircle() {
    let circles = document.getElementsByClassName('neon-circle');
    let circlesCount = circles.length;

    for (let i = 0; i < circlesCount; i++) {
        if (i === clickedCircle) {
            document.getElementById(i).classList.add('highlighted');
        } else {
            document.getElementById(i).classList.remove('highlighted');
        }
    }
}

//gets the current circle and current action word to calculate correct circle
function calculateCorrectCircle() {
    let step;
    let currentAction = document.getElementById('action').innerHTML;

    if (currentAction === 'Pop') { 
        step = 1; //'pop' moves one circle in same direction
    } else if (currentAction === 'Bang') {
        step = -1; //'bang' moves one circle in opposite direction
    } else if (currentAction === 'Boing') {
        step = 2; //'boing' moves two circles in same direction
    }

    if (direction) {
        nextCircle = currentCircle + step;
    } else {
        nextCircle = currentCircle - step;
    }

    //as there are only 8 circles, numbered 0 to 7, this corrects any numbers outside that range
    if (nextCircle === 8) {
        nextCircle = 0;
    } else if (nextCircle === 9) {
        nextCircle = 1;
    } else if (nextCircle === -2) {
        nextCircle = 6;
    } else if (nextCircle === -1) {
        nextCircle = 7;
    }

    //sets the direction depending on action word - 'bang' is the only one which reverses direction
    switch (currentAction) {
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
        playAudio('click');
        updateScore();
        playGame();
    } else {
        document.getElementById('action').innerHTML = 'Game Over!';
        playAudio('wrong');
        document.getElementById(nextCircle).classList.add('correct-answer'); //indicates the correct circle for the player
        endGame();
    }
}

//selects random action word from actionWord array 
function selectAction() {
    let actionText = document.getElementById('action');
    let action = actionWord[Math.floor(Math.random() * actionWord.length)];
    actionText.innerHTML = action;
    let randomColor = Math.floor(Math.random() * 360) + 1;
    actionText.style.color = 'hsl(' + randomColor + ',100%,54%)';
}

//increments current game score by one if correct circle is clicked
function updateScore() {
    let score = document.getElementById('score');

    currentScore = currentScore + 1;
    score.innerHTML = 'Score:' + (currentScore < 10 ? '0' : '') + String(currentScore);
}

/**
 * Resets elements at end of game, notifies player of end of game, 
 * disables all circle buttons, enables play and help buttons, 
 * resets action word color and game score to zero.
 */
function endGame() {
    let actionText = document.getElementById('action');
    endGame.called = true;

    disableCircles(true);

    actionText.style.color = 'var(--clr-neon)';
    document.getElementById('help-button').classList.remove('disabled');
    document.getElementById('play-button').classList.remove('disabled');
    document.getElementById('clock').innerHTML = '00';
    updateHighScore();
}

/**
 * Plays selected audio file
 * @param {soundName} sound to be played
 */
function playAudio(soundName) {
    let sound = new Audio();
    let src = 'assets/audio/' + soundName + '.wav';
    sound.src = src;
    sound.play();
}

//clears all circles and highlights the top one ready for new game
function resetCircles() {
    let circles = document.getElementsByClassName('neon-circle');
    let circlesCount = circles.length;

    for (let i = 0; i < circlesCount; i++) {
        document.getElementById(i).classList.remove('correct-answer');
        if (i === 0) {
            document.getElementById(i).classList.add('highlighted');
        } else {
            document.getElementById(i).classList.remove('highlighted');
        }
    }
}

/**
 * Enables or disables circle buttons
 * @param {onOff} either true or false
 */
function disableCircles(onOff) {
    let circles = document.getElementsByClassName('neon-circle');
    let circlesCount = circles.length;

    for (let i = 0; i < circlesCount; i++) {
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
        document.getElementById('action').innerHTML = 'New High!';
    }
}

//displays instructions
function loadInstructionsModal() {
    $('#instructionsModal').modal('show');
}

//hides instructions
function hideInstructionsModal() {
    $('#instructionsModal').modal('hide');
    document.getElementById('play-button').classList.remove('disabled');
}
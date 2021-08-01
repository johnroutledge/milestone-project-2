 let currentScore = 0;
 let highScore = 0;
 let actionWord = ['Pop','Bang','Boing'];
 let direction;
 let clickedCircle;
 let nextCircle;
 
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
    // countdown();

    let timeleft = 4;
    let downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById('action').innerHTML = 'Go!';
            startClock();
             disableCircles(true);
            
            //this is a bugfix for audio delay when clicking during game play - see README for more
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

function playGame() {
    // endGame.called = false;
    // startClock();
    disableCircles(false);
    selectAction();
    calculateCorrectCircle();

    //gets the circle player just clicked
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

 //credit: Stack Overflow - How to set one minute counter in javascript
function startClock() {
    var seconds = 20;
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

function countdown() {
    var seconds = 4;
    function tick() {
        var countdown = document.getElementById('action');
        seconds--;
        countdown.innerHTML = String(seconds);

        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            countdown.innerHTML = 'Go!';
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
    // } else if (nextCircle === -2) {
    //     nextCircle = 7;
    } else if (nextCircle === -1) {
        nextCircle = 7;
    }
    console.log(nextCircle);
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

function checkAnswer() {
    if (clickedCircle === nextCircle) {
        updateScore();
        playGame();
    } else {
        document.getElementById('action').innerHTML = 'Oops!';
        console.log(document.getElementById('action').innerHTML);
        playAudio('wrong');
        console.log('before');
        wait(1000);  //1 seconds in milliseconds
        console.log('after');
        endGame();
    }
}

// select random action from actionWord array 
function selectAction() {
    let actionText = document.getElementById('action');
    var action = actionWord[Math.floor(Math.random() * actionWord.length)];
    actionText.innerHTML = action;
    let randomColor = Math.floor(Math.random() * 360) + 1;
    actionText.style.color = 'hsl(' + randomColor + ',100%,54%)';
}

//enter score update code here
function updateScore() {
    var score = document.getElementById('score');

    currentScore = currentScore + 1;
    score.innerHTML = 'Score:' + (currentScore < 10 ? '0' : '') + String(currentScore);
}

//enter end of game code here
function endGame() {
    endGame.called = true;
    disableCircles(true);
    let actionText = document.getElementById('action');
    actionText.innerHTML = 'Game Over';
    actionText.style.color = 'hsl(317,100%,54%)';
    document.getElementById('help-button').classList.remove('disabled');
    document.getElementById('play-button').classList.remove('disabled');
    // document.getElementById('demo-button').classList.remove('disabled');
    document.getElementById('clock').innerHTML = '00';
    resetCircles();
    updateHighScore();
}

//play selected sound
function playAudio(soundName) {
    let sound = document.getElementById('audio');
    let src = 'assets/audio/' + soundName + '.wav'; 
    sound.src = src;
    sound.play();
}

//clears all circles and highlights the top one
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

function updateHighScore() {
    highScore = document.getElementById('high-score').innerHTML.slice(-2);
    
    if (currentScore > highScore) {
        //add code to have pop-up high score notification
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

function hideModal() {
    $('#instructionsModal').modal('hide'); 
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
 let currentScore = 0;
 let highScore;
 let actionWord = ["Pop","Bang","Boing"];
 let direction = Boolean;
 let currentCircle = [1,2,3,4,5,6,7,8];
 let nextCircle;

 
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
}

// start the 60-second timer
startTimer();

// select random action from actionWord array 
function selectAction() {
    var action = document.getElementById("action");
    action.innerHTML = actionWord[Math.floor(Math.random() * actionWord.length)];
}


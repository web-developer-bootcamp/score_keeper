var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameover = false;
var winningScoreDisplay = document.getElementById("num");
var winningScore = 0;

p1Button.addEventListener("click", function () {
    if (!gameover) {
        p1Score++;
        if (winningScore == p1Score) {
            gameover = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if (!gameover) {
        p2Score++;
        if(winningScore == p2Score){
            gameover = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameover = false;
}); 

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = numInput.value;
});
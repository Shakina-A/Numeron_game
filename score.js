var scoreBoard = document.getElementById("score-board");
var playagainbutton = document.getElementById("play-again-button");

playagainbutton.onclick = () => {
    location.href = "./index.html";
};

// To get values from the URL
var urlParams = new URLSearchParams(window.location.search);
var score = urlParams.get("score");

scoreBoard.innerHTML = score;

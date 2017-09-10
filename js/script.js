var colors = [];
var mode = 6;
var randomColor;
var h1 = document.querySelector("h1");
var displayColor = document.querySelector("#displayColor");
var btnReset = document.querySelector("#btnReset");
var displayMessage = document.querySelector("#displayMessage");
var color = document.querySelectorAll(".color");
var btnEasy = document.querySelector("#btnEasy");
var btnHard = document.querySelector("#btnHard");

reset();

btnEasy.addEventListener("click", function() {
    btnHard.classList.remove("clicked");
    btnEasy.classList.add("clicked");
    mode = 3;
    reset();
    for (var i = 3; i < 6; i++) {
        color[i].style.display = "none";
    }
});

btnHard.addEventListener("click", function() {
    btnEasy.classList.remove("clicked");
    btnHard.classList.add("clicked");
    mode = 6;
    reset();
    for (var i = 3; i < 6; i++) {
        color[i].style.display = "block";
    }
});

function reset() {
    h1.style.backgroundColor = "steelblue";
    displayMessage.textContent = "";
    btnReset.textContent = "New Colors";
    generateRandomColors(mode);
    randomColor = colors[Math.floor(Math.random() * mode)];
    displayColor.textContent = randomColor;
    for (var i = 0; i < color.length; i++) {
        color[i].style.backgroundColor = colors[i];
        color[i].addEventListener("click", function() {
            if (this.style.backgroundColor === randomColor) {
                changeColor(this.style.backgroundColor);
                btnReset.textContent = "Play Again?";
                displayMessage.textContent = "Correct!";
            } else {
                this.style.backgroundColor = "#232323";
                displayMessage.textContent = "Try Again";
            }
        });
    }
}

function changeColor(c) {
    h1.style.backgroundColor = c;
    for (var i = 0; i < color.length; i++) {
        color[i].style.backgroundColor = c;
    }
}

function generateRandomColors(count) {
    colors = [];
    for (var i = 0; i < count; i++) {
        colors.push(generateRandomColor());
    }
}

function generateRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
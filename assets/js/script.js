let gameArea = document.querySelectorAll(".boxes");
let h1s = document.querySelectorAll(".h1");
let currentPlayer = "X";

function add(element) {
    let h1 = element.querySelector("h1");

    if (h1.innerHTML === "") {
        h1.innerHTML = currentPlayer;
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
        checkWinner();
    }
}

function resetGame() {
    h1s.forEach(h1 => {
        h1.innerHTML = "";
    });
    document.getElementById("winnerImage").style.display = "none";
}

function showWinnerImage() {
    document.getElementById("winnerImage").style.display = "block";
}

function checkWinner() {
    let x1 = document.getElementById("x1").innerHTML;
    let x2 = document.getElementById("x2").innerHTML;
    let x3 = document.getElementById("x3").innerHTML;
    let x4 = document.getElementById("x4").innerHTML;
    let x5 = document.getElementById("x5").innerHTML;
    let x6 = document.getElementById("x6").innerHTML;
    let x7 = document.getElementById("x7").innerHTML;
    let x8 = document.getElementById("x8").innerHTML;
    let x9 = document.getElementById("x9").innerHTML;

    if(x1 === x2 && x2 === x3 && x1 === currentPlayer) {
        showWinnerImage();
        document.getElementById("h2").innerHTML = `Son qazanan: ${currentPlayer}`
        x1.style.color = "red"
        x2.style.color = "red"
        x3.style.color = "red"
    }

    if ((x1 === x2 && x2 === x3 && x1 === currentPlayer) ||
        (x1 === x5 && x5 === x9 && x1 === currentPlayer) ||
        (x1 === x4 && x4 === x7 && x1 === currentPlayer) ||
        (x2 === x5 && x5 === x8 && x2 === currentPlayer) ||
        (x3 === x5 && x5 === x7 && x3 === currentPlayer) ||
        (x4 === x5 && x5 === x6 && x4 === currentPlayer) ||
        (x7 === x8 && x8 === x9 && x7 === currentPlayer) ||
        (x3 === x6 && x6 === x9 && x3 === currentPlayer)
    ) {
        showWinnerImage();
        document.getElementById("h2").innerHTML = `Son qazanan: ${currentPlayer}`
    }
}

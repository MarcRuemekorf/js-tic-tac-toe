let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const handleCellClick = (clickedIndex) => {
    if (gameBoard[clickedIndex] !== "" || !gameActive) {
        return;
    }

    gameBoard[clickedIndex] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";

}

const cell = document.querySelectorAll(".cell");

cell.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(index));
});
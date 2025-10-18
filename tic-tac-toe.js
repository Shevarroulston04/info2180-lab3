// INFO2180 Lab 3 - Tic Tac Toe
// Author: <Your Name>
// Date: October 2025

window.addEventListener("DOMContentLoaded", function() {

    // --- Select all necessary elements ---
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");

    let currentPlayer = "X"; // Start with X
    let board = Array(9).fill(null); // Keep track of moves
    let gameOver = false;

    // --- Exercise 1: Layout the board ---
    squares.forEach(square => {
        square.classList.add("square"); // Add styling class
    });

    // --- Exercise 2: Add X or O on click ---
    squares.forEach((square, index) => {
        square.addEventListener("click", function() {
            // Do nothing if game is over or square already taken
            if (gameOver || board[index] !== null) return;

            // Mark the square
            board[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Check for winner
            if (checkWinner(currentPlayer)) {
                status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                status.classList.add("you-won");
                gameOver = true;
                return;
            }

            // Switch player
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });

        // --- Exercise 3: Hover effect ---
        square.addEventListener("mouseenter", function() {
            if (!board[index] && !gameOver) {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });
    });

    // --- Exercise 4: Check for winner ---
    function checkWinner(player) {
        const winPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        return winPatterns.some(pattern => 
            pattern.every(index => board[index] === player)
        );
    }

    // --- Exercise 5: Restart the game ---
    newGameBtn.addEventListener("click", function() {
        // Reset the board
        board = Array(9).fill(null);
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        // Reset status
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");

        // Reset player and state
        currentPlayer = "X";
        gameOver = false;
    });

});

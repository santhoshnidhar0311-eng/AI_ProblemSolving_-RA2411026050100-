let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";

const boardDiv = document.getElementById("board");
const status = document.getElementById("status");

function createBoard() {
    boardDiv.innerHTML = "";
    board.forEach((cell, index) => {
        let btn = document.createElement("button");
        btn.classList.add("cell");
        btn.innerText = cell;
        btn.onclick = () => makeMove(index);
        boardDiv.appendChild(btn);
    });
}

function makeMove(index) {
    if (board[index] !== "") return;

    board[index] = player;
    player = player === "X" ? "O" : "X";

    createBoard();
    checkWinner();
}

function checkWinner() {
    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for (let pattern of winPatterns) {
        let [a,b,c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            status.innerText = `Winner: ${board[a]}`;
            return;
        }
    }
}
createBoard();

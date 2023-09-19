let currentPlayer = "X";
let moves = 0;
let gameEnded = false;

let player1Name = "";
let player2Name = "";

player1Name = document.getElementById("player1").value;
player2Name = document.getElementById("player2").value;

function makeMove(cell) {
  if (cell.innerHTML === "" && !gameEnded) {
    cell.innerHTML = currentPlayer;
    moves++;
    if (checkWin()) {
      if (currentPlayer === "X") {
        document.getElementById(
          "result"
        ).innerHTML = `${player1Name} venceu!`;
        gameEnded = true;
      } else if (currentPlayer === "O") {
        document.getElementById(
          "result"
        ).innerHTML = `${player2Name} venceu!`;
        gameEnded = true;
      }
    } else if (moves === 9) {
      document.getElementById("result").innerHTML = "Empate!";
      gameEnded = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const cells = document.querySelectorAll("td");
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6], // Diagonais
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      cells[a].innerHTML &&
      cells[a].innerHTML === cells[b].innerHTML &&
      cells[a].innerHTML === cells[c].innerHTML
    ) {
      return true;
    }
  }
  return false;
}

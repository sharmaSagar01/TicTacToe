import React, { useState } from "react";
import Square from "./Square";
import styles from "./Board.module.css";

const squaresInitialState = Array(9).fill(null);
const playerInitialState = true;

const Board = () => {
  const [squares, setSquares] = useState(squaresInitialState);
  const [nextPlayerX, setNextPlayerX] = useState(playerInitialState);

  const winner = determineWinner(squares);
  let status;
  if (winner) {
    status = " Winner : " + winner;
  } else {
    status = " Next Player :" + (nextPlayerX ? "X" : "O");
  }

  const handleClick = (i) => {
    const square = squares.slice();
    if (determineWinner(square) || square[i]) {
      return;
    }
    console.log(square);
    square[i] = nextPlayerX ? "X" : "O";
    setSquares(square);
    setNextPlayerX(!nextPlayerX);
  };
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  function determineWinner(squares) {
    // console.log("winner function:" + squares);
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [5, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  const reset = () => {
    setSquares(squaresInitialState);
    setNextPlayerX(playerInitialState);
  };
  return (
    <div className={styles.boardContainer}>
      <div className={styles.playerStatus}>{status}</div>
      <div className={styles.board}>
        <div className={styles.boardRow}>
          {renderSquare(0)}
          {renderSquare(3)}
          {renderSquare(6)}
        </div>
        <div className={styles.boardRow}>
          {renderSquare(1)}
          {renderSquare(4)}
          {renderSquare(7)}
        </div>
        <div className={styles.boardRow}>
          {renderSquare(2)}
          {renderSquare(5)}
          {renderSquare(8)}
        </div>
      </div>
      <div>
        <button className={styles.button} onClick={reset}>
          Reset the game
        </button>
      </div>
    </div>
  );
};

export default Board;

import { useState } from "react";

function Square({ value, onSquareClick, isWinning }) {
  return (
    <button
      className={"square" + (isWinning ? " square--win" : "")}
      onClick={onSquareClick}
      aria-label={value ? `Square ${value}` : `Empty square`}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    const result = calculateWinner(squares);
    if ((result && result.winner) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const result = calculateWinner(squares);
  const winner = result ? result.winner : null;
  const winningLine = result ? result.line : null;

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.every(Boolean)) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status small">{status}</div>
      <div className="board-grid" role="grid">
        {squares.map((s, i) => (
          <Square
            key={i}
            value={s}
            onSquareClick={() => handleClick(i)}
            isWinning={!!(winningLine && winningLine.indexOf(i) !== -1)}
          />
        ))}
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const result = calculateWinner(currentSquares);
  const winner = result ? result.winner : null;

  const moves = history.map((squares, move) => {
    const isCurrent = move === currentMove;
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move} className={isCurrent ? "move-item current" : "move-item"}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game modern">
      <div className="game-board">
        <div className={"winner-banner " + (winner ? "visible" : "")}>
          {winner ? (
            <div className="winner-text">{winner} wins!</div>
          ) : (
            <div className="winner-text muted">Tic Tac Toe</div>
          )}
        </div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <div className="controls">
          <button className="btn reset" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      </div>

      <div className="game-info">
        <h3>Move List</h3>
        <ol className="move-list">{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}

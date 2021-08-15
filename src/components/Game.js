import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const style = {
  width: '200px',
  margin: '20px auto'
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'x' : 'o';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const jumpTo = () => {};

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>
      Start Game
    </button>
  );

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <p style={{display: 'flex', justifyContent: 'space-between'}}>
          {winner
            ? 'Winner: ' + winner
            : 'Next Player: ' + (xIsNext ? 'x' : 'o')}
          {renderMoves()}
        </p>
      </div>
    </div>
  );
};

export default Game;

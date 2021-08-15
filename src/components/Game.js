import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

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
  }
  const jumpTo = () => {

  }

  const renderMoves = () => {

  }

  return (
    <Board squares={board} onClick={handleClick} />
  )
}

export default Game;
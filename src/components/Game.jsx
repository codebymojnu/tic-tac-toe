import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isX, isSetX] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handlePlay(newSquares) {
    isSetX(!isX);
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // history

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `go to the move ${move}`;
    } else if (move === history.length - 1) {
      description = `start`;
    } else {
      description = `Restart`;
    }

    console.log(move, history.length - 1);
    return (
      <button
        className="bg-gray-700 text-white mb-2 p-1 rounded-md"
        style={{ display: "block" }}
        key={move}
        onClick={() => handleJump(move)}
      >
        {description}
      </button>
    );
  });

  // hand jump to game order
  function handleJump(move) {
    setCurrentMove(move);
    if (move % 2 === 0) {
      isSetX(isX);
    }
  }

  console.log(history, isX);
  return (
    <div className="flex justify-center p-4">
      <div className="mr-10">
        <Board isX={isX} squares={currentSquares} handlePlay={handlePlay} />
      </div>
      <div className="border border-gray-400 p-4">
        <History moves={moves} />
      </div>
    </div>
  );
}

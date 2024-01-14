import Square from "./Square";

export default function Board({ isX, squares, handlePlay }) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);

  // handle Sqaure Click

  function handleSqureClick(i) {
    if (squares[i] || winner !== null) {
      return;
    }
    const newSquares = [...squares];

    if (isX) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    handlePlay(newSquares);
  }

  return (
    <>
      <h2>
        {winner ? `Winner: ${winner}` : `Next Player: ${isX ? "X" : "O"}`}
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex">
          <Square
            value={squares[0]}
            handleSqureClick={() => handleSqureClick(0)}
          />
          <Square
            value={squares[1]}
            handleSqureClick={() => handleSqureClick(1)}
          />
          <Square
            value={squares[2]}
            handleSqureClick={() => handleSqureClick(2)}
          />
        </div>
        <div className="flex">
          <Square
            value={squares[3]}
            handleSqureClick={() => handleSqureClick(3)}
          />
          <Square
            value={squares[4]}
            handleSqureClick={() => handleSqureClick(4)}
          />
          <Square
            value={squares[5]}
            handleSqureClick={() => handleSqureClick(5)}
          />
        </div>
        <div className="flex">
          <Square
            value={squares[6]}
            handleSqureClick={() => handleSqureClick(6)}
          />
          <Square
            value={squares[7]}
            handleSqureClick={() => handleSqureClick(7)}
          />
          <Square
            value={squares[8]}
            handleSqureClick={() => handleSqureClick(8)}
          />
        </div>
      </div>
    </>
  );
}

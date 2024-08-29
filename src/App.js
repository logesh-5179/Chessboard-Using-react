import React, { useState } from "react";
import "./App.css";

const init=[
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

const ChessBoard = () => {
  const [board, setBoard] = useState(init);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleCellClick = (rowIndex, colIndex) => {
    if (selectedPiece) {
     
      const newBoard = [...board];

      newBoard[selectedPiece.row][selectedPiece.col] = "";
      newBoard[rowIndex][colIndex] = selectedPiece.piece;

      setBoard(newBoard);
      setSelectedPiece(null);
    } 
    else if (board[rowIndex][colIndex]) {
     
      setSelectedPiece({
        piece: board[rowIndex][colIndex],
        row: rowIndex,
        col: colIndex,
      });
    }
  };

  return (
    <div>
      <h1>CHESS</h1>
      <h5>Chariot, Horse, Elephant and Soldiers</h5>
      <table className="chess-board">
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className={(rowIndex + colIndex) % 2 === 0 ? "light" : "dark"}
                  onClick={() => handleCellClick(rowIndex, colIndex)}>
                  {cell && <span>{cell}</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChessBoard;

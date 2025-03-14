import { Button, Container, Row } from "react-bootstrap";
import Cell from "./components/Cell";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./TicTacToe.css";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));

  const navigate = useNavigate();

  useEffect(() => {
    //@ts-ignore
    window.electron.subscribeToTTTEvents((e: any) => {
      const cellNumber = e.cell.row * 3 + e.cell.column;

      const newBoard = board.map((_, i) => {
        if (i == cellNumber) {
          return e.mark;
        }
        return board[i];
      });

      setBoard(newBoard);
    });
  });

  return (
    <Container className="p-3 d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Row>
        <div className="board">
          {board.map((_, index) => (
            <Cell key={index} value={board[index]} />
          ))}
        </div>
      </Row>
      <Row className="p-4">
        <Button onClick={() => navigate("/")}>Go to Home</Button>
      </Row>
    </Container>
  );
}

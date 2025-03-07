import { Button, Col, Container, Row } from "react-bootstrap";
import Cell from "./components/Cell";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./TicTacToe.css";

export default function TicTacToe() {
  const [board, _] = useState(Array(9).fill(null));

  const navigate = useNavigate();

  return (
    <Container className="p-3 d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Row cla>
        <div className="board">
          {board.map((_, index) => (
            <Cell key={index} />
          ))}
        </div>
      </Row>
      <Row className="p-4">
        <Button onClick={() => navigate("/")}>Go to Home</Button>
      </Row>
    </Container>
  );
}

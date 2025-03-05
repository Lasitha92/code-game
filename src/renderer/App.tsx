import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./App.css";
import TicTacToe from "./src/games/tic-tac-toe/TicTacToe";

function App() {
  const startTicTacToe = () => {
    console.log("Going to Tic Tac Toe");
  };

  return (
    <>
      <Container className="p-3 d-flex flex-column align-items-center justify-content-center min-vh-100">
        <Row>
          <h1>Code Game</h1>
        </Row>
        <Row>
          <p>
            A tool to help testing your algorithm/AI skills with simple games
          </p>
        </Row>
        <Row>
          <Col>
            <Button className="game-button" onClick={() => startTicTacToe()}>
              Tic Tac Toe
            </Button>
          </Col>
          <Col>
            <Button className="game-button" onClick={() => startTicTacToe()}>
              Tic Tac Toe
            </Button>
          </Col>
        </Row>
        <Row>
          <TicTacToe />
        </Row>
      </Container>
    </>
  );
}

export default App;

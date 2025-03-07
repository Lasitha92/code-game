import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  const startTicTacToe = () => {
    navigate("/tic-tac-toe");
  };

  const startGo = () => {};

  return (
    <Container className="p-3 d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Row>
        <h1>Code Game</h1>
      </Row>
      <Row>
        <p>A tool to help testing your algorithm/AI skills with simple games</p>
      </Row>
      <Row className="p-3" style={{ width: "30em" }}>
        <Col>
          <Button className="w-100" onClick={() => startTicTacToe()}>
            Tic Tac Toe
          </Button>
        </Col>
        <Col>
          <Button className="w-100" onClick={() => startGo()}>
            Go
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

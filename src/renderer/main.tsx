import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicTacToe from "./src/games/tic-tac-toe/TicTacToe.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tic-tac-toe" element={<TicTacToe />}></Route>
    </Routes>
  </BrowserRouter>,
);

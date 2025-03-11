import { BrowserWindow } from "electron";
import express from "express";
import TicTacToeController from "./controllers/tic-tac-toe-controller.js";

export default function (window: BrowserWindow) {
  const router = express.Router();

  router.use("/tic-tac-toe", TicTacToeController(window));

  return router;
}

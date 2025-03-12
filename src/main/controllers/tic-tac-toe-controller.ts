import { BrowserWindow } from "electron";
import { Router } from "express";

export default function (window: BrowserWindow) {
  const controller = Router();

  controller.post("/markCell", (req, res) => {
    const markCellRequest = req.body as MarkCellRequest;
    console.log(markCellRequest);

    window.webContents.send("TTTEvents", markCellRequest);
    res.send({ isSuccessful: true });
  });

  return controller;
}

interface MarkCellRequest {
  cell: {
    row: number;
    column: number;
  };
  value: "X" | "O";
}

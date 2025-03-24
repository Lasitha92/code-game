import { BrowserWindow, ipcMain, ipcRenderer } from "electron";
import { Router } from "express";

export default function (window: BrowserWindow) {
  const controller = Router();

  controller.post("/markCell", (req, res) => {
    const markCellRequest = req.body as MarkCellRequest;
    console.log(markCellRequest);

    window.webContents.send("ttt-events", markCellRequest);
    res.send({ isSuccessful: true });
  });

  controller.get("/cells", async (req, res) => {
    window.webContents.send("request-all-cells");

    const allCells = await new Promise((resolve) => {
      ipcMain.once("respond-all-cells", (_, data) => {
        console.log("Received from react: ", data);
        resolve(data);
      });
    });

    res.send({
      cells: allCells,
    });
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

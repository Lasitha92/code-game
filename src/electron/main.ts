import { app, BrowserWindow } from "electron";
import path from "path";
import { isProd } from "./util/config.js";

const createWindow = () => {
  const mainWindow: BrowserWindow = new BrowserWindow({});
  if (isProd()) {
    mainWindow.loadFile(path.join(app.getAppPath(), "/build/react/index.html"));
  } else {
    mainWindow.loadURL("http://localhost:5123");
  }
};

app.whenReady().then(() => {
  createWindow();
});

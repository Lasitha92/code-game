import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util/config.js";

const createWindow = () => {
  const mainWindow: BrowserWindow = new BrowserWindow({});
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/build/renderer/index.html"));
  }
};

app.whenReady().then(() => {
  createWindow();
});

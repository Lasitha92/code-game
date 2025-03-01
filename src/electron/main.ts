import { app, BrowserWindow } from "electron";
import path from "path";

const createWindow = () => {
  const mainWindow: BrowserWindow = new BrowserWindow({});
  mainWindow.loadFile(path.join(app.getAppPath(), "/build/react/index.html"));
};

app.whenReady().then(() => {
  createWindow();
});

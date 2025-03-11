import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util/config.js";
import express from "express";
import router from "./router.js";

const createWindow = () => {
  const mainWindow: BrowserWindow = new BrowserWindow({
    webPreferences: {
      preload: getPrloadPath(),
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(
      path.join(app.getAppPath(), "/build/renderer/index.html"),
    );
  }

  startAPIServer(mainWindow);
};

const getPrloadPath = () => {
  return path.join(
    app.getAppPath(),
    isDev() ? "." : "..",
    "/build/main/preload.cjs",
  );
};

app.whenReady().then(() => {
  createWindow();
});

const startAPIServer = (window: BrowserWindow) => {
  const app = express();

  const port = 3000;

  app.use(express.json());
  app.use("/", router(window));

  app.listen(port, () => {
    console.log(`API Server is listening on port ${port}`);
  });
};

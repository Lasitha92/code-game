import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("gameTTT", {
  subscribeToTTTEvents: (callback: any) => {
    ipcRenderer.on("ttt-events", (_, returnedValue) => {
      callback(returnedValue);
    });
  },

  onRequestAllCells: (cb: any) => {
    ipcRenderer.removeAllListeners("request-all-cells"); // Remove previous listeners
    ipcRenderer.on("request-all-cells", cb);
  },

  respondAllCells: (cells: any) => ipcRenderer.send("respond-all-cells", cells),
});
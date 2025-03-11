import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  subscribeToTTTEvents: (callback: any) => {
    ipcRenderer.on("TTTEvents", (_, returnedValue) => {
        callback(returnedValue);
    })
  }
});

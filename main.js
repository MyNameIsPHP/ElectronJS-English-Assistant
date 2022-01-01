const { app, BrowserWindow } = require("electron");

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 360,
    minHeight: 360,

    frame: false,
    autoHideMenuBar: true,

    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: false,
      enableRemoteModule: true, // turn off remote
    },
    alwaysOnTop: true,
  });

  // win.setAlwaysOnTop(true, "normal", 1);
  win.loadFile("src/index.html");

  win.webContents.openDevTools();
}
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

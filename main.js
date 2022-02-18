const { app, BrowserWindow } = require("electron");
//relative path
const path = require("path");

async function createWindow() {
  // Create the browser window.
  // don't use const here so that we can close the window
  var win = new BrowserWindow({
    transparent: true,
    hasShadow: false,
    
    //initialize window size
    width: 800,
    height: 600,
    //set min size for window
    minWidth: 440,
    minHeight: 360,

    //hide original menu bar
    frame: false,
    autoHideMenuBar: true,

    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: false,
      enableRemoteModule: true, // turn off remote
      devTools: false,
    },

    //set default alwaysOnTop to True
    alwaysOnTop: true,
  });

  // win.setAlwaysOnTop(true, "normal", 1);

  // and load the index.html of the app.
  win.loadFile("index.html");

  // Emitted when the window is closed.
  win.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

app.whenReady().then(createWindow);

//Quit when all windows are closed
app.on("window-all-closed", () => {
  //On OS X, it's common for the app to stay active
  //until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

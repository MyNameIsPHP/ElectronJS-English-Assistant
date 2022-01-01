const { ipcRenderer } = require("electron");
const electron = require("electron");

// Importing BrowserWindow from Main Process
const BrowserWindow = electron.remote.BrowserWindow;

var style = document.getElementById("style");
var alwaysOnTopButton = document.getElementById("alwaysOnTop");
let win = BrowserWindow.getFocusedWindow();
// let win = BrowserWindow.getAllWindows()[0];
var cssKey = undefined;

var css = "body { background-color: #000000; color: white; }";

var closeButton = document.getElementById("close-button");
var minimizeButton = document.getElementById("minimize-button");
var fullscreenButton = document.getElementById("fullscreen-button");

// var linkChange = document.querySelector("head link");
// linkChange.href = "index_light.css";

closeButton.addEventListener("click", () => {
  win.close();
});

minimizeButton.addEventListener("click", () => {
  win.minimize();
});

fullscreenButton.addEventListener("click", (e) => {
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});

alwaysOnTopButton.addEventListener("change", (e) => {
  if (e.target.checked) {
    win.setAlwaysOnTop(true, "normal", 1);
  } else {
    win.setAlwaysOnTop(true, "normal", 0);
  }
});

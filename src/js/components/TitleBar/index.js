import React from "react";
import { Nav, Right, Button, Icon } from "./styles/TitleBar";

function TitleBar({ theme, setTheme, transparent, setTransparent }) {
  const electron = window.require("electron");
  const BrowserWindow = electron.remote.BrowserWindow;
  let win = BrowserWindow.getFocusedWindow();

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  const handleSetTransparency = () => {
    setTransparent(!transparent);
  };

  //functional buttons
  const closeWindow = (e) => {
    if (win) {
      win.close();
    }
  };
  const minimizeWindow = (e) => {
    if (win) {
      win.minimize();
    }
  };
  const fullScreen = (e) => {
    if (win) {
      if (win.isMaximized()) {
        win.unmaximize();
      } else {
        win.maximize();
      }
    }
  };
  const alwaysOnTop = (e) => {
    if (win) {
      if (e.target.checked) {
        win.setAlwaysOnTop(true, "normal", 1);
      } else {
        win.setAlwaysOnTop(true, "normal", 0);
      }
    }
  };

  return (
    <>
      <Nav transparent={transparent}>
        <div></div>
        <Right>
          <input
            type="checkbox"
            name=""
            defaultChecked
            onClick={handleSetTransparency}
          />
          <input type="checkbox" name="" onClick={handleSetTheme} />
          <input type="checkbox" name="" defaultChecked onClick={alwaysOnTop} />

          <Button onClick={minimizeWindow}>
            <Icon style={{ width: "15px" }} src="icons/minimize.svg" />
          </Button>

          <Button onClick={fullScreen}>
            <Icon style={{ width: "15px" }} src="icons/full_screen.svg" />
          </Button>

          <Button onClick={closeWindow}>
            <Icon style={{ width: "20px" }} src="icons/close.svg" />
          </Button>
        </Right>
      </Nav>
    </>
  );
}

export default TitleBar;

import { createGlobalStyle } from "styled-components";

export const LightTheme = {
  titleBar: "#E4E6EB",
  titleBarHover: "#C2C4C8",
  generalTextColor: "black",
  background: "white",
  content: "#B7D1E2", //#B7D1E2
};

export const DarkTheme = {
  titleBar: "#101010", //
  titleBarHover: "#2e3748",
  generalTextColor: "white",
  background: "#212121",
  content: "#2e3748",
};

export const GlobalStyles = createGlobalStyle`
    * {
      
        transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out, filter 0.3s ease-in-out;
        
        ${(props) =>
         props.mode === "dark"
           ? `img { filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);}`
           : ""}
     
    :root {
        --title_bar: ${(props) => props.theme.titleBar};
        --title_bar_hover: ${(props) => props.theme.titleBarHover};
        --background: ${(props) => props.theme.background};
        --decor_hover: #275ffe;
        --side_nav: #212121;
        --content: ${(props) => props.theme.content};
        --decor: #3a72ff;
        --checkbox-background: #E4E6EB;
        --tooltip_background: #fff;
        --tooltip_text_color: black;
        --navigation_text_color: white;
        --general_text_color: ${(props) => props.theme.generalTextColor};
        --field_border: #999999;
      
        --white: white;
        --black: black;
      
        --grammar_extend-background: #f4f4fd;
    }


`;

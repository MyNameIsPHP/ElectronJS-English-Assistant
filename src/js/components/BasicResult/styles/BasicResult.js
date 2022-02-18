import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--content);
  border-radius: 8px;
  color: var(--general_text_color);
  padding: 2%;
  margin-bottom: 2vh;
  box-shadow: 0px 0px 18px -5px #000000;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Word = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  background: var(--decor);
  color: var(--general_text_color);
  padding: 5px 5px;
  border-radius: 3px;
  font-weight: 900;

  cursor: pointer;
  :hover {
    background: var(--decor_hover);
    border: 1px solid var(--field_border);
  }
`;

export const Type = styled.span`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: italic;
  color: var(--decor);
  margin-right: 10px;
`;

export const Body = styled.div`
  margin-left: 15px;
`;

export const Tag = styled.span`
  font-weight: bold;
`;

export const Pronunciation = styled.span`
  margin-left: 3vw;
  margin-top: 3px;
  font-style: italic;
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export const Meaning = styled.p``;
export const Example = styled.p``;

export const Detail = styled.div`
  position: fixed;
  background: var(--background);
  top: 50px;
  right: 0px;
  opacity: ${(props) => (props.showDetail ? "1" : "0")};

  visibility: ${(props) => (props.showDetail ? "visible" : "hidden")};
  right: ${(props) => (props.showDetail ? "0" : "-100%")};
  width: calc(100% - 60px);
  height: calc(100% - 50px);
  transition: 0.5s;
  animation: slideMe 0.7s ease-in;
  overflow-x: auto;
  padding: 8px;

  color: var(--general_text_color);
  border-radius: 8px;
  box-shadow: 0px 0px 18px -5px #000000;
`;

export const GoBackButton = styled.button`
  position: absolute;
  right: 8px;

  background: var(--decor);
  width: 10vw;
  height: 5vh;
  min-width: 60px;
  min-height: 25px;
  border: none;
  color: var(--general_text_color);
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  position: fixed;
  right: 3vw;

  :focus {
    outline: none;
  }

  :hover {
    background: var(--decor_hover);
  }
`;

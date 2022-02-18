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


`;
export const Type = styled.span`
  margin-right: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: italic;
  color: var(--decor);
`;
export const Body = styled.div`
  margin-left: 15px;
`;
export const Tag = styled.span`
  font-weight: bold;
`;
export const Also = styled.span`
  margin-left: 3vw;
  margin-top: 3px;
  font-style: italic;
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
export const Meaning = styled.p``;
export const Example = styled.p``;

export const DetailContainer = styled.div`
  position: fixed;

  background: var(--content);
  top: 50px;
  right: 0px;
  opacity: ${(props) => (props.showDetail ? "1" : "0")};

  visibility: ${(props) => (props.showDetail ? "visible" : "hidden")};
  right: ${(props) => (props.showDetail ? "0" : "-100%")};
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  transition: 0.5s;
  animation: slideMe 0.7s ease-in;
`;

export const GoBackButton = styled.button`
  height: 50px;
  width: 50px;
`;

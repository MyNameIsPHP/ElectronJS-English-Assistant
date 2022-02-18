import styled from "styled-components";

export const Nav = styled.nav`
  height: 40px;
  width: 100%;

  -webkit-app-region: drag;
  display: flex;
  color: var(--general_text_color);
  align-items: center;
  justify-content: space-between;
  background-color: var(--title_bar);
  opacity: ${(props) => (props.transparent ? 0.7 : 1)};


`;

export const Right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;

  input[type="checkbox"] {
    margin-top: 10px;
    margin-right: 10px;
    position: relative;
    width: 40px;
    height: 20px;
    -webkit-appearance: none;
    background: var(--checkbox-background);
    outline: none;
    border-radius: 10px;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  input:checked[type="checkbox"] {
    background: var(--decor);
  }

  input[type="checkbox"]:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    top: 0;
    left: 0;
    background: var(--tooltip_background);
    transform: scale(1.1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  input:checked[type="checkbox"]:before {
    left: 20px;
  }
`;

export const Button = styled.div`
  -webkit-app-region: no-drag;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  height: 100%;
  width: 40px;

  &:hover {
    background-color: var(--title_bar_hover);
  }

`;

export const Icon = styled.img`
  margin: 0;
  height: auto;
`;

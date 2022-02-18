import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 20;
`;
export const Button = styled.button`
  background-color: var(--title_bar);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 1vh 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--general_text_color);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  box-shadow: 0px 0px 18px -5px #000000;
`;

export const SidebarContainer = styled.div`
  background-color: var(--title_bar);
  width: 3.5rem;
  height: 80vh;
  min-height: 1px;
  margin-top: 1vh;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  box-shadow: 0px 0px 18px -5px #000000;
`;

export const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

export const SlickBar = styled.ul`
  color: var(--general_text_color);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--title_bar);
  padding: 2rem 0;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

export const Item = styled.div`
  text-decoration: none;
  color: var(--general_text_color);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  opacity: 0.5;
  &:hover {
    border-right: 4px solid var(--general_text_color);
    opacity: 1;
  }
  img {
    width: 1.2rem;
    height: auto;
  }

  ${(props) =>
    props.active
      ? `
      border-right: 4px solid var(--general_text_color);
      opacity: 1;
      `
      : ""}
`;

export const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

export const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--general_text_color); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  background-color: var(--title_bar);
  color: var(--general_text_color);
  transition: all 0.3s ease;
  img {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

export const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { removeUserLocal } from "../../utils/Common";
import axios from "axios";

import {
  Container,
  Button,
  SidebarContainer,
  Logo,
  SlickBar,
  Item,
  Text,
  Profile,
  Details,
  Name,
  Logout,
} from "./styles/NavBar";

function NavBar(props) {
  function handleChange(value) {
    props.onChange(value);
  }
  const [active, setActive] = useState(
    JSON.parse(localStorage.getItem("activeTab"))
  );
  const handleSetActive = (index) => {
    setActive(index);
    localStorage.setItem("activeTab", index);
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setProfileClick] = useState(false);
  const handleProfileClick = () => setProfileClick(!profileClick);

  const history = useHistory();

  const postNoteURL = `http://${ROUTES.URL}/api/auth/updatenotes`;
  const handleLogout = () => {
    props.setUser(null);
    removeUserLocal();

    //console.log(props.user.id);
    //console.log(props.user.username);
    //console.log(JSON.stringify(props.notes));
    try {
      axios.put(postNoteURL, {
        id: props.user.id,
        username: props.user.username,
        updateNotes: JSON.stringify(props.notes),
      });
    } catch (error) {
      console.error(error.response.data); // NOTE - use "error.response.data` (not "error")
    }
    props.setUpdateNoteTimes(2);

    history.push(ROUTES.SIGN_IN);
  };

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}></Button>
      <SidebarContainer>
        <Logo>
          <img src="icons/logo.png" alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item
            onClick={() => {
              handleSetActive(1);
              setClick(false);
              handleChange(1);
            }}
            active={active === 1 ? true : false}
          >
            <img src="icons/translator.svg" alt="Translator" />
            <Text clicked={click}>Translator</Text>
          </Item>
          <Item
            onClick={() => {
              handleSetActive(2);
              setClick(false);
              handleChange(2);
            }}
            active={active === 2 ? true : false}
          >
            <img src="icons/dictionary1.svg" alt="dictionary" />
            <Text clicked={click}>Dictionary</Text>
          </Item>
          <Item
            onClick={() => {
              handleSetActive(3);
              setClick(false);
              handleChange(3);
            }}
            active={active === 3 ? true : false}
          >
            <img src="icons/note.svg" alt="note" />
            <Text clicked={click}>Note</Text>
          </Item>
        </SlickBar>

        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="icons/user.svg"
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>{props.user.firstName}</h4>
            </Name>

            <Logout onClick={handleLogout}>
              <img src="icons/logout.svg" alt="logout" />
            </Logout>
          </Details>
        </Profile>
      </SidebarContainer>
    </Container>
  );
}

export default NavBar;

// NavBar.Container = function NavBarContainer({ children, ...restProps }) {
//   return <Container {...restProps}>{children}</Container>;
// };
// NavBar.Button = function NavBarButton({ children, ...restProps }) {
//   return <Button {...restProps}>{children}</Button>;
// };
// NavBar.SidebarContainer = function NavBarSidebarContainer({
//   children,
//   ...restProps
// }) {
//   return <SidebarContainer {...restProps}>{children}</SidebarContainer>;
// };
// NavBar.Logo = function NavBarLogo({ children, ...restProps }) {
//   return <Logo {...restProps}>{children}</Logo>;
// };
// NavBar.SlickBar = function NavBarSlickBar({ children, ...restProps }) {
//   return <SlickBar {...restProps}>{children}</SlickBar>;
// };
// NavBar.Item = function NavBarItem({ children, ...restProps }) {
//   return <Item {...restProps}>{children}</Item>;
// };
// NavBar.Text = function NavBarText({ children, ...restProps }) {
//   return <Text {...restProps}>{children}</Text>;
// };

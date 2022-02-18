import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { setUserLocal } from "../../utils/Common";
import HashLoader from "react-spinners/HashLoader";

import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
  Background,
} from "./styles/Signin";

function Signin({ user, setUser, setNotes }) {
  const url = `http://${ROUTES.URL}/api/auth/signin`;
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isInvalid = password === "" || username === "";
  const handleSignIn = (event) => {
    event.preventDefault();
    setLoading(true);
    // spring boot service here
    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        const user = {
          id: response.data.id,
          firstName: response.data.firstName,
          username: response.data.username,
          email: response.data.email,
          notes: response.data.notes,
        };
        setUserLocal(response.data.accessToken, user);

        if (response.data.notes != "") {
          const initializeNote = JSON.parse(response.data.notes);
          setNotes(initializeNote);
        } else {
          setNotes([]);
        }

        setUser(user);
        history.push(ROUTES.APP);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 400) {
          // setError(error.response.data.message);
          setError("Your username or password is incorrect. Please try again.");
        } else {
          setError("Something went wrong. Please try again later.");
        }
        console.log(error.response);
        setUsername("");
        setPassword("");
      });
  };

  return (
    <>
      {loading ? (
        <Background>
          <HashLoader color={"#2577fb"} loading={loading} size={150} />
        </Background>
      ) : (
        <Background>
          <Container>
            <Title>Sign In</Title>
            {error && <Error>{error}</Error>}

            <Base onSubmit={handleSignIn} method="POST">
              <Input
                placeholder="Username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />

              <Submit disabled={isInvalid} type="submit">
                Sign In
              </Submit>
            </Base>

            <Text>
              First time using this app? <Link to="/signup">Sign up now</Link>
            </Text>

            <TextSmall></TextSmall>
          </Container>
        </Background>
      )}
    </>
  );
}

export default Signin;

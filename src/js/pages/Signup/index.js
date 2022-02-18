import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
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
} from "./styles/Signup";

function Signup() {
  const url = `http://${ROUTES.URL}/api/auth/signup`;
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = username === "" || password === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();

    // spring boot stuff
    axios
      .post(url, {
        firstName: firstName,
        surname: surname,
        username: username,
        email: emailAddress,
        password: password,
      })
      .then((response) => {
        console.log(response);
        history.push(ROUTES.SIGN_IN);
      })
      .catch((error) => {
        // console.log(error.response.data.message);
        setFirstName("");
        setSurname("");
        setUsername("");
        setPassword("");
        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <>
      <Background>
        <Container>
          <Title>Sign Up</Title>
          {error && <Error>{error}</Error>}

          <Base onSubmit={handleSignup} method="POST">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Input
                placeholder="First name"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
                style={{ width: "48%" }}
              />
              <Input
                placeholder="Surname"
                value={surname}
                onChange={({ target }) => setSurname(target.value)}
                style={{ width: "48%" }}
              />
            </div>
            <Input
              placeholder="Username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Submit disabled={isInvalid} type="submit">
              Sign Up
            </Submit>

            <Text>
              Already a user? <Link to="/">Sign in now.</Link>
            </Text>

            <TextSmall></TextSmall>
          </Base>
        </Container>
      </Background>
    </>
  );
}

export default Signup;

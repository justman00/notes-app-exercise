import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  InputRightElement,
} from "@chakra-ui/react";

function Login({ setIsAuthenticated }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  const handlePassClick = () => setShow(!show);
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://notes-app-ecaterina-popa.herokuapp.com/api/auth/login`, {
      method: "POST",
      //credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("login result: ", res);
          return res.json();
        }
        setError("Invalid credentials.");
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        return history.push("/notes-list");
      });
  };

  return (
    <Container>
      <Text fontSize="x-large" align="center" mt="4">
        Log In
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              name="password"
              type={show ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handlePassClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        {error && <div style={{ fontSize: "12px", color: "red" }}>{error}</div>}

        <Button type="submit" colorScheme="teal" size="md" mt="2">
          Submit
        </Button>
      </form>
    </Container>
  );
}
export default Login;

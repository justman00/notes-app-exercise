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

function Register() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  const handlePassClick = () => setShow(!show);
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://notes-app-ecaterina-popa.herokuapp.com/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        setError("Invalid credentials.");
      })
      .then((data) => {
        // console.log("data: ", data);
        return history.push("/login");
      });
  };

  return (
    <Container>
      <Text
        fontSize="x-large"
        fontWeight="hairline"
        textColor="blue.600"
        align="center"
        mt="4"
      >
        Register
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

        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
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
export default Register;

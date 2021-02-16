import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Box, Flex, Link as ChakraLink, Heading } from '@chakra-ui/react';

import Home from './pages/Home';
import CreateNotePage from './pages/CreateNotePage';

function App() {
  return (
    <div className="App">
      <Flex>
        <Box
          position="static"
          height="100vh"
          p="36px"
          w="30%"
          backgroundColor="blue.100"
        >
          <div>
            <Heading as="h2">StepIt notes</Heading>
          </div>
          <Box pt="36px">
            <Box>
              <Link to="/">
                <ChakraLink mb="18px" textDecoration="underline">
                  Notiele mele
                </ChakraLink>
              </Link>
            </Box>
            <Box>
              <Link to="/create-note">
                <ChakraLink mb="18px" textDecoration="underline">
                  Creeaza notita
                </ChakraLink>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box p="36px" w="70%">
          <Switch>
            <Route path="/create-note" component={CreateNotePage} />
            <Route path="/" component={Home} />
          </Switch>
        </Box>
      </Flex>
    </div>
  );
}

export default App;

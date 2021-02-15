import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Box, Flex, Link as ChakraLink, Heading } from '@chakra-ui/react';

import Home from './pages/Home';

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
            <Link to="/">
              <ChakraLink textDecoration="underline">Notiele mele</ChakraLink>
            </Link>
          </Box>
        </Box>
        <Box p="36px" w="70%">

          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Box>
      </Flex>
    </div>
  );
}

export default App;

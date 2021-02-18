import React, { useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Flex, Box, Heading, Link } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import { getNotesAction } from './actions/notesActions';

// const theme = {
//   blue: {
//     100: '#d43afc'
//   }
// }

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesAction());
  }, [dispatch]);

  return (
    <div className="App">
      <Flex>
        <Box
          position="static"
          height="100vh"
          padding="36px"
          width="30%"
          backgroundColor="blue.100"
        >
          <div>
            <Heading as="h2">StepIt Notes</Heading>
          </div>
          <Box padding="36px">
            <Box>
              <NavLink to="/">
                <Link>Notitele mele</Link>
              </NavLink>
            </Box>
            <Box>
              <NavLink to="/create-note">
                <Link>Creeaza o notita</Link>
              </NavLink>
            </Box>
          </Box>
        </Box>
        <Box width="70%" p="36px">
          <Switch>
            <Route path="/create-note" component={CreateNote} />
            <Route path="/" component={Home}></Route>
          </Switch>
        </Box>
      </Flex>
    </div>
  );
}

export default App;

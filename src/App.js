import React, { useEffect, useState } from 'react';
import { Route, Switch, NavLink, useHistory } from 'react-router-dom';
import { Flex, Box, Heading, Link } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import { getNotesAction } from './actions/notesActions';
import Note from './pages/Note';
import EditNote from './pages/EditNote';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

// const theme = {
//   blue: {
//     100: '#d43afc'
//   }
// }

function App() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res);
        setLoading(false);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        console.log('err', err);
        setLoading(false);
        history.push('/login');
      });
  }, [history]);

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
            <PrivateRoute
              path="/notes/:id/edit"
              component={EditNote}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/notes/:id"
              component={Note}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/create-note"
              component={CreateNote}
              isAuthenticated={isAuthenticated}
            />
            <Route path="/login" component={Login} />
            <PrivateRoute
              path="/"
              component={Home}
              isAuthenticated={isAuthenticated}
            />
          </Switch>
        </Box>
      </Flex>
    </div>
  );
}

export default App;

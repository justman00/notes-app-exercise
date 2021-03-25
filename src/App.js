import React, { useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Flex, Box, Heading, Link } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { get } from 'es-cookie';

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
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch(`http://localhost:5000/api/auth/check-auth`, {
      headers: {
        Authorization: token,
      },
    }) // notes/290849183671256581
      .then((res) => {
        switch (res.status) {
          case 200:
            setIsAuthenticated(true);
            break;
          default:
            setIsAuthenticated(false);
            break;
        }
      })
      .catch(console.error);
  }, []);

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
            // notes/290849183671256581
              path="/notes/:id"
              component={Note}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/create-note"
              component={CreateNote}
              isAuthenticated={isAuthenticated}
            />
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} setIsAuthenticated={setIsAuthenticated} />
              )}
            />
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

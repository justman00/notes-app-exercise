import React, { useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Home from "./pages/Home";
import NotesList from "./pages/NotesList";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import Note from "./pages/Note";
import { useDispatch } from "react-redux";
import { getNotesAction } from "./actions/notesActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesAction());
  }, [dispatch]);

  return (
    <div>
      <Box>
        <Box mt="3">
          <Text fontFamily="Great Vibes" fontSize="72px" align="center">
            Notes
          </Text>
        </Box>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <NavLink exact to="/">
              <Button colorScheme="teal" variant="ghost">
                Home
              </Button>
            </NavLink>
          </Box>
          <Box>
            <NavLink exact to="/notes-list">
              <Button colorScheme="teal" variant="ghost">
                My Notes
              </Button>
            </NavLink>
          </Box>
          <Box>
            <NavLink exact to="/add-note">
              <Button colorScheme="teal" variant="ghost">
                Add Note
              </Button>
            </NavLink>
          </Box>
        </Flex>

        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/notes-list"
          render={(props) => <NotesList {...props} />}
        />
        <Route exact path="/note/:id" render={(props) => <Note {...props} />} />
        <Route
          exact
          path="/edit-note/:id"
          render={(props) => <EditNote {...props} />}
        />
        <Route
          exact
          path="/add-note"
          render={(props) => <AddNote {...props} />}
        />
      </Box>
    </div>
  );
}

export default App;

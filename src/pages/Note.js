import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, Switch, Route } from 'react-router-dom';
import { Text, Flex, Box, Heading, Button } from '@chakra-ui/react';
import DeleteModal from '../components/DeleteModal';

function Note() {
  const notes = useSelector((state) => state.notes);
  const params = useParams();
  // [{title, ref: { value: { id:  } }},{}, {}]
  const selectedNote = notes.find((note) => note.ref.value.id === params.id);

  if (!selectedNote) {
    return (
      <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
        <Text color="red.600">Oops, nu am gasit notita</Text>
      </Flex>
    );
  }

  return (
    <Flex justifyContent="space-between">
      <Box w="70%">
        <Heading as="h1" pb="36px">
          {selectedNote.data.title}
        </Heading>

        <Text>{selectedNote.data.content}</Text>
      </Box>

      <Box w="25%">
        <Link to={`/notes/${selectedNote.ref.value.id}/edit`}>
          <Button
            backgroundColor="blue.600"
            color="white"
            textAlign="center"
            w="120px"
            display="block"
            mb="16px"
          >
            Edit
          </Button>
        </Link>
        <Link to={`/notes/${selectedNote.ref.value.id}/delete`}>
          <Button
            backgroundColor="red.600"
            color="white"
            textAlign="center"
            w="120px"
            display="block"
            mb="16px"
          >
            Delete
          </Button>
        </Link>
      </Box>
      <Switch>
        <Route path="/notes/:id/delete" component={DeleteModal} />
      </Switch>
    </Flex>
  );
}

export default Note;

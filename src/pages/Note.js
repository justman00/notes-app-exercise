import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Heading, Box, Text, Flex, Button } from '@chakra-ui/react';

function Note() {
  const params = useParams();
  const allNotes = useSelector((state) => state.notes);

  const currentNote = allNotes.find((note) => note.ref.value.id === params.id);

  if (!currentNote) {
    return (
      <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
        <Text color="red.600">Oops, nu am putut gasi notita</Text>
      </Flex>
    );
  }

  return (
    <Flex justifyContent="space-between">
      <Box w="70%">
        <Heading as="h1" pb="36px">
          {currentNote.data.title}
        </Heading>

        <Text>{currentNote.data.content}</Text>
      </Box>

      <Box w="25%">
        <Link to={`/notes/${currentNote.ref.value.id}/edit`}>
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
      </Box>
    </Flex>
  );
}

export default Note;

import React from "react";
import { useParams, Link, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Text, Flex, Box, Button, Container } from "@chakra-ui/react";
import DeleteModal from "../components/DeleteModal";

const Note = (props) => {
  const params = useParams();
  const notesList = useSelector((state) => state.notes);

  const currentNote = notesList.find((note) => note.ref.value.id === params.id);

  if (!currentNote) {
    return (
      <Text align="center" mt="6" color="teal" fontWeight="semibold">
        Loading note data...
      </Text>
    );
  }

  return (
    <Container align="center">
      <Flex
        justifyContent="space-between"
        mt="10"
        overflow="hidden"
        padding="12px"
        boxShadow="md"
        borderRadius="8px"
        marginBottom="12px"
        backgroundColor="ivory"
      >
        <Box w="80%">
          <Text
            fontSize="lg"
            marginTop="1"
            fontWeight="semibold"
            as="h3"
            lineHeight="tight"
            isTruncated
            pb="10px"
          >
            {currentNote.data.title}
          </Text>

          <Text>{currentNote.data.content}</Text>
          {currentNote.data.tags ? (
            <Text fontWeight="semibold">{currentNote.data.tags}</Text>
          ) : (
            ""
          )}
        </Box>

        <Box w="20%">
          <Link to={`/edit-note/${currentNote.ref.value.id}`}>
            <Button
              backgroundColor="teal.600"
              color="white"
              textAlign="center"
              w="80px"
              display="block"
              mb="16px"
            >
              Edit
            </Button>
          </Link>
          <Link to={`/note/${currentNote.ref.value.id}/delete`}>
            <Button
              backgroundColor="red.600"
              color="white"
              textAlign="center"
              w="80px"
              display="block"
              mb="16px"
            >
              Delete
            </Button>
          </Link>
        </Box>
      </Flex>
      <Switch>
        <Route exact path="/note/:id/delete" component={DeleteModal} />
      </Switch>
    </Container>
  );
};

export default Note;

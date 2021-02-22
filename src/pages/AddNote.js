import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Text, Box } from "@chakra-ui/react";
import NoteForm from "../components/NoteForm";
import { addNoteAction } from "../actions/notesActions";

const AddNote = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmitCallback = (note) => {
    dispatch(addNoteAction(note)).then(() => {
      history.push("/notes-list");
    });
  };

  return (
    <Box mt="6">
      <Text align="center" fontWeight="semibold">
        Add Form:{" "}
      </Text>
      <NoteForm onSubmitCallback={onSubmitCallback} />
    </Box>
  );
};

export default AddNote;

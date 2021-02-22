import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Text, Box } from "@chakra-ui/react";
import NoteForm from "../components/NoteForm";
import { updateNoteAction } from "../actions/notesActions";

function EditNote() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const notesList = useSelector((state) => state.notes);

  const currentNote = notesList.find((note) => note.ref.value.id === params.id);

  const onSubmitCallback = (note) => {
    const { id } = currentNote.ref.value;
    dispatch(updateNoteAction(id, note)).then(() => {
      history.push("/notes-list");
    });
  };

  const onClickCancelButton = (e) => {
    history.push(`/note/${params.id}`);
    //history.goBack();
  };
  return (
    <Box mt="6">
      <Text align="center" fontWeight="semibold">
        Edit Form:{" "}
      </Text>
      <NoteForm
        onSubmitCallback={onSubmitCallback}
        initialNote={currentNote.data}
        showCancelButton
        onClickCancelButton={onClickCancelButton}
      />
    </Box>
  );
}

export default EditNote;

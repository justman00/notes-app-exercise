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

  const currentNote = notesList.find((note) => note._id === params.id);
  // console.log("currentNote:", currentNote);
  const onSubmitCallback = (note) => {
    const note_id = currentNote._id;
    dispatch(updateNoteAction(note_id, note)).then(() => {
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
        initialNote={currentNote}
        showCancelButton
        onClickCancelButton={onClickCancelButton}
      />
    </Box>
  );
}

export default EditNote;

import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import NoteForm from '../components/NoteForm';
import { editNoteAction } from '../actions/notesActions';

function EditNote() {
  const notes = useSelector((state) => state.notes);
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const selectedNote = notes.find((note) => note.ref.value.id === params.id);

  const onSubmitCallback = (value) => {
    dispatch(editNoteAction(params.id, value)).then(() => {
      history.push('/');
    });
  };

  const secondaryButtonClickAction = (e) => {
    history.goBack();
  };

  if (!selectedNote) {
    return <Text>Loading...</Text>;
  }

  return (
    <div>
      <Heading as="h1" pb="36px">
        Editeaza o notita!
      </Heading>

      <NoteForm
        inputValues={selectedNote.data}
        onSubmitCallback={onSubmitCallback}
        showCancelButton
        secondaryButtonClickAction={secondaryButtonClickAction}
      />
    </div>
  );
}

export default EditNote;

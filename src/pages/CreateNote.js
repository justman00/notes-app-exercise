import React from 'react';
import { Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { createNoteAction } from '../actions/notesActions';
import { useHistory } from 'react-router-dom';
import NoteForm from '../components/NoteForm';

function CreateNote() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitCallback = (value) => {
    dispatch(createNoteAction(value)).then(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <Heading as="h1" pb="36px">
        Creeaza o notita!
      </Heading>

      <NoteForm onSubmitCallback={onSubmitCallback} />
    </div>
  );
}

export default CreateNote;

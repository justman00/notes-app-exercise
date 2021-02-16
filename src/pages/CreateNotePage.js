import React from 'react';
import { Heading } from '@chakra-ui/react';
import NotesForm from '../components/NotesForm';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/notesActions';
import { useHistory } from 'react-router-dom';

function CreateNotePage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmitCallback = (note) => {
    dispatch(addNote(note)).then(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <Heading as="h1" pb="36px">
        Creeaza o notita noua
      </Heading>

      <NotesForm onSubmitCallback={onSubmitCallback} />
    </div>
  );
}

export default CreateNotePage;

import React from 'react';
import { Heading } from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NotesForm from '../components/NotesForm';
import { changeNote } from '../actions/notesActions';

function EditPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const allNotes = useSelector((state) => state.notes);

  const currentNote = allNotes.find((note) => note.ref.value.id === params.id);

  const onSubmitCallback = (note) => {
    const { id } = currentNote.ref.value;
    console.log('id', id, note);
    dispatch(changeNote(id, note)).then(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <Heading as="h1" pb="36px">
        Editeaza notita
      </Heading>

      <NotesForm
        onSubmitCallback={onSubmitCallback}
        initialNote={currentNote.data}
      />
    </div>
  );
}

export default EditPage;

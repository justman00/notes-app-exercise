import { getAllNotes, deleteNote, editNote, createNote } from '../api';

export const FETCH_ACTIONS_START = 'FETCH_ACTIONS_START';
export const FETCH_ACTIONS_SUCCESS = 'FETCH_ACTIONS_SUCCESS';
export const FETCH_ACTIONS_FAILURE = 'FETCH_ACTIONS_FAILURE';

export const fetchNotes = () => async (dispatch) => {
  dispatch({ type: FETCH_ACTIONS_START });

  try {
    const notes = await getAllNotes();
    dispatch({ type: FETCH_ACTIONS_SUCCESS, payload: notes });
  } catch (error) {
    dispatch({ type: FETCH_ACTIONS_FAILURE, payload: error.message });
  }
};

export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_FAILURE = 'CREATE_NOTE_FAILURE';

export const addNote = (note) => async (dispatch) => {
  try {
    const newNote = await createNote(note);

    dispatch({ type: CREATE_NOTE_SUCCESS, payload: newNote });
  } catch (error) {
    console.error(error);
    dispatch({ type: CREATE_NOTE_FAILURE, payload: error.message });
  }
};

export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const EDIT_NOTE_FAILURE = 'EDIT_NOTE_FAILURE';

export const changeNote = (noteId, note) => async (dispatch) => {
  try {
    const newNote = await editNote(noteId, note);

    dispatch({ type: EDIT_NOTE_SUCCESS, payload: newNote });
  } catch (error) {
    dispatch({ type: EDIT_NOTE_FAILURE, payload: error.message });
  }
};

export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const removeNote = (noteId) => async (dispatch) => {
  try {
    const deletedNote = await deleteNote(noteId);
    dispatch({ type: DELETE_NOTE_SUCCESS, payload: deletedNote });
  } catch (error) {
    dispatch({ type: DELETE_NOTE_FAILURE, payload: error.message });
  }
};

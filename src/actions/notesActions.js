import { getAllNotes, deleteNote, editNote, createNote } from "../api";

export const START_GETTING_NOTES = "START_GETTING_NOTES";
export const SUCCESS_GETTING_NOTES = "SUCCESS_GETTING_NOTES";
export const ERROR_GETTING_NOTES = "ERROR_GETTING_NOTES";

export const getNotesAction = () => (dispatch) => {
  dispatch({ type: START_GETTING_NOTES });
  getAllNotes()
    .then((res) => {
      dispatch({
        type: SUCCESS_GETTING_NOTES,
        payload: res,
      });
      console.log("success: ", res);
    })
    .catch((error) => {
      dispatch({
        type: ERROR_GETTING_NOTES,
        payload:
          "Sorry! The page you were trying to access is currently unavailable.",
      });
    });
};

export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE";

export const addNoteAction = (note) => async (dispatch) => {
  try {
    const addedNote = await createNote(note);

    dispatch({ type: ADD_NOTE_SUCCESS, payload: addedNote });
  } catch (error) {
    console.error(error);
    dispatch({ type: ADD_NOTE_FAILURE, payload: error.message });
  }
};

export const EDIT_NOTE_SUCCESS = "EDIT_NOTE_SUCCESS";
export const EDIT_NOTE_FAILURE = "EDIT_NOTE_FAILURE";

export const updateNoteAction = (noteId, note) => async (dispatch) => {
  try {
    const updatedNote = await editNote(noteId, note);

    dispatch({ type: EDIT_NOTE_SUCCESS, payload: updatedNote });
  } catch (error) {
    dispatch({ type: EDIT_NOTE_FAILURE, payload: error.message });
  }
};

export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";

export const deleteNoteAction = (noteId) => async (dispatch) => {
  try {
    const deletedNote = await deleteNote(noteId);
    dispatch({ type: DELETE_NOTE_SUCCESS, payload: deletedNote });
  } catch (error) {
    dispatch({ type: DELETE_NOTE_FAILURE, payload: error.message });
  }
};

import { getAllNotes, deleteNote, editNote } from '../api';

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

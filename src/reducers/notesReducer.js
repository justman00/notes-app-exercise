import {
  GET_NOTES_LOADING_START,
  GET_NOTES_SUCCESS,
  GET_NOTES_ERROR,
  CREATE_NOTE_SUCCESS,
  EDIT_NOTE_SUCCESS,
  DELETE_NOTE_SUCCESS,
} from '../actions/notesActions';

const initialState = {
  notes: [],
  loading: false,
  error: '',
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload,
        loading: false,
        error: '',
      };
    case GET_NOTES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        notes: [...state.notes, action.payload],
      };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        notes: state.notes.map((note) => {
          if (note.ref.value.id === action.payload.ref.value.id) {
            // inlocuirea
            return action.payload;
          }

          return note;
        }),
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        notes: state.notes.filter(
          (note) => note.ref.value.id !== action.payload.ref.value.id
        ),
      };
    default:
      return state;
  }
};

export default notesReducer;

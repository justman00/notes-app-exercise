import {
  FETCH_ACTIONS_SUCCESS,
  FETCH_ACTIONS_START,
  FETCH_ACTIONS_FAILURE,
  CREATE_NOTE_SUCCESS,
  EDIT_NOTE_SUCCESS,
  DELETE_NOTE_SUCCESS,
} from '../actions/notesActions';

const initialState = {
  loading: false,
  notes: [],
  error: '',
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIONS_SUCCESS:
      return {
        ...state,
        notes: action.payload,
        error: '',
        loading: false,
      };

    case FETCH_ACTIONS_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ACTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case CREATE_NOTE_SUCCESS:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.ref.value.id === action.payload.ref.value.id) {
            return action.payload;
          }
          return note;
        }),
      };

    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter(
          (note) => note.ref.value.id !== action.payload.ref.value.id
        ),
      };
    default:
      return state;
  }
};

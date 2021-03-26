import {
  START_GETTING_NOTES,
  SUCCESS_GETTING_NOTES,
  ERROR_GETTING_NOTES,
  ADD_NOTE_SUCCESS,
  EDIT_NOTE_SUCCESS,
  DELETE_NOTE_SUCCESS,
} from "../actions/notesActions";

const initialState = {
  loading: false,
  error: "",
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GETTING_NOTES:
      return { ...state, loading: true };
    case SUCCESS_GETTING_NOTES:
      return { ...state, loading: false, notes: action.payload, error: "" };
    case ERROR_GETTING_NOTES:
      return { ...state, loading: false, error: action.payload };

    case ADD_NOTE_SUCCESS:
      return { ...state, notes: [...state.notes, action.payload] };

    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        notes: state.notes.map((note) => {
          if (note._id === action.payload._id) {
            return action.payload;
          }
          return note;
        }),
      };

    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        notes: state.notes.filter((note) => {
          return note._id !== action.payload._id;
        }),
      };

    default:
      return state;
  }
};

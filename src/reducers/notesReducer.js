import {
  FETCH_ACTIONS_SUCCESS,
  FETCH_ACTIONS_START,
  FETCH_ACTIONS_FAILURE,
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
    default:
      return state;
  }
};

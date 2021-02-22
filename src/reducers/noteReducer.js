import {
  GET_ALL_NOTES_START, 
  GET_NOTES_SUCCESS, 
  GET_NOTES_ERROR 
} from './../actions/GET_ALL_NOTES';

import {
  ADD_NOTE_SUCCESS,
  ADD_NOTE_ERROR
} from './../actions/ADD_NOTE';

const initialState = {
   notes: [],
   loading: false,
   error: ''
}

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES_START:
      return {
        ...state,
        loading: true
      }
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload,
        loading: false
      }
    case GET_NOTES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case ADD_NOTE_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case ADD_NOTE_SUCCESS:
      console.log('i am in reudcer')
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
    default:
      return state;
  }
};

export default noteReducer;

import {
  GET_ALL_NOTES_START, 
  GET_NOTES_SUCCESS, 
  GET_NOTES_ERROR 
} from './../actions/GET_ALL_NOTES';

import {
  ADD_NOTE_SUCCESS,
  ADD_NOTE_ERROR
} from './../actions/ADD_NOTE';

import {
  EDIT_NOTE,
  EDIT_NOTE_ERROR
} from './../actions/EDIT_NOTE';

import {
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_ERROR
} from './../actions/DELETE_NOTE';

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
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }

    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if(note.ref.value.id === action.payload.ref.value.id) {
            return action.payload
          }
          return note;
        })
      }

    case EDIT_NOTE_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter(note => note.ref.value.id !== action.payload.ref.value.id)
      }

    case DELETE_NOTE_ERROR: 
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

export default noteReducer;

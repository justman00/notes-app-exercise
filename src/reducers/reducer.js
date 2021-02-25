const initialState = {
  notes: [],
  note: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-NOTES":
      return { ...state, notes: action.payload };
    case "GET-NOTE":
      return { ...state, note: action.payload };
    case "CREATE_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "EDIT_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) => {

          if (note.ref.value.id === action.payload.ref.value.id) {
            // gasim id-ul notitei editate si inlocuim notita
            return action.payload;
          }
          return note;
        
        }),
      };

    case "DELETE_NOTE_SUCCESS":
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

const initialState = {
  notes: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "get_notes":
      return { ...state, notes: action.payload };
    default:
      return state;
  }
};

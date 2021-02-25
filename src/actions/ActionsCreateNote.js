import createNote from "../api/createNote";

export const actionCreateNote = (note) => {
  return async (dispatch) => {
    try {
      const crNote = await createNote(note);
      dispatch({
        type: "CREATE_NOTE",
        payload: crNote,
      });
    } catch (error) {
      console.log("error create note");
    }
  };
};

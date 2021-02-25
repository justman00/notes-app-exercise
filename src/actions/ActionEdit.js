import { editNote } from "../api";

export const editNoteAction = (Id, note) => {
  return async (dispatch) => {
    try {
      const editedNote = await editNote(Id, note);
     

      dispatch({ type: "EDIT_NOTE", payload: editedNote });
    } catch (error) {
      console.log("error edit", error);
    }
  };
};

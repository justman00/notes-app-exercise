export const editNoteAction = (noteId, note) => {
  return async (dispatch) => {
    try {
      const editedNote = await editNote(noteId, note);
      dispatch({ type: "EDIT_NOTE", payload: editedNote });
    } catch (error) {
      console.log("error edit");
    }
  };
};

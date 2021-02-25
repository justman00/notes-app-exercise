import { deleteNote } from "../api";

export const actionDelete = (id) => {
  return (dispatch) => {
    return deleteNote(id).then((deletedNote) => {
      console.log("deleted-", deletedNote);
      dispatch({ type: "DELETE_NOTE_SUCCESS", payload: deletedNote });
    });
  };
};

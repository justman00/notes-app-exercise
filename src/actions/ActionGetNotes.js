import getAllNotes from "../api/getAllNotes";
import getNote from "../api/getNote";

export const actionGetNotes = () => (dispatch) => {
  getAllNotes().then((res) => {
    dispatch({
      type: "GET-NOTES",
      payload: res,
    });
  });
};

export const actionGetNote = (id) => (dispatch) => {
  getNote(id).then((res) => {
    dispatch({
      type: "GET-NOTE",
      payload: res,
    });
  });
};

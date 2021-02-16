import getAllNotes from "../api/getAllNotes";

export const actionGetNotes = () => (dispatch) => {
  getAllNotes().then((res) => {
    console.log("...",res)
    dispatch({
      type: "get_notes",
      payload: res,
    });
  });
};

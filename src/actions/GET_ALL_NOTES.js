export const GET_ALL_NOTES_START = "GET_ALL_NOTES_START";
export const GET_NOTES_SUCCESS = "GET_NOTES_SUCCESS";
export const GET_NOTES_ERROR = "GET_NOTES_ERROR";

export const getNotes = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_ALL_NOTES_START,
    });

    try {
      //request la server
      await fetch(`https://keeping-note.herokuapp.com/api/notes`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log('data: ',data)
            dispatch({
                type: GET_NOTES_SUCCESS,
                payload: data,
              });
        })

    } catch (error) {
        console.log('error: ',error)
      dispatch({
        type: GET_NOTES_ERROR,
        payload: "Something went wrong",
      });
    }
  };
};

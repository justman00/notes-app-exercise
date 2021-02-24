import getAllNotes from './../api/getAllNotes';
export const GET_ALL_NOTES_START = 'GET_ALL_NOTES_START';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';

export const getNotes = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_ALL_NOTES_START
        })

        try {
            const notes = await getAllNotes();

            dispatch({
                type: GET_NOTES_SUCCESS,
                payload: notes
            })
        } catch (error) {
            dispatch({
                type: GET_NOTES_ERROR,
                payload: 'Something went wrong'
            })
        }
    }
}
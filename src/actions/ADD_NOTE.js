import createNote from './../api/createNote';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_ERROR = 'ADD_NOTE_ERROR';

export const addNote = (note) => {
    return async (dispatch) => {
        try {
            const createdNote = await createNote(note);
            dispatch({
                type: ADD_NOTE_SUCCESS,
                payload: createdNote
            })
        } catch (error) {
            dispatch({
                type: ADD_NOTE_ERROR,
                payload: 'Something went wrong'
            })
        }
    }
}

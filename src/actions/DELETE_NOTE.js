import deleteNote from './../api/deleteNote';

export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_ERROR = 'DELETE_NOTE_ERROR';

export const removeNote = (noteId) => {
    return async(dispatch) => {
        try {
            const deletedNote = await deleteNote(noteId);
            dispatch({
                type: DELETE_NOTE_SUCCESS,
                payload: deletedNote
            })
        } catch (error) {
            dispatch({
                type: DELETE_NOTE_ERROR,
                payload: 'Something went wrong'
            })
        }
    }
}
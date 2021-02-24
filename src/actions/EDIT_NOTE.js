import EditNote from './../api/editNote';

export const EDIT_NOTE = 'EDIT_NOTE';
export const EDIT_NOTE_ERROR = 'EDIT_NOTE_ERROR';

export const editNote = (noteId, noteData) => {
    return async (dispatch) => {
        try {
            const updatedNote = await EditNote(noteId, noteData);
            dispatch({
                type: EDIT_NOTE,
                payload: updatedNote
            })
        } catch (error) {
            dispatch({
                type: EDIT_NOTE_ERROR,
                payload: error
            })
        }
    }
}
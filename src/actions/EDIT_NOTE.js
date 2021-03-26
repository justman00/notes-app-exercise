export const EDIT_NOTE = 'EDIT_NOTE';
export const EDIT_NOTE_ERROR = 'EDIT_NOTE_ERROR';

export const editNote = (noteId, noteData) => {
    return async (dispatch) => {
        try {
            //const updatedNote = await EditNote(noteId, noteData);
            fetch(`https://keeping-note.herokuapp.com/api/notes/${noteId}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type' : 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(noteData)
            }).then((updatedNote) => {
                dispatch({
                    type: EDIT_NOTE,
                    payload: updatedNote
                })
            })
        } catch (error) {
            dispatch({
                type: EDIT_NOTE_ERROR,
                payload: error
            })
        }
    }
}
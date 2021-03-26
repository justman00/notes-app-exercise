export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_ERROR = 'ADD_NOTE_ERROR';

export const addNote = (note) => {
    return async (dispatch) => {
        try {
            const createdNote = await fetch('https://keeping-note.herokuapp.com/api/notes', {
                method: 'POST',
                headers: {
                    Authorization: localStorage.getItem('token'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: note,
            })
            console.log('created note: ',createdNote)
            
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

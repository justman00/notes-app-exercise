const TYPE = 'DELETE_NOTE';

export const deleteNote = (noteId) => ({
    type: TYPE,
    payload: noteId
})
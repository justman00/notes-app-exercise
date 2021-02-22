const TYPE = 'EDIT_NOTE';

export const editNote = (noteId) => ({
    type: TYPE,
    payload: noteId
})
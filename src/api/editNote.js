import { client, q } from '../config/db';

const editNote = (noteId, newNote) =>
  client
    .query(
      q.Update(q.Ref(q.Collection('notes'), noteId), {
        data: { ...newNote } ,
      })
    )

export default editNote;

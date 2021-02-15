import { client, q } from '../config/db';

const editNote = (noteId, newNote) =>
  client
    .query(
      q.Update(q.Ref(q.Collection('notes'), noteId), {
        data: { text: { ...newNote } },
      })
    )
    .then((ret) => console.log(ret))
    .catch((err) => console.warn(err));

export default editNote;

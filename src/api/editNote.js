import { client, q } from '../config/db';

// {
//   title: '',
//   content: ''
// }
const editNote = (noteId, editedNote) =>
  client.query(
    q.Update(q.Ref(q.Collection('notes'), noteId), {
      data: { ...editedNote },
    })
  );

export default editNote;

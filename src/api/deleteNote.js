import { client, q } from '../config/db'

const deleteNote = noteId => client.query(
  q.Delete(q.Ref(q.Collection('notes'), noteId))
)
.then(res => res)
.catch(err => console.warn(err.message))

export default deleteNote
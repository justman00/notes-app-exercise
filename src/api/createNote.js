import { client, q } from '../config/db';

const createNote = (note) =>
  client
    .query(
      q.Create(q.Collection('notes'), {
        data: {
          ...note,
        },
      })
    )
    .then((ret) => ret)
    .catch((err) => console.warn(err));

export default createNote;

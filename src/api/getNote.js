import { client, q } from '../config/db';

const getNote = (id) =>
  client
    .query(q.Get(q.Ref(q.Collection('notes'), id)))
    .then((response) => {
      return response;
    })
    .catch((error) => console.log('error', error.message));

export default getNote;

import React, { useEffect } from 'react';

import { Heading, Text, Flex } from '@chakra-ui/react';
import NoteCard from '../components/NoteCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes } from '../actions/notesActions';

function Home() {
  const notes = useSelector((state) => state.notes);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div>
      <Heading as="h1" pb="36px">
        Notitele mele
      </Heading>
      {!loading ? (
        <Flex justifyContent="space-between" flexWrap="wrap">
          {notes.map((note, i) => (
            <NoteCard key={i} note={note} />
          ))}
        </Flex>
      ) : (
        <Text>Loading..</Text>
      )}
    </div>
  );
}

export default Home;

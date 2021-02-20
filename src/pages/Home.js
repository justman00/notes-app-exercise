import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import NoteCard from '../components/NoteCard';

function Home() {
const { notes, loading } = useSelector((state) => ({
    notes: state.notes,
    loading: state.loading,
  }));

  return (
    <div>
      <Heading as="h1" paddingBottom="36px">
        Notitile mele
      </Heading>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        notes.map((note) => <NoteCard note={note} />)
      )}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     notes: state.notes,
//     loading: state.loading,
//   };
// };

// export default connect(mapStateToProps)(Home);

export default Home;

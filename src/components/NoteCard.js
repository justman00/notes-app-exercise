import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Text } from '@chakra-ui/react';

function NoteCard({ note }) {
  if (!note || !note.data.title || !note.data.content) {
    return null;
  }

  return (
    <Link to={`/notes/${note.ref.value.id}`}>
      <Box
        data-testid="note-card"
        width="250px"
        overflow="hidden"
        padding="12px"
        boxShadow="md"
        borderRadius="8px"
        marginBottom="12px"
      >
        <Text
          fontSize="lg"
          marginTop="1"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          isTruncated
        >
          {note.data.title}
        </Text>
        <Text
          mt="1"
          lineHeight="tight"
          isTruncated
          maxH="50px"
          overflow="hidden"
        >
          {note.data.content}
        </Text>
      </Box>
    </Link>
  );
}

export default NoteCard;

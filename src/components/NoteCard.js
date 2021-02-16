import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Text } from '@chakra-ui/react';

function NoteCard({ note }) {
  return (
    <Link to={`/notes/${note.ref.value.id}`}>
      <Box
        w="250px"
        overflow="hidden"
        p="12px"
        boxShadow="md"
        borderRadius="8px"
        mb="12px"
      >
        <Text
          fontSize="lg"
          mt="1"
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

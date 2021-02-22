import React from "react";
import { Link } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";

const NoteCard = ({ note }) => {
  return (
    <Link to={`/note/${note.ref.value.id}`}>
      <Box
        width="400px"
        overflow="hidden"
        padding="12px"
        boxShadow="md"
        borderRadius="8px"
        marginBottom="12px"
        backgroundColor="ivory"
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

        {/* {note.data.tags.split(/\W/).map((tag) => {
          return <Text fontWeight="semibold">#{tag}</Text>;
        })}*/}
      </Box>
    </Link>
  );
};

export default NoteCard;

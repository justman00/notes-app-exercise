import React from "react";
import { Box, Image } from "@chakra-ui/react";
import undraw_notes from "../undraw_notes.png";

const Home = (props) => {
  return (
    <Box align="center">
      <Box>
        <Image boxSize="-moz-min-content" src={undraw_notes} alt="notes" />
      </Box>
    </Box>
  );
};
export default Home;

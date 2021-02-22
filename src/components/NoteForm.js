import React, { useState } from "react";
import { Container, Button, Textarea, Input } from "@chakra-ui/react";

const initialState = {
  title: "",
  content: "",
  tags: "",
};

const NoteForm = ({
  initialNote = initialState,
  onSubmitCallback,
  showCancelButton = false,
  onClickCancelButton,
}) => {
  const [value, setValue] = useState(initialNote);

  const handleInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback(value);
  };

  return (
    <Container mb="6">
      <form onSubmit={onSubmit}>
        <Input
          name="title"
          value={value.title}
          onChange={handleInputChange}
          placeholder="Title"
          mb="20px"
        />
        <Textarea
          value={value.content}
          onChange={handleInputChange}
          name="content"
          placeholder="Details..."
          size="sm"
          mb="10px"
          minHeight="400px"
        />
        <Input
          name="tags"
          value={value.tags}
          onChange={handleInputChange}
          placeholder="business, lifestyle, programming, etc."
          mb="20px"
        />

        <Button
          type="submit"
          backgroundColor="teal"
          color="white"
          marginRight="10px"
        >
          Submit
        </Button>
        {showCancelButton ? (
          <Button
            onClick={onClickCancelButton}
            backgroundColor="red.600"
            color="white"
            type="button"
          >
            Cancel
          </Button>
        ) : null}
      </form>
    </Container>
  );
};

export default NoteForm;

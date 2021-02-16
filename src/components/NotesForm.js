import React from 'react';
import { Textarea, Input, Button } from '@chakra-ui/react';

const initialState = {
  title: '',
  content: '',
  tags: [],
};

function NotesForm({ onSubmitCallback, initialNote = initialState }) {
  const [value, setValue] = React.useState(initialNote);

  const handleInputChange = (e) => {
    setValue({ ...value,  [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
      e.preventDefault();
      onSubmitCallback(value);
  }

  console.log(value)

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="title"
        value={value.title}
        onChange={handleInputChange}
        placeholder="Titlul notitei"
        mb="24px"
      />
      <Textarea
        value={value.content}
        onChange={handleInputChange}
        name="content"
        placeholder="Detaliile notitei"
        size="sm"
        mb="24px"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default NotesForm;

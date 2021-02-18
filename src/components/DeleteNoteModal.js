import React from 'react';
import { createPortal } from 'react-dom';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { removeNote } from '../actions/notesActions';
import { Heading, Button, Box } from '@chakra-ui/react';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  background: white;
  border-radius: 8px;
  padding: 32px;
`;

const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background: black;
  opacity: 0.5;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

const modalRoot = document.getElementById('modal_root');

function DeleteNoteModal() {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  const onDismiss = () => {
    history.push(`/notes/${params.id}`);
  };

  const onDelete = () => {
    dispatch(removeNote(params.id));
    history.push('/');
  };

  return createPortal(
    <Box display="relative" w="100%" h="100%">
      <ModalBackground onClick={onDismiss} />
      <ModalContainer>
        <Heading pb="24px" size="md">
          Sunteti siguri ca doriti sa stergeti notita?
        </Heading>
        <Button
          backgroundColor="blue.600"
          color="white"
          mr="32px"
          onClick={onDismiss}
        >
          Cancel
        </Button>
        <Button backgroundColor="red.600" color="white" onClick={onDelete}>
          Delete
        </Button>
      </ModalContainer>
    </Box>,
    modalRoot
  );
}

export default DeleteNoteModal;

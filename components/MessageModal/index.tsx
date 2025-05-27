import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalMessage,
} from './styles'; 

interface MessageModalProps {
  title: string;
  message: string;
  onClose: () => void; 
}

const MessageModal: React.FC<MessageModalProps> = ({ title, message, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}> 
      <ModalContent onClick={(e) => e.stopPropagation()}> 
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MessageModal;
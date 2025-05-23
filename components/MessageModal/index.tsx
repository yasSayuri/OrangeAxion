// components/MessageModal/index.tsx
import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalMessage,
  ModalButton,
} from './styles'; // Importa os estilos que acabamos de criar

interface MessageModalProps {
  title: string;
  message: string;
  onClose: () => void; // Função para fechar o modal
}

const MessageModal: React.FC<MessageModalProps> = ({ title, message, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}> {/* Clica no overlay para fechar */}
      <ModalContent onClick={(e) => e.stopPropagation()}> {/* Impede que o clique no conteúdo do modal feche o modal */}
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <ModalButton onClick={onClose}>OK</ModalButton> {/* Botão para fechar o modal */}
      </ModalContent>
    </ModalOverlay>
  );
};

export default MessageModal;
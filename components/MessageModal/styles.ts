// components/MessageModal/styles.ts
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed; /* Fixa o modal na tela, sobre todo o conteúdo */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente escuro */
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  z-index: 1000; /* Garante que o modal fique acima de tudo */
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground}; /* Fundo branco do modal */
  padding: ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  max-width: 400px; /* Largura máxima do modal */
  width: 90%; /* Ocupa 90% da largura disponível, até o max-width */
  text-align: center; /* Centraliza o texto dentro do modal */
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium}; /* Espaçamento entre os elementos internos */
`;

export const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

export const ModalMessage = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primaryButtonStart}, ${({ theme }) => theme.colors.primaryButtonEnd});
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: opacity 0.3s ease;
  font-weight: bold; /* Para o texto do botão */
  &:hover {
    opacity: 0.9;
  }
`;
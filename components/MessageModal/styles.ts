import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  justify-content: center; 
  align-items: center; 
  z-index: 1000; 
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  max-width: 400px; 
  width: 90%; 
  text-align: center; 
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium}; 
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
  font-weight: bold; 
  &:hover {
    opacity: 0.9;
  }
`;
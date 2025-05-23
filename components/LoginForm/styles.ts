import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacings.extraLarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  width: 100%;
  max-width: 400px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.medium}; 
  position: relative; 
  z-index: 10; 
`;

export const LogoWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.large};
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
  font-weight: 500; 
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px; 
  padding-right: 40px; 
  border: 1px solid #4A4A4A;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #888; 
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: 1.1rem; 
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  input[type="checkbox"] {
    margin-right: 8px;
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 3px;
    appearance: none; 
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    &:checked {
      background-color: ${({ theme }) => theme.colors.primaryButtonStart}; 
      border-color: ${({ theme }) => theme.colors.primaryButtonStart};
    }
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const ForgotPasswordLink = styled.a`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.link};
  text-align: left;
  width: 100%; 
  margin-bottom: ${({ theme }) => theme.spacings.large};
  &:hover {
    text-decoration: underline;
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primaryButtonStart}, ${({ theme }) => theme.colors.primaryButtonEnd});
  color: white;
  font-size: 1.1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 20px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: ${({ theme }) => theme.spacings.medium} 0;
  color: #909090;
  font-size: 0.85rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  &:not(:empty)::before {
    margin-right: 1rem;
  }

  &:not(:empty)::after {
    margin-left: 1rem;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  font-weight: 500;
  border: 1px solid #9B9B9B;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const TermsAndPrivacy = styled.div`
  margin-top: ${({ theme }) => theme.spacings.large};
  font-size: 0.8rem;
  color: #4A4A4A;
  display: flex;
  gap: 10px; 
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center; 
  min-height: 100vh;
  width: 100vw; 
  padding-left: 300px;
  background-color: ${({ theme }) => theme.colors.background}; 
  background-image: url('/bg.jpg');
  background-position: right center; 
  background-repeat: no-repeat; 
  background-size: contain; 
  background-size: 50% auto;

   @media (min-width: 1600px) {
    padding-left: 600px;
  }

`;
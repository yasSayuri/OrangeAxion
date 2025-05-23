import React, { useState } from 'react';
import Image from 'next/image';
import LogoImg from '../../public/logo.png'; 
import { FiMail, FiLock } from 'react-icons/fi'; 

import {
  FormContainer,
  LogoWrapper,
  FormGroup,
  Label,
  InputWrapper,
  Input,
  InputIcon,
  CheckboxGroup,
  CheckboxLabel,
  ForgotPasswordLink,
  PrimaryButton,
  Separator,
  SecondaryButton,
  TermsAndPrivacy,
} from './styles';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulário enviado!');
  };

  return (
    <FormContainer>
      <LogoWrapper>
        <Image
          src={LogoImg}
          alt="ORANGE Logo"
          width={230} 
          height={30} 
          objectFit="contain" 
        />
      </LogoWrapper>

      <form onSubmit={handleSubmit} style={{ width: '100%' }}> 
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <InputWrapper>
            <Input
              type="email"
              id="email"
              placeholder="seunome@email.com"
              required
            />
            <InputIcon><FiMail /></InputIcon> 
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <InputWrapper>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              required
            />
            <InputIcon><FiLock /></InputIcon> 
          </InputWrapper>
        </FormGroup>

        <CheckboxGroup>
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={handleTogglePassword}
          />
          <CheckboxLabel htmlFor="showPassword">Mostrar a senha.</CheckboxLabel>
        </CheckboxGroup>

        <ForgotPasswordLink href="#">Problemas para acessar sua conta?</ForgotPasswordLink>

        <PrimaryButton type="submit">Acessar</PrimaryButton>
      </form>

      <Separator>ou</Separator>

      <SecondaryButton type="button">Cadastrar</SecondaryButton>

      <TermsAndPrivacy>
        <a href="#">Termos de uso</a> • <a href="#">Política de privacidade</a>
      </TermsAndPrivacy>
    </FormContainer>
  );
};

export default LoginForm;
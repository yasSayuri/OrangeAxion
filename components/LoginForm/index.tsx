import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LogoImg from '../../public/logo.png';
import { FiMail, FiLock } from 'react-icons/fi';
import MessageModal from '../MessageModal';
import { useAuth } from '../../contexts/AuthContext';

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

type ModalState = { title: string; message: string } | null;

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState<ModalState>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { login, loading } = useAuth();
  const router = useRouter();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModal(null);
    setErrorMessage(null); 

    if (!email || !password) {
      setErrorMessage('Por favor, preencha o e-mail e a senha.');
      return;
    }

    try {
      await login(email, password);
      setModal({ title: 'Sucesso!', message: 'Login realizado com sucesso! Redirecionando...' });
      setErrorMessage(null);

      setTimeout(() => {
        router.push('/inicio');
      }, 2000);
    } catch (error: unknown) {
      console.error('Erro no login:', error);
      setErrorMessage('Email ou senha incorretos.');
    }
  };

  const handleGoToRegister = () => {
    setModal({ title: 'Atenção!', message: 'O cadastro não está habilitado para o teste.' });
  };

  return (
    <>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputIcon><FiLock /></InputIcon>
            </InputWrapper>
            {errorMessage && (
              <p style={{ color: 'red', marginTop: '4px', fontSize: '0.875rem' }}>
                {errorMessage}
              </p>
            )}
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

          <PrimaryButton type="submit" disabled={loading}>
            {loading ? 'Acessando...' : 'Acessar'}
          </PrimaryButton>
        </form>

        <Separator>ou</Separator>

        <SecondaryButton type="button" onClick={handleGoToRegister} disabled={loading}>
          Cadastrar
        </SecondaryButton>

        <TermsAndPrivacy>
          <a href="#">Termos de uso</a> • <a href="#">Política de privacidade</a>
        </TermsAndPrivacy>
      </FormContainer>

      {modal && (
        <MessageModal
          title={modal.title}
          message={modal.message}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
};

export default LoginForm;

// components/LoginForm/index.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LogoImg from '../../public/logo.png';
import { FiMail, FiLock } from 'react-icons/fi';
import MessageModal from '../MessageModal';
// import { useRouter } from 'next/router'; // REMOVIDO: Não precisamos mais dele aqui para navegação
import { useAuth } from '../../context/AuthContext';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{ title: string; message: string } | null>(null);

  // const router = useRouter(); // REMOVIDO: Não precisamos mais dele aqui
  const { user, login, isLoading } = useAuth();

  // Efeito para redirecionar se o usuário já estiver logado
  useEffect(() => {
    if (!isLoading && user) {
      // Se o usuário já estiver autenticado e o carregamento inicial terminou, redirecione
      // (iremos criar a página /pessoas ou /dashboard em breve)
      window.location.href = '/pessoas'; // Redirecionamento forçado para o exemplo inicial
    }
  }, [user, isLoading]); // Removido 'router' das dependências

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setModal(null);

    try {
      const apiUrl = 'http://localhost:1337/api/auth/local'; // Endpoint de login do Strapi

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user.email, data.jwt);
        setModal({ title: 'Sucesso!', message: 'Login realizado com sucesso!' });
        // Redireciona imediatamente após o login bem-sucedido
        window.location.href = '/pessoas'; // Redirecionamento forçado, ou use router.push se preferir
      } else {
        const errorMessage = data.error?.message || 'Ocorreu um erro no login. Verifique suas credenciais.';
        setModal({ title: 'Erro de Login', message: errorMessage });
        console.error('Login failed:', data);
      }
    } catch (error) {
      setModal({ title: 'Erro de Conexão', message: 'Não foi possível conectar ao servidor. Verifique sua conexão ou se a API está online.' });
      console.error('Network error or API down:', error);
    } finally {
      setLoading(false);
    }
  };

  // Funções de navegação do router foram removidas
  // const handleGoToRegister = () => { router.push('/cadastro'); };

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

       
        <SecondaryButton type="button" disabled> 
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
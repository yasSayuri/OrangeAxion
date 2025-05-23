// pages/index.tsx
import Head from 'next/head';
import LoginForm from '../components/LoginForm'; // Importe o componente LoginForm
import { PageWrapper } from '../components/LoginForm/styles'; // Importe o PageWrapper para centralizar

export default function Home() {
  return (
    <>
      <Head>
        <title>Orange Axion - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* PageWrapper centraliza o formulário na tela */}
      <PageWrapper>
        <LoginForm />
      </PageWrapper>
    </>
  );
}
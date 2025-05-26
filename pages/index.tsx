import Head from 'next/head';
import LoginForm from '../components/LoginForm'; 
import { PageWrapper } from '../components/LoginForm/styles'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Orange Axion - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <LoginForm />
      </PageWrapper>
    </>
  );
}
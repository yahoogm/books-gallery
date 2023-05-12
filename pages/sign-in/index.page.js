import { CardSignIn } from '@/components/organisme';
import { HeaderAndFooter } from '@/components/templates';
import Head from 'next/head';

const SignIn = () => {
  return (
    <HeaderAndFooter>
      <Head>
        <title>Books Gallery - Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardSignIn />
    </HeaderAndFooter>
  );
};

export default SignIn;

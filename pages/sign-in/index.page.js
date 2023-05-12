import CardSignIn from '@/components/organisme/CardSignIn/CardSignIn.organism';
import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';
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

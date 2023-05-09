import CardSignIn from '@/components/organisme/CardSignIn/CardSignIn.organism';
import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';
import Head from 'next/head';

const SignIn = () => {
  return (
    <HeaderAndFooter>
      <Head>
        <title>Sign In</title>
      </Head>
      <CardSignIn />
    </HeaderAndFooter>
  );
};

export default SignIn;
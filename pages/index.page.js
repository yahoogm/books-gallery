import { CardContent, HeroContent } from '@/components/organisme';
import { HeaderAndFooter } from '@/components/templates';
import { getCookie } from '@/utils/cookie';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/config/redux/user/userSlice.reducer';

export default function Home() {
  const sessionLogin = getCookie('sessionLogin');
  const dispatch = useDispatch();

  if (!sessionLogin) dispatch(logoutUser({}));

  return (
    <HeaderAndFooter>
      <Head>
        <title>Books Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroContent />
      <CardContent />
    </HeaderAndFooter>
  );
}

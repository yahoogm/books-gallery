import { CardContent, HeroContent } from '@/components/organisme';
import { HeaderAndFooter } from '@/components/templates';
import Head from 'next/head';

export default function Home() {
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

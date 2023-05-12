import CardContent from '@/components/organisme/CardContent/CardContent.organism';
import HeroContent from '@/components/organisme/HeroContent/HeroContent.organism';
import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';
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

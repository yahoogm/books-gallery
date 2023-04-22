import CardContent from '@/components/organisme/CardContent/CardContent.organism';
import HeroContent from '@/components/organisme/HeroContent/HeroContent.organism';
import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';

export default function Home() {
  return (
    <HeaderAndFooter>
      <HeroContent />
      <CardContent />
    </HeaderAndFooter>
  );
}

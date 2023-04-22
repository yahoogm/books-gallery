import Hero from '@/components/molecules/Hero/Hero.molecule';
import useHeroContentOrganismModel from './HeroContent.organismModel';

const HeroContent = () => {
  const organismModel = useHeroContentOrganismModel();
  return <Hero formik={organismModel.formik} />;
};

export default HeroContent;

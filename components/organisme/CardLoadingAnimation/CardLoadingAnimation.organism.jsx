import CardLoading from '@/components/molecules/CardAnimation/CardAnimation.molecules';

const CardLoadingAnimation = () => {
  return (
    <div className="grid gap-2 lg:grid-cols-3 lg:gap-14">
      <CardLoading />
      <CardLoading />
      <CardLoading />
    </div>
  );
};

export default CardLoadingAnimation;

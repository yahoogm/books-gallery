import CardLoading from '@/components/molecules/CardAnimation/CardAnimation.molecules';

const CardLoadingAnimation = () => {
  return (
    <div className="grid grid-cols-3 gap-14">
      <CardLoading />
      <CardLoading />
      <CardLoading />
    </div>
  );
};

export default CardLoadingAnimation;

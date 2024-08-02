import FormSignIn from '@/components/molecules/FormSignIn/FormSignIn.molecule';

const CardSignIn = () => {
  return (
    <div className="card w-full h-60 lg:w-96 lg:h-96 bg-secondary shadow-xl m-auto">
      <div className="m-auto">
        <FormSignIn />
      </div>
    </div>
  );
};

export default CardSignIn;

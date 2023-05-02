import FormSignIn from '@/components/molecules/FormSignIn/FormSignIn.molecule';
import Image from 'next/image';
import { HeroImage } from '@/public/assets';

const CardSignIn = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="w-[600px] h-[600px] relative">
        <Image src={HeroImage} priority={true} fill sizes={'100vh'} alt={'Detail Book'} className="rounded-l-lg  shadow-md object-fill" onError={() => HeroImage} />
      </div>
      <div className="m-auto">
        <FormSignIn />
      </div>
    </div>
  );
};

export default CardSignIn;

import Image from 'next/image';
import { HeroImage } from '@/public/assets';

const CardImage = ({ volume }) => {
  // check image
  const validationImage = volume?.imageLinks?.larger ? volume?.imageLinks?.large : volume?.imageLinks?.thumbnail;
  const src = validationImage ? validationImage : HeroImage;

  return (
    <div className="grid card rounded-box place-items-center">
      <div className="w-96 h-96 relative">
        <Image src={src} priority={true} fill sizes={'100vh'} alt={'Detail Book'} className="rounded-2xl shadow-md object-fill" onError={() => HeroImage} />
      </div>
    </div>
  );
};

export default CardImage;

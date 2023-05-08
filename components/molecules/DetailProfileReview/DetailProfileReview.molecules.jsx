import { HeroImage } from '@/public/assets';
import Image from 'next/image';

const DetailProfileReview = () => {
  return (
    <>
      <div className="flex space-x-4 items-center">
        <Image
          src={HeroImage}
          alt="profile"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <span>Yahoo Garfield Manik</span>
      </div>

      <div>
        Buku ini lumayan bagus untuk dibaca dikarenakan alurnya lumayan
        bagusaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
    </>
  );
};

export default DetailProfileReview;

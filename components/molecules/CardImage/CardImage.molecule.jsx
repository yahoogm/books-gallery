import Image from 'next/image';
import { HeroImage } from '@/public/assets';
import { useDetailBook } from '@/config/redux/books/bookSelector.reducer';

const CardImage = () => {
  const detailBook = useDetailBook();

  // check image
  const validationImage = detailBook?.volumeInfo?.imageLinks?.larger
    ? detailBook?.volumeInfo?.imageLinks?.large
    : detailBook?.volumeInfo?.imageLinks?.thumbnail;
  const src = validationImage ? validationImage : HeroImage;

  return (
    <div className="grid card rounded-box place-items-center">
      <div className="w-96 h-96 relative">
        <Image
          src={src}
          priority={true}
          fill
          sizes={'100vh'}
          alt={'Detail Book'}
          className="rounded-2xl shadow-md object-contain"
          onError={() => HeroImage}
        />
      </div>
    </div>
  );
};

export default CardImage;

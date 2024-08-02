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
      <div className="w-full h-60 lg:w-96 lg:h-96 relative">
        <Image
          src={src}
          priority={true}
          fill
          sizes={'100vh'}
          alt={'Detail Book'}
          className="rounded-2xl shadow-md lg:object-contain"
          placeholder="blur"
          blurDataURL={
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0sraOBgAClAEVfrGhwQAAAABJRU5ErkJggg=='
          }
          onError={() => HeroImage}
        />
      </div>
    </div>
  );
};

export default CardImage;

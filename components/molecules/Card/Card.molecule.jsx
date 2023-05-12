import { Button } from '@/components/atoms';
import Image from 'next/image';
import { HeroImage } from '@/public/assets';
import { useRouter } from 'next/router';
import { modifiedName } from '@/config/functions/Functions';

const Card = ({
  id,
  title = 'Not found',
  authors = ['Not found'],
  publisher = 'Not found',
  publishedDate = 'Not found',
  cover = HeroImage,
}) => {
  // router
  const router = useRouter();
  const authorsName = modifiedName(authors);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={cover}
          alt="Shoes"
          width={500}
          height={300}
          priority={true}
          className="object-fill w-full h-48"
          onError={HeroImage}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{title}</h2>

        <div className="grid grid-cols-5 space-x-2">
          <span className="col-span-1">Author :</span>

          <span className="truncate col-span-4 space-x-2">
            {authors.length != null || undefined ? authorsName : 'null'}
          </span>
        </div>

        <div className="grid grid-cols-3 space-x-2">
          <span className="col-span-1">Total Edition :</span>
          <span className="truncate col-span-2">{publisher}</span>
        </div>

        <div className="grid grid-cols-5 space-x-2">
          <span className="col-span-2">Published Date :</span>
          <span className="truncate col-span-3">{publishedDate}</span>
        </div>

        <div className="card-actions justify-end">
          <Button
            text={'Detail'}
            variant={'btn-primary'}
            onClick={() => router.push(`/detail-book/${id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

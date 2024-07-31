import { Button } from '@/components/atoms';
import Image from 'next/image';
import { HeroImage } from '@/public/assets';
import { useRouter } from 'next/router';
import { modifiedName } from '@/config/functions/Functions';
import { useState } from 'react';

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
  const [src, setSrc] = useState(true);

  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={src ? cover : HeroImage}
          alt="Shoes"
          width={500}
          height={300}
          priority={true}
          className="object-fill w-full h-48"
          onError={() => setSrc(false)}
          placeholder="blur"
          blurDataURL={
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0sraOBgAClAEVfrGhwQAAAABJRU5ErkJggg=='
          }
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm md:text-base line-clamp-1">
          {title}
        </h2>

        <div className="space-x-1">
          <span className="col-span-1 text-sm md:text-base">Author :</span>

          <span className="truncate text-sm">
            {authors.length != null || undefined ? authorsName : 'null'}
          </span>
        </div>

        <div className="space-x-1">
          <span className="col-span-1 text-sm">Total Edition :</span>
          <span className="truncate text-sm">{publisher}</span>
        </div>

        <div className="space-x-2">
          <span className="col-span-2 text-sm">Published Date :</span>
          <span className="truncate text-sm">{publishedDate}</span>
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

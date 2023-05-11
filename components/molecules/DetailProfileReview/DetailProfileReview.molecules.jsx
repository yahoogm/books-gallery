import { HeroImage } from '@/public/assets';
import Image from 'next/image';
import moment from 'moment';

const DetailProfileReview = ({ profileImg, name, date, review }) => {
  const timeAdd = moment.unix(date?.seconds);
  const formatTimeAdd = timeAdd.format('YYYY-MM-DD HH:mm:ss');

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 items-center">
        <Image
          src={profileImg}
          alt="profile"
          width={50}
          height={50}
          className="object-cover w-12 h-12 rounded-full shadow-md"
          onError={() => HeroImage}
        />
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-xs">{`${formatTimeAdd}`}</span>
        </div>
      </div>

      <div className="mx-16">{review}</div>
    </div>
  );
};

export default DetailProfileReview;

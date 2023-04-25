import Information from '@/components/atoms/Information/Information.atom';
import Image from 'next/image';

const CardInformation = () => {
  return (
    <div className="flex w-full space-x-5">
      <div className="grid card rounded-box place-items-center">
        <div className="w-96 h-96 relative">
          <Image src={volume.imageLinks.large ? volume.imageLinks.large : volume.imageLinks.thumbnail} fill sizes={'100vh'} alt={'Detail Book'} className="rounded-2xl shadow-md object-fill" onError={() => HeroImage} />
        </div>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="grid flex-grow rounded-box shadow-md items-center p-10">
        <div className="space-y-6">
          <h2 className="font-semibold text-2xl">{volume?.title ? volume.title : 'Not found'}</h2>
          <div className="space-y-2">
            <Information title={'Author'} information={volume?.authors?.length != null || undefined ? authorsName : 'Not found'} />
            <Information title={'Publisher'} information={volume?.publisher ? volume.publisher : 'Not Found'} />
            <Information title={'Published Date'} information={volume?.publishedDate ? volume.publishedDate : 'Not Found'} />
            <Information title={'Page Count'} information={volume?.pageCount ? volume.pageCount : 'Not Found'} />
            <Information title={'Category'} information={categoriesName ? categoriesName : 'Not found'} />
            <Information title={'Description'} information={volume.description ? volume.description : 'Not Found'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInformation;

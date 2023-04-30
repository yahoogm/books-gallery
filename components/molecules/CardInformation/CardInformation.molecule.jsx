import Button from '@/components/atoms/Button/Button.atom';
import Information from '@/components/atoms/Information/Information.atom';

const CardInformation = ({ volume, authorsName, categoriesName, showBook }) => {
  return (
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
        <Button text={'read book'} type={'button'} variant={'btn-primary'} onClick={() => showBook()} />
      </div>
    </div>
  );
};

export default CardInformation;

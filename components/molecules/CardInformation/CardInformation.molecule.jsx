import Button from '@/components/atoms/Button/Button.atom';
import Information from '@/components/atoms/Information/Information.atom';
import Modal from '@/components/molecules/Modal/Modal.atom';
import { modifiedName } from '@/config/functions/Functions';
import { useDetailBook } from '@/config/redux/books/bookSelector.reducer';

const CardInformation = ({ showBook }) => {
  const detailBook = useDetailBook();
  const authorsName = modifiedName(detailBook?.volumeInfo.authors);
  const categoriesName = modifiedName(detailBook?.volumeInfo.categories);

  return (
    <div className="grid flex-grow rounded-box shadow-md items-center p-10">
      <div className="space-y-6">
        <h2 className="font-semibold text-2xl">
          {detailBook?.volumeInfo?.title
            ? detailBook?.volumeInfo?.title
            : 'Not found'}
        </h2>
        <div className="space-y-2">
          <Information
            title={'Author'}
            information={
              detailBook?.volumeInfo?.authors?.length != null || undefined
                ? authorsName
                : 'Not found'
            }
          />
          <Information
            title={'Publisher'}
            information={
              detailBook?.volumeInfo?.publisher
                ? detailBook?.volumeInfo?.publisher
                : 'Not Found'
            }
          />
          <Information
            title={'Published Date'}
            information={
              detailBook?.volumeInfo?.publishedDate
                ? detailBook?.volumeInfo?.publishedDate
                : 'Not Found'
            }
          />
          <Information
            title={'Page Count'}
            information={
              detailBook?.volumeInfo?.pageCount
                ? detailBook?.volumeInfo?.pageCount
                : 'Not Found'
            }
          />
          <Information
            title={'Category'}
            information={categoriesName ? categoriesName : 'Not found'}
          />
          <Information
            title={'Description'}
            information={
              detailBook?.volumeInfo?.description
                ? detailBook?.volumeInfo?.description
                : 'Not Found'
            }
          />
        </div>
        <div className="space-x-4 flex">
          <Button
            text={'read book'}
            type={'button'}
            variant={'btn-primary'}
            onClick={() => showBook()}
          />

          <Modal btnTitle={'add review'} modalTitle={'make review'} />
        </div>
      </div>
    </div>
  );
};

export default CardInformation;

import CardImage from '@/components/molecules/CardImage/CardImage.molecule';
import CardInformation from '@/components/molecules/CardInformation/CardInformation.molecule';
import useBookDetailContentOrganismModel from './BookDetailContent.organismModel';

const BookDetailContent = () => {
  const model = useBookDetailContentOrganismModel();
  return (
    <div className="flex w-full space-x-5">
      <CardImage volume={model.bookDetail.volumeInfo} />
      <div className="divider divider-horizontal"></div>
      <CardInformation volume={model.bookDetail.volumeInfo} authorsName={model.authorsName} categoriesName={model.categoriesName} />
    </div>
  );
};

export default BookDetailContent;

import CardImage from '@/components/molecules/CardImage/CardImage.molecule';
import CardInformation from '@/components/molecules/CardInformation/CardInformation.molecule';
import { modifiedName } from '@/config/functions/Functions';

const BookDetailContent = ({ book, showBook }) => {
  const authorsName = modifiedName(book.volumeInfo.authors);
  const categoriesName = modifiedName(book.volumeInfo.categories);

  return (
    <div className="flex w-full space-x-5">
      <CardImage volume={book.volumeInfo} />
      <div className="divider divider-horizontal"></div>
      <CardInformation volume={book.volumeInfo} authorsName={authorsName} categoriesName={categoriesName} showBook={showBook} />
    </div>
  );
};

export default BookDetailContent;

import CardImage from '@/components/molecules/CardImage/CardImage.molecule';
import CardInformation from '@/components/molecules/CardInformation/CardInformation.molecule';

const BookDetailContent = ({ showBook }) => {
  return (
    <div className="flex w-full space-x-5">
      <CardImage />
      <div className="divider divider-horizontal"></div>
      <CardInformation showBook={showBook} />
    </div>
  );
};

export default BookDetailContent;

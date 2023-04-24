import Card from '@/components/molecules/Card/Card.molecule';
import CardLoadingAnimation from '@/components/organisme/CardLoadingAnimation/CardLoadingAnimation.organism';
import useCardContentOrganismModel from './CardContent.organismModel';

const CardContent = () => {
  const cardModel = useCardContentOrganismModel();

  return (
    <div>
      <h2 className="text-center mb-10 text-4xl font-semibold">Your Search Books</h2>
      {cardModel.loading ? (
        <CardLoadingAnimation />
      ) : (
        <div className="grid grid-cols-3 gap-14">
          {cardModel.search?.items?.map((search, idx) => {
            return (
              <Card
                key={idx.toString()}
                title={search.volumeInfo.title}
                authors={search.volumeInfo?.authors}
                cover={search.volumeInfo.imageLinks?.thumbnail}
                publishedDate={search.volumeInfo?.publishedDate}
                publisher={search.volumeInfo?.publisher}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardContent;

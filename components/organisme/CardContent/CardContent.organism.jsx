import Card from '@/components/molecules/Card/Card.molecule';
import CardLoadingAnimation from '@/components/organisme/CardLoadingAnimation/CardLoadingAnimation.organism';
import useCardContentOrganismModel from './CardContent.organismModel';

const CardContent = () => {
  const cardModel = useCardContentOrganismModel();

  return (
    <div>
      <h2 className="text-center mb-5 lg:mb-10 text-xl lg:text-4xl font-semibold">
        Your Search Books
      </h2>
      {cardModel.loading ? (
        <CardLoadingAnimation />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-14">
          {cardModel.search.totalItems !== 0 ? (
            cardModel.search?.items?.map((search, idx) => {
              return (
                <Card
                  key={idx.toString()}
                  id={search.id}
                  title={search.volumeInfo.title}
                  authors={search.volumeInfo?.authors}
                  cover={search.volumeInfo.imageLinks?.thumbnail}
                  publishedDate={search.volumeInfo?.publishedDate}
                  publisher={search.volumeInfo?.publisher}
                />
              );
            })
          ) : (
            <>
              <p></p>
              <p className="font-semibold text-lg  text-center">
                Books not found
              </p>
              <p></p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CardContent;

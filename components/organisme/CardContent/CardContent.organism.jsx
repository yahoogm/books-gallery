import Card from '@/components/molecules/Card/Card.molecule';
import { useSearchSelector, useSearchTypeSelector } from '@/config/redux/search/searchSelector.reducer';
import { retrieveSearch } from '@/config/redux/search/searchThunk.reducer';
import CardLoadingAnimation from '@/components/organisme/CardLoadingAnimation/CardLoadingAnimation.organism';

const CardContent = () => {
  const search = useSearchSelector();
  const type = useSearchTypeSelector();

  if (type === retrieveSearch.pending.type) {
    return <CardLoadingAnimation />;
  }

  return (
    <div>
      <h2 className="text-center mb-10 text-4xl font-semibold">Your Search Books</h2>
      <div className="grid grid-cols-3 gap-14">
        {search.items?.map((search, idx) => {
          return <Card key={idx.toString()} title={search.volumeInfo.title} />;
        })}
      </div>
    </div>
  );
};

export default CardContent;

import { useSearchBooksSelector, useSearchBooksTypeSelector } from '@/config/redux/books/bookSelector.reducer';
import { retrieveSearchBooks } from '@/config/redux/books/bookThunk.reducer';

const useCardContentOrganismModel = () => {
  const search = useSearchBooksSelector();
  const type = useSearchBooksTypeSelector();

  const loading = type === retrieveSearchBooks.pending.type;

  return { loading, search };
};

export default useCardContentOrganismModel;

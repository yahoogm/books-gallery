import {
  useSearchBooksSelector,
  useSearchBooksTypeSelector,
} from '@/config/redux/books/bookSelector.reducer';
import { retrieveSearchBooks } from '@/config/redux/books/bookThunk.reducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useCardContentOrganismModel = () => {
  const dispatch = useDispatch();
  const search = useSearchBooksSelector();
  const type = useSearchBooksTypeSelector();

  useEffect(() => {
    dispatch(retrieveSearchBooks({ search: 'programming' }));
  }, []);

  const loading = type === retrieveSearchBooks.pending.type;

  return { loading, search };
};

export default useCardContentOrganismModel;

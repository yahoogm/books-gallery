import {
  useSearchBooksSelector,
  useSearchBooksTypeSelector,
} from '@/config/redux/books/bookSelector.reducer';
import { addSearchBooks } from '@/config/redux/books/bookSlice.reducer';
import { retrieveSearchBooks } from '@/config/redux/books/bookThunk.reducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const LOCAL_STORAGE_KEY = 'searchBooksData';
const CACHE_DURATION = 1000 * 60 * 5;

const useCardContentOrganismModel = () => {
  const dispatch = useDispatch();
  const search = useSearchBooksSelector();
  const type = useSearchBooksTypeSelector();

  useEffect(() => {
    const now = Date.now();

    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const { data, timestamp } = JSON.parse(storedData);

      if (now - timestamp < CACHE_DURATION) {
        dispatch(addSearchBooks(data));
        return;
      }
    }

    dispatch(retrieveSearchBooks({ search: 'programming' }));
  }, [dispatch]);

  const loading = type === retrieveSearchBooks.pending.type;

  useEffect(() => {
    if (type === retrieveSearchBooks.fulfilled.type) {
      const now = Date.now();
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({
          data: search,
          timestamp: now,
        })
      );
    }
  }, [search, type]);

  return { loading, search };
};

export default useCardContentOrganismModel;

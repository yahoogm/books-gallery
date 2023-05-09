import { useSelector } from 'react-redux';

export const useSearchBooksSelector = () =>
  useSelector((state) => state.book.books);

export const useSearchBooksTypeSelector = () =>
  useSelector((state) => state.book.type);

export const useDetailBook = () =>
  useSelector((state) => state.book.detailBook);

export const useReadBook = () => useSelector((state) => state.book.readBook);

export const useReviewBookSelector = () =>
  useSelector((state) => state.book.reviewBook);

export const useReviewTypeSelector = () =>
  useSelector((state) => state.book.reviewType);

import { useSelector } from 'react-redux';

export const useSearchBooksSelector = () => useSelector((state) => state.book.books);

export const useSearchBooksTypeSelector = () => useSelector((state) => state.book.type);

export const useDetailBook = () => useSelector((state) => state.book.detailBook);

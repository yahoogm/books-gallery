import { useReadBook } from '@/config/redux/books/bookSelector.reducer';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const useDetailBookModel = () => {
  const identifiers = useReadBook();

  const canvasRef = useRef();

  const alertNotFound = () => {
    toast('Could not embed the book', { type: 'error' });
  };

  const initialize = async () => {
    let viewer = new google.books.DefaultViewer(canvasRef.current); // eslint-disable-line no-undef
    viewer.load(identifiers, alertNotFound);
  };

  return { canvasRef, initialize };
};

export default useDetailBookModel;

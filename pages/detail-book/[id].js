import { addReadBook } from '@/config/redux/books/bookSlice.reducer';
import { useReadBook } from '@/config/redux/books/bookSelector.reducer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import DetailBook from './DetailBook.page';

const BookLogic = ({ book }) => {
  const dispatch = useDispatch();
  const identifiers = useReadBook();
  const canvasRef = useRef();

  useEffect(() => {
    const bookId = book.id;
    const industryIdentifiers = book.volumeInfo.industryIdentifiers;

    if (bookId && industryIdentifiers) {
      dispatch(addReadBook([bookId, 'ISBN:' + industryIdentifiers[0].identifier]));
    } else {
      dispatch(addReadBook([bookId]));
    }
  }, [book.id, book.volumeInfo.industryIdentifiers, dispatch]);

  const alertNotFound = () => {
    toast('Could not embed the book', { type: 'error' });
  };

  const initialize = async () => {
    let viewer = new google.books.DefaultViewer(canvasRef.current); // eslint-disable-line no-undef
    viewer.load(identifiers, alertNotFound);
  };

  return <DetailBook book={book} showBook={initialize} canvasRef={canvasRef} />;
};

export default BookLogic;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const res = await axios.get(`${process.env.API_URL}/volumes/${id}?=${process.env.API_KEY}`);
  const book = await res.data;

  return {
    props: { book },
  };
}

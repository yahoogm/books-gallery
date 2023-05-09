import { useIsLoginSelector } from '@/config/redux/user/userSelector.reducer';
import { useRouter } from 'next/router';
import { retrieveReviewBook } from '@/config/redux/books/bookThunk.reducer';
import { useCallback, useEffect, useRef } from 'react';
import { useReadBook } from '@/config/redux/books/bookSelector.reducer';
import {
  addDetailBook,
  addReadBook,
} from '@/config/redux/books/bookSlice.reducer';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export const useDetailBookModel = (book, bookId) => {
  const dispatch = useDispatch();
  const identifiers = useReadBook();
  const isLogin = useIsLoginSelector();
  const canvasRef = useRef();
  const router = useRouter();

  //   check user isLogin
  useEffect(() => {
    if (isLogin === false) {
      router.push('/sign-in');
    }
  }, []);

  // add detail book
  useEffect(() => {
    dispatch(addDetailBook(book));
  }, [dispatch]);

  // get reviews
  useEffect(() => {
    dispatch(retrieveReviewBook({ bookId }));
  }, []);

  //  add book id | ISBN
  useEffect(() => {
    const bookId = book.id;
    const industryIdentifiers = book.volumeInfo.industryIdentifiers;
    if (bookId && industryIdentifiers) {
      dispatch(
        addReadBook([bookId, 'ISBN:' + industryIdentifiers[0].identifier])
      );
    } else {
      dispatch(addReadBook([bookId]));
    }
  }, [book.id, book.volumeInfo.industryIdentifiers, dispatch]);

  //   handle embed book not found
  const alertNotFound = useCallback(async () => {
    toast('Sorry, the book cannot be read', { type: 'error' });
  });

  //   hanlde initialize embed book
  const initialize = useCallback(async () => {
    let viewer = await new google.books.DefaultViewer(canvasRef.current); // eslint-disable-line no-undef
    viewer.load(identifiers, alertNotFound);
  });
  return { canvasRef, initialize };
};

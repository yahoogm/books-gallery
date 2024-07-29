import { useCallback, useEffect, useRef } from 'react';
import { useReadBook } from '@/config/redux/books/bookSelector.reducer';
import {
  addDetailBook,
  addReadBook,
  addReviewBook,
} from '@/config/redux/books/bookSlice.reducer';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { db } from '@/config/firebase/sdk/sdk';
import { collection, onSnapshot } from 'firebase/firestore';

export const useDetailBookModel = (book, bookId) => {
  const dispatch = useDispatch();
  const identifiers = useReadBook();
  const canvasRef = useRef();

  // add detail book
  useEffect(() => {
    dispatch(addDetailBook(book));
  }, [book, dispatch]);

  // get reviews collection from firestore with realtime
  const dbRef = collection(db, 'ulasan');
  useEffect(() => {
    onSnapshot(dbRef, (docSnap) => {
      const reviews = [];
      docSnap.forEach((doc) => {
        reviews.push(doc.data());
      });
      const filteringBooks = reviews.filter(
        (review) => review.bookId === bookId
      );
      dispatch(addReviewBook(filteringBooks));
    });
  }, [bookId, dbRef, dispatch]);

  // add book id | ISBN
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

  // handle embed book not found
  const alertNotFound = useCallback(async () => {
    toast('Sorry, the book cannot be read', { type: 'error' });
  }, []);

  // hanlde initialize embed book
  const initialize = useCallback(async () => {
    let viewer = await new google.books.DefaultViewer(canvasRef.current); // eslint-disable-line no-undef
    viewer.load(identifiers, alertNotFound);
  }, [alertNotFound, identifiers]);

  return { canvasRef, initialize };
};

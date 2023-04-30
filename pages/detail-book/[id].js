import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';
import Head from 'next/head';
import axios from 'axios';
import { addReadBook } from '@/config/redux/books/bookSlice.reducer';
import { useDispatch } from 'react-redux';
import Script from 'next/script';
import BookDetailContent from '@/components/organisme/BookDetailContent/BookDetailContent.organism';
import { useEffect, useRef } from 'react';
import { useReadBook } from '@/config/redux/books/bookSelector.reducer';
import { toast } from 'react-toastify';

const DetailBook = ({ book }) => {
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

  const initialize = () => {
    let viewer = new google.books.DefaultViewer(canvasRef.current); // eslint-disable-line no-undef
    viewer.load(identifiers, alertNotFound);
  };

  return (
    <HeaderAndFooter>
      <Head>
        <title>Detail Book</title>
      </Head>
      <BookDetailContent book={book} showBook={initialize} />
      <Script
        id="google-books-script"
        src="https://www.google.com/books/jsapi.js"
        strategy="afterInteractive"
        onLoad={() => {
          google.books.load(); // eslint-disable-line no-undef
          google.books.setOnLoadCallback(() => initialize); // eslint-disable-line no-undef
        }}
      />

      <div ref={canvasRef} id="viewerCanvas" className="w-full h-[700px] m-auto"></div>
    </HeaderAndFooter>
  );
};

export default DetailBook;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const res = await axios.get(`${process.env.API_URL}/volumes/${id}?=${process.env.API_KEY}`);
  const book = await res.data;

  return {
    props: { book },
  };
}

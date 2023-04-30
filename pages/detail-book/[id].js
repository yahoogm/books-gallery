import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';
import Head from 'next/head';
import axios from 'axios';
import { addReadBook } from '@/config/redux/books/bookSlice.reducer';
import { useDispatch } from 'react-redux';
import Script from 'next/script';
import BookDetailContent from '@/components/organisme/BookDetailContent/BookDetailContent.organism';
import useDetailBookModel from './DetailBook.pageModel';
import { useEffect } from 'react';

const DetailBook = ({ book }) => {
  const model = useDetailBookModel();
  const dispatch = useDispatch();

  useEffect(() => {
    const bookId = book.id;
    const industryIdentifiers = book.volumeInfo.industryIdentifiers;

    if (bookId && industryIdentifiers) {
      dispatch(addReadBook([bookId, 'ISBN:' + industryIdentifiers[0].identifier]));
    } else {
      dispatch(addReadBook([bookId]));
    }
  }, [book.id, book.volumeInfo.industryIdentifiers, dispatch]);

  return (
    <HeaderAndFooter>
      <Head>
        <title>Detail Book</title>
      </Head>
      <BookDetailContent book={book} showBook={model.initialize} />
      <Script
        id="google-books-script"
        src="https://www.google.com/books/jsapi.js"
        strategy="afterInteractive"
        onLoad={() => {
          google.books.load(); // eslint-disable-line no-undef
          google.books.setOnLoadCallback(() => model.initialize); // eslint-disable-line no-undef
        }}
      />

      <div ref={model.canvasRef} id="viewerCanvas" className="w-full h-[700px] m-auto"></div>
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

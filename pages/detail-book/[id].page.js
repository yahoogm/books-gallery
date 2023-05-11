import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';
import Head from 'next/head';
import axios from 'axios';
import Script from 'next/script';
import BookDetailContent from '@/components/organisme/BookDetailContent/BookDetailContent.organism';
import DetailReview from '@/components/organisme/DetailReview/DetailReview.organism';
import { useDetailBookModel } from './useDetailBook';
import { Element } from 'react-scroll';

const DetailBook = ({ book }) => {
  const bookId = book.id;

  const model = useDetailBookModel(book, bookId);

  return (
    <HeaderAndFooter>
      <Head>
        <title>Detail Book</title>
      </Head>
      <BookDetailContent showBook={model.initialize} />
      <DetailReview />
      <Script
        id="google-books-script"
        src="https://www.google.com/books/jsapi.js"
        strategy="afterInteractive"
        onLoad={() => {
          google.books.load(); // eslint-disable-line no-undef
          google.books.setOnLoadCallback(() => model.initialize); // eslint-disable-line no-undef
        }}
      />

      <div className="space-y-6" id="containerReadBook">
        <h1 className="text-3xl font-semibold">Read Book</h1>
        <Element name="readBook" className="element">
          <div
            ref={model.canvasRef}
            id="viewerCanvas"
            className="w-full h-[700px] m-auto"
          ></div>
        </Element>
      </div>
    </HeaderAndFooter>
  );
};

export default DetailBook;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const res = await axios.get(
    `${process.env.API_URL}/volumes/${id}?=${process.env.API_KEY}`
  );
  const book = await res.data;

  return {
    props: { book },
  };
}

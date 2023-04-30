import Script from 'next/script';
import Head from 'next/head';
import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';
import BookDetailContent from '@/components/organisme/BookDetailContent/BookDetailContent.organism';

const DetailBook = ({ book, showBook, canvasRef }) => {
  return (
    <HeaderAndFooter>
      <Head>
        <title>Detail Book</title>
      </Head>
      <BookDetailContent book={book} showBook={showBook} />
      <Script
        id="google-books-script"
        src="https://www.google.com/books/jsapi.js"
        strategy="afterInteractive"
        onLoad={() => {
          google.books.load(); // eslint-disable-line no-undef
          google.books.setOnLoadCallback(() => showBook); // eslint-disable-line no-undef
        }}
      />

      <div ref={canvasRef} id="viewerCanvas" className="w-full h-[700px] m-auto"></div>
    </HeaderAndFooter>
  );
};

export default DetailBook;

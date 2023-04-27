import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect, useMemo } from 'react';
import { FaRedoAlt } from 'react-icons/fa';

const ReadBook = () => {
  const router = useRouter();
  const query = router.query;
  const { id, isbn } = query;

  const identifiers = useMemo(() => {
    const ids = [id];

    if (id && isbn) {
      ids.push('ISBN:' + isbn);
    }

    return ids;
  }, [id, isbn]);

  const canvasRef = useRef();

  const [loaded, setLoaded] = useState(false);

  // Create alert message if book not found in Google Database
  function alertNotFound() {
    return alert('could not embed the book!');
  }

  // Add a Google Books script tag and event listener if the tag has loaded
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://www.google.com/books/jsapi.js';
    scriptTag.addEventListener('load', () => setLoaded(true));
    scriptTag.id = 'google-script';
    document.body.appendChild(scriptTag);
  }, []);

  // Once Google Books has loaded, then create new instance of Default viewer and load book's information to viewer
  useEffect(() => {
    if (!loaded) return;
    else {
      if (window.viewer) {
        let viewer = new window.google.books.DefaultViewer(canvasRef.current);
        viewer.load(identifiers, alertNotFound);
        window.google.books.load();
        window.google.books.setOnLoadCallback(() => {
          let viewer = new window.google.books.DefaultViewer(canvasRef.current);
          window.viewer = viewer;
          viewer.load(identifiers, alertNotFound);
        });
      }
    }
  }, [loaded, identifiers]);
  return (
    <HeaderAndFooter>
      <Head>
        <title>Read Book</title>
      </Head>
      {loaded ? (
        <div>
          <div ref={canvasRef} id="viewerCanvas" className="w-full h-[600px]"></div>
        </div>
      ) : (
        <FaRedoAlt size={60} className="animate-spin m-auto text-primary" />
      )}
    </HeaderAndFooter>
  );
};

export default ReadBook;

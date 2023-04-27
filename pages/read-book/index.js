import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';
import Head from 'next/head';
import useReadBookPageModel from './ReadBooks.pageModel';
import { FaRedoAlt } from 'react-icons/fa';

const ReadBook = () => {
  const model = useReadBookPageModel();
  return (
    <HeaderAndFooter>
      <Head>
        <title>Read Book</title>
      </Head>
      {model.loaded ? (
        <div>
          <div ref={model.canvasRef} id="viewerCanvas" className="w-full h-[600px]"></div>
        </div>
      ) : (
        <FaRedoAlt size={60} className="animate-spin m-auto text-primary" />
      )}
    </HeaderAndFooter>
  );
};

export default ReadBook;

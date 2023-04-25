import HeaderAndFooter from '@/components/templates/HeaderAndFooter/HeaderAndFooter.template';
import Head from 'next/head';
import axios from 'axios';
import { addDetailBook } from '@/config/redux/books/bookSlice.reducer';
import { useDispatch } from 'react-redux';

const DetailBook = ({ book }) => {
  const dispatch = useDispatch();
  dispatch(addDetailBook(book));

  return (
    <HeaderAndFooter>
      <Head>
        <title>Detail Book</title>
      </Head>
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

import useSwr from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useFetcher = (path) => {
  const { data, error } = useSwr(`${process.env.API_URL}/volumes/${path}?key=${process.env.API_KEY}`, fetcher);

  return {
    data,
    error,
  };
};

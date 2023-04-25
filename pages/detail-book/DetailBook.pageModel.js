import { useRouter } from 'next/router';
import { useFetcher } from '@/config/swr/useFetcher';

const useDetailBookModel = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, error } = useFetcher(id);

  if (error) return <div>Error</div>;
  if (!data && !error) return <div>Loading</div>;

  return { data };
};

export default useDetailBookModel;

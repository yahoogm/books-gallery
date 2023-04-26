import { useDetailBook } from '@/config/redux/books/bookSelector.reducer';
import { modifiedName } from '@/config/functions/Functions';

const useBookDetailContentOrganismModel = () => {
  const bookDetail = useDetailBook();
  const authorsName = modifiedName(bookDetail.volumeInfo.authors);
  const categoriesName = modifiedName(bookDetail.volumeInfo.categories);

  return { bookDetail, authorsName, categoriesName };
};

export default useBookDetailContentOrganismModel;

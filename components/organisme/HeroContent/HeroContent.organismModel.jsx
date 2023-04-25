import { retrieveSearchBooks } from '@/config/redux/books/bookThunk.reducer';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

const useHeroContentOrganismModel = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      const { search } = values;
      dispatch(retrieveSearchBooks({ search }));
    },
  });
  return { formik };
};

export default useHeroContentOrganismModel;

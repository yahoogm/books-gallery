import { retrieveSearch } from '@/config/redux/search/searchThunk.reducer';
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
      dispatch(retrieveSearch({ search }));
    },
  });
  return { formik };
};

export default useHeroContentOrganismModel;

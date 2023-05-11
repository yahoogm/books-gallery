import { useFormik } from 'formik';
import { useCallback } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebase/sdk/sdk';
import { useDetailBook } from '@/config/redux/books/bookSelector.reducer';
import { toast } from 'react-toastify';
import { useUserSelector } from '@/config/redux/user/userSelector.reducer';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const useModalModel = () => {
  const detailBook = useDetailBook();
  const user = useUserSelector();

  const addReview = useCallback((review) => {
    try {
      addDoc(collection(db, 'ulasan'), review);
      toast('Success add review', { type: 'success' });
    } catch (e) {
      toast('Failed add review', { type: 'error' });
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      review: '',
    },
    validationSchema: Yup.object({
      review: Yup.string().required('Please insert your review'),
    }),
    onSubmit: (values) => {
      const date = new Date();
      const id = nanoid();
      addReview({
        userName: user.name,
        bookId: detailBook.id,
        profilePic: user.profilePic,
        id: id,
        ulasan: values.review,
        userId: user.userId,
        createdAt: date,
        updatedAt: date,
      });

      formik.resetForm();
    },
  });

  return { formik };
};

export default useModalModel;

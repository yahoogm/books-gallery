import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebase/sdk/sdk';
import { useDetailBook } from '@/config/redux/books/bookSelector.reducer';
import { toast } from 'react-toastify';
import {
  useIsLoginSelector,
  useUserSelector,
} from '@/config/redux/user/userSelector.reducer';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import moment from 'moment';
import { useRouter } from 'next/router';

const useModalModel = () => {
  const detailBook = useDetailBook();
  const user = useUserSelector();
  const isLogin = useIsLoginSelector();
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const addReview = useCallback((review) => {
    try {
      addDoc(collection(db, 'ulasan'), review);
      toast('Success add review', { type: 'success' });
    } catch (e) {
      toast('Failed add review', { type: 'error' });
    }
  }, []);

  const handleUserNotLogin = () => {
    router.push('/sign-in');
    toast('Please log in first!', { type: 'info' });
  };

  const formik = useFormik({
    initialValues: {
      review: '',
    },
    validationSchema: Yup.object({
      review: Yup.string()
        .min(10)
        .max(200)
        .required('Please insert your review'),
    }),
    onSubmit: (values) => {
      const date = new Date();
      const formatedDate = moment(date).format('YYYY-MM-DD HH:mm:ss');
      const id = nanoid();

      isLogin
        ? addReview({
            userName: user.name,
            bookId: detailBook.id,
            profilePic: user.profilePic,
            id: id,
            ulasan: values.review,
            userId: user.userId,
            createdAt: formatedDate,
            updatedAt: formatedDate,
          })
        : handleUserNotLogin();
      setIsOpen(false);

      formik.resetForm();
    },
  });

  return { formik, isOpen, setIsOpen };
};

export default useModalModel;

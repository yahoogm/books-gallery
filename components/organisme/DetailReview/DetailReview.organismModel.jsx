import {
  useReviewBookSelector,
  useReviewIdSelector,
} from '@/config/redux/books/bookSelector.reducer';
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { db } from '@/config/firebase/sdk/sdk';
import { useDispatch } from 'react-redux';
import { addReviewId } from '@/config/redux/books/bookSlice.reducer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

const useDetailReviewModel = () => {
  const reviews = useReviewBookSelector();
  const reviewId = useReviewIdSelector();
  const dispatch = useDispatch();

  const getIdDocumentFromFirestore = async (id) => {
    const q = query(collection(db, 'ulasan'), where('id', '==', id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      dispatch(addReviewId(doc.id));
    });
  };

  const updateReviewByIdCollection = useCallback(
    (ulasan, updatedAt) => {
      try {
        const docRef = doc(db, 'ulasan', reviewId);
        updateDoc(docRef, {
          ulasan,
          updatedAt,
        });
        toast('Succes update review', { type: 'success' });
      } catch (error) {
        toast('Failed update review', { type: 'error' });
      }
    },
    [reviewId]
  );

  const formik = useFormik({
    initialValues: {
      review: '',
    },
    validationSchema: Yup.object({
      review: Yup.string().required('Please insert your review'),
    }),
    onSubmit: (values) => {
      const updatedAt = new Date();
      updateReviewByIdCollection(values.review, updatedAt);
      formik.resetForm();
    },
  });

  return { reviews, formik, getIdDocumentFromFirestore };
};

export default useDetailReviewModel;

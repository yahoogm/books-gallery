import Button from '@/components/atoms/Button/Button.atom';
import { useFormik } from 'formik';
import { useCallback } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebase/sdk/sdk';
import { useDetailBook } from '@/config/redux/books/bookSelector.reducer';
import { toast } from 'react-toastify';
import { useUserSelector } from '@/config/redux/user/userSelector.reducer';
import { nanoid } from 'nanoid';

const Modal = ({ btnTitle, modalTitle }) => {
  const detailBook = useDetailBook();
  const user = useUserSelector();

  const addReview = useCallback(async (review) => {
    try {
      await addDoc(collection(db, 'ulasan'), review);
      toast('Success add review', { type: 'success' });
    } catch (e) {
      toast('Failed add review', { type: 'error' });
    }
  });

  const formik = useFormik({
    initialValues: {
      review: '',
    },
    onSubmit: (values) => {
      addReview({
        userName: user.name,
        bookId: detailBook.id,
        profilePic: user.profilePic,
        id: nanoid(),
        ulasan: values.review,
        userId: user.userId,
        createdAt: new Date(),
      });
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="my-modal-3" className="btn btn-primary">
        {btnTitle}
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-error text-white absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold uppercase">{modalTitle}</h3>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write something about this book"
              name="review"
              value={formik.values.review}
              onChange={formik.handleChange}
            ></textarea>
            <Button
              type={'submit'}
              text={'submit'}
              variant={'btn-success text-white'}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;

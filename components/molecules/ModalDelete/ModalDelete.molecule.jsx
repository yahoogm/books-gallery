import { useReviewIdSelector } from '@/config/redux/books/bookSelector.reducer';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/config/firebase/sdk/sdk';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

const ModalDelete = ({ children }) => {
  const reviewId = useReviewIdSelector();

  const handleDeleteReviewById = useCallback(() => {
    try {
      deleteDoc(doc(db, 'ulasan', reviewId));
      toast('Success delete review', { type: 'success' });
    } catch (error) {
      toast('Failed delete review', { type: 'error' });
    }
  }, [reviewId]);

  return (
    <>
      <label htmlFor="my-modal-4">{children}</label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Are you sure to delete this review?
          </h3>

          <div className="modal-action">
            <label
              htmlFor="my-modal-4"
              className="btn btn-error text-white"
              onClick={() => handleDeleteReviewById()}
            >
              Delete
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default ModalDelete;

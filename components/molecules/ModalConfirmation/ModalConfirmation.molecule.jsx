import { useReviewIdSelector } from '@/config/redux/books/bookSelector.reducer';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/config/firebase/sdk/sdk';

const ModalConfirmation = ({ children }) => {
  const reviewId = useReviewIdSelector();
  const handleDeleteReviewById = async () => {
    await deleteDoc(doc(db, 'ulasan', reviewId));
  };

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

export default ModalConfirmation;

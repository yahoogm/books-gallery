import DetailProfileReview from '@/components/molecules/DetailProfileReview/DetailProfileReview.molecules';
import { useReviewBookSelector } from '@/config/redux/books/bookSelector.reducer';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase/sdk/sdk';
import ModalDelete from '@/components/molecules/ModalDelete/ModalDelete.molecule';
import { useDispatch } from 'react-redux';
import { addReviewId } from '@/config/redux/books/bookSlice.reducer';

const DetailReview = () => {
  const reviews = useReviewBookSelector();
  const dispatch = useDispatch();

  const getIdDocumentFromFirestore = async (id) => {
    const q = query(collection(db, 'ulasan'), where('id', '==', id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      dispatch(addReviewId(doc.id));
    });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Reviews</h1>
      <div className="p-10 bg-[#E9DDFF] rounded-2xl space-y-6 shadow-md">
        {reviews.length !== 0 ? (
          reviews?.map((review) => {
            return (
              <div key={review.id}>
                <div className="grid grid-cols-12  w-full place-items-stretch ">
                  <div className="col-span-11 break-words">
                    <DetailProfileReview
                      date={review.createdAt}
                      name={review.userName}
                      review={review.ulasan}
                      profileImg={review.profilePic}
                    />
                  </div>

                  <div className="flex space-x-2 items-center justify-end">
                    <FaEdit
                      size={25}
                      className="text-accent hover:text-accent-focus cursor-pointer transition duration-300 ease-out"
                    />

                    <ModalDelete>
                      <FaTrash
                        size={22}
                        className="text-error hover:text-red-500 cursor-pointer transition duration-300 ease-out"
                        onClick={() => getIdDocumentFromFirestore(review.id)}
                      />
                    </ModalDelete>
                  </div>
                </div>

                <div className="w-full h-1 bg-[#D0BCFF] rounded-2xl mt-4"></div>
              </div>
            );
          })
        ) : (
          <div>The book not have reviews</div>
        )}
      </div>
    </div>
  );
};

export default DetailReview;

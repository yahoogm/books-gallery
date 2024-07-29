import DetailProfileReview from '@/components/molecules/DetailProfileReview/DetailProfileReview.molecules';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ModalDelete from '@/components/molecules/ModalDelete/ModalDelete.molecule';
import ModalUpdate from '@/components/molecules/ModalUpdate/ModalUpdate.molecule';
import useDetailReviewModel from './DetailReview.organismModel';
import { useUserSelector } from '@/config/redux/user/userSelector.reducer';

const DetailReview = () => {
  const model = useDetailReviewModel();
  const user = useUserSelector();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Reviews</h1>
      <div className="p-10 bg-[#E9DDFF] rounded-2xl space-y-6 shadow-md">
        {model.reviews.length !== 0 ? (
          model.reviews?.map((review) => {
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

                  {user?.email === review?.email ? (
                    <div className="flex space-x-2 items-center justify-end">
                      <ModalUpdate
                        formik={model.formik}
                        isOpen={model.isOpen}
                        setIsOpen={model.setIsOpen}
                      >
                        <FaEdit
                          size={25}
                          className="text-accent hover:text-accent-focus cursor-pointer transition duration-300 ease-out"
                          onClick={() => {
                            model.getIdDocumentFromFirestore(review.id);

                            model.formik.setValues({ review: review.ulasan });
                          }}
                        />
                      </ModalUpdate>

                      <ModalDelete>
                        <FaTrash
                          size={22}
                          className="text-error hover:text-red-500 cursor-pointer transition duration-300 ease-out"
                          onClick={() =>
                            model.getIdDocumentFromFirestore(review.id)
                          }
                        />
                      </ModalDelete>
                    </div>
                  ) : null}
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

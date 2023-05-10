import Button from '@/components/atoms/Button/Button.atom';
import useModalModel from './ModalReview.atomModel';

const Modal = ({ btnTitle, modalTitle }) => {
  const model = useModalModel();
  return (
    <form onSubmit={model.formik.handleSubmit}>
      <label htmlFor="my-modal-3" className="btn btn-primary">
        {btnTitle}
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle  absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold uppercase">{modalTitle}</h3>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write something about this book"
              name="review"
              value={model.formik.values.review}
              onChange={model.formik.handleChange}
            ></textarea>
            {model.formik.touched.review && model.formik.errors.review ? (
              <div className="text-error">{model.formik.errors.review}</div>
            ) : null}
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
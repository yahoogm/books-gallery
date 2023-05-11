import Button from '@/components/atoms/Button/Button.atom';
import useModalModel from './ModalReview.atomModel';

const Modal = ({ btnTitle, modalTitle }) => {
  const model = useModalModel();

  return (
    <form onSubmit={model.formik.handleSubmit}>
      <label
        htmlFor="my-modal-3"
        className="btn btn-primary"
        onClick={() => model.setIsOpen(true)}
      >
        {btnTitle}
      </label>

      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
        checked={model.isOpen}
        onChange={() => model.setIsOpen(model.isOpen)}
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle  absolute right-2 top-2"
            onClick={() => model.setIsOpen(false)}
          >
            ✕
          </label>

          <h3 className="text-lg font-bold uppercase">{modalTitle}</h3>

          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Write something about this book"
            name="review"
            value={model.formik.values.review}
            onChange={model.formik.handleChange}
          ></textarea>

          {model.formik.touched.review && model.formik.errors.review ? (
            <div className="text-error">{model.formik.errors.review}</div>
          ) : null}

          <div className="modal-action">
            <Button
              type={'submit'}
              text={'submit'}
              variant={'btn-accent text-white'}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;

import Button from '@/components/atoms/Button/Button.atom';
import { useFormik } from 'formik';

const Modal = ({ btnTitle, modalTitle }) => {
  const formik = useFormik({
    initialValues: {
      review: '',
    },
    onSubmit: (values) => {
      alert(values.review);
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
            <Button text={'submit'} variant={'btn-success text-white'} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;

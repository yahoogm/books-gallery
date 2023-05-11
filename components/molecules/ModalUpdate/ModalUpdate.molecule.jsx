import Button from '@/components/atoms/Button/Button.atom';

const ModalUpdate = ({ children, formik, isOpen, setIsOpen }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="modal-update" onClick={() => setIsOpen(true)}>
        {children}
      </label>

      <input
        type="checkbox"
        id="modal-update"
        className="modal-toggle"
        checked={isOpen}
      />
      <div className="modal">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="modal-update"
            className="btn btn-sm btn-circle  absolute right-2 top-2"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold uppercase">update review</h3>

          <textarea
            className="textarea textarea-bordered w-full mt-4"
            placeholder="Please insert your review"
            name="review"
            value={formik.values.review}
            onChange={formik.handleChange}
          ></textarea>

          {formik.touched.review && formik.errors.review ? (
            <div className="text-error">{formik.errors.review}</div>
          ) : null}

          <div className="modal-action">
            <Button
              type={'submit'}
              variant={'btn-accent text-white'}
              text={'update'}
            />
          </div>
        </label>
      </div>
    </form>
  );
};

export default ModalUpdate;

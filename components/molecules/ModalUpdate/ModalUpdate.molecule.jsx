import Button from '@/components/atoms/Button/Button.atom';

const ModalUpdate = ({ children, formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="modal-update">{children}</label>

      <input type="checkbox" id="modal-update" className="modal-toggle" />
      <label htmlFor="modal-update" className="modal cursor-pointer">
        <label className="modal-box relative space-y-4" htmlFor="">
          <h3 className="text-lg font-bold uppercase">update review</h3>

          <textarea
            className="textarea textarea-bordered w-full"
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
      </label>
    </form>
  );
};

export default ModalUpdate;

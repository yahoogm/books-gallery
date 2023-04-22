import Button from '@/components/atoms/Button/Button.atom';
import Input from '@/components/atoms/Input/Input.atom';

const Hero = ({ formik }) => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse px-0">
        <img src={'./assets/hero/books.jpg'} className="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-secondary">Online Books</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <form
            className="space-x-2"
            onSubmit={(event) => {
              event.preventDefault(), formik.handleSubmit(event);
            }}
          >
            <Input placeholder={'Find your books here....'} value={formik.values.search} onChange={formik.handleChange} name={'search'} style={'bg-secondary placeholder:text-white text-white'} />
            <Button text={'Search'} variant={'btn-primary'} type={'submit'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;

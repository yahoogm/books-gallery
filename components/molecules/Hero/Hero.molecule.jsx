import Image from 'next/image';
import { HeroImage } from '@/public/assets';
import { Button, Input } from '@/components/atoms';

const Hero = ({ formik }) => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse px-0">
        <Image
          src={HeroImage}
          priority={true}
          alt="HeroImage"
          className="max-w-lg rounded-lg shadow-2xl"
          placeholder="blur"
        />
        <div>
          <h1 className="text-5xl font-bold text-secondary">Online Books</h1>
          <p className="py-6">
            Makes it easier for book lovers to read because it can display
            various kinds of books from various genres and famous authors to
            meet the needs of different readers. For the type of book displayed
            using the
            <span className="font-semibold"> Google Books API</span>.
          </p>
          <form
            className="space-x-2"
            onSubmit={(event) => {
              event.preventDefault(), formik.handleSubmit(event);
            }}
          >
            <Input
              placeholder={'Find your books here....'}
              value={formik.values.search}
              onChange={formik.handleChange}
              name={'search'}
              style={'bg-secondary placeholder:text-white text-white max-w-xs'}
            />
            <Button text={'Search'} variant={'btn-primary'} type={'submit'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;

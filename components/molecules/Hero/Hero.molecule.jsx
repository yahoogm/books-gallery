import Image from 'next/image';
import { HeroImage } from '@/public/assets';
import { Button, Input } from '@/components/atoms';
import Link from 'next/link';

const Hero = ({ formik }) => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse px-0">
        <Image
          src={HeroImage}
          priority={true}
          alt="HeroImage"
          className="rounded-lg shadow-2xl lg:max-w-lg"
          placeholder="blur"
          blurDataURL={
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0sraOBgAClAEVfrGhwQAAAABJRU5ErkJggg=='
          }
        />
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-secondary">
            Online Books
          </h1>
          <p className="py-4 lg:py-6">
            Makes it easier for book lovers to read because it can display
            various kinds of books from various genres and famous authors to
            meet the needs of different readers. For the type of book displayed
            using the{' '}
            <Link
              href={'https://developers.google.com/books'}
              className="font-semibold underline"
            >
              Google Books API
            </Link>
            .
          </p>
          <form
            className="space-x-2 flex"
            onSubmit={(event) => {
              event.preventDefault(), formik.handleSubmit(event);
            }}
          >
            <Input
              placeholder={'Find your books here....'}
              value={formik.values.search}
              onChange={formik.handleChange}
              name={'search'}
              style={
                'bg-secondary input-md placeholder:text-white max-w-xs text-white'
              }
            />
            <Button text={'Search'} variant={'btn-primary'} type={'submit'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse px-0">
        <img src={'./assets/hero/books.jpg'} className="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-secondary">Online Books</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Input placeholder={'Find your books here'} bgColor={'bg-secondary'} />
          <Button text={'Search'} variant={'btn-primary'} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

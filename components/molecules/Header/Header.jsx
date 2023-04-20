import Button from '@/components/atoms/Button/Button';
import Title from '@/components/atoms/Title/Title';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="navbar px-14">
      <div className="flex-1 space-x-20">
        <a className="normal-case">
          <Title text={'Books Gallery'} />
        </a>

        <Link href="#">About</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <Button text={'Sign In'} variant={'btn-primary'} />
        </div>
      </div>
    </div>
  );
};

export default Header;

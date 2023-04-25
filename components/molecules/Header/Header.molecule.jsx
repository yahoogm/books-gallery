import Button from '@/components/atoms/Button/Button.atom';
import Title from '@/components/atoms/Title/Title.atom';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="navbar px-14 py-6">
      <div className="flex-1 space-x-20">
        <Link href="/" className="normal-case">
          <Title />
        </Link>

        <Link href="#" className="text-black font-semibold">
          About
        </Link>
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

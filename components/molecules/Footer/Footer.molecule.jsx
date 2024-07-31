import { Title } from '@/components/atoms';
import Link from 'next/link';
import {
  FaGithubSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-between p-4 md:px-12 md:py-4 lg:px-28 lg:py-4 text-neutral-content bg-[#9ca3af]">
      <div className="flex justify-items-center items-center space-x-4">
        <Title />
        <div className="flex items-center space-x-1">
          <div>Made with</div>
          <Link
            href={'https://daisyui.com/'}
            className="text-primary font-semibold hover:text-secondary"
          >
            DaisyUI
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <a href="https://github.com/yahoogm" target="_blank">
          <FaGithubSquare size={25} className="hover:text-primary" />
        </a>
        <a href="https://www.instagram.com/yahoomanik/?hl=id" target="_blank">
          <FaInstagram size={25} className="hover:text-primary" />
        </a>
        <a href="https://twitter.com/yahoomanik04" target="_blank">
          <FaTwitter size={25} className="hover:text-primary" />
        </a>
        <a
          href="https://www.linkedin.com/in/yahoo-garfield-manik-24b67b210/"
          target="_blank"
        >
          <FaLinkedin size={25} className="hover:text-primary" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

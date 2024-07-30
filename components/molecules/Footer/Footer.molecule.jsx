import { Title } from '@/components/atoms';
import {
  FaGithubSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer items-center p-4 lg:px-14 lg:py-4 text-neutral-content bg-[#9ca3af]">
      <div className="items-center grid-flow-col justify-self-center">
        <Title />
        <p>
          Made with <span className="text-primary font-semibold">daisy</span>
          <span className="text-gray-200 font-semibold">UI</span>
        </p>
      </div>
      <div className="grid-flow-col gap-4 place-self-center justify-self-center">
        <a href="https://github.com/yahoogm" target="_blank">
          <FaGithubSquare size={25} />
        </a>
        <a href="https://www.instagram.com/yahoomanik/?hl=id" target="_blank">
          <FaInstagram size={25} />
        </a>
        <a href="https://twitter.com/yahoomanik04" target="_blank">
          <FaTwitter size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/yahoo-garfield-manik-24b67b210/"
          target="_blank"
        >
          <FaLinkedin size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import { Title } from '@/components/atoms';
import { FaGithubSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer items-center px-14 py-4 text-neutral-content bg-[#9ca3af]">
      <div className="items-center grid-flow-col">
        <Title />
        <p>
          Made with <span className="text-primary font-semibold">daisy</span>
          <span className="text-gray-300 font-semibold">UI</span>
        </p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/yahoogm" target="_blank">
          <FaGithubSquare size={25} />
        </a>
        <a href="https://www.instagram.com/yahoomanik/?hl=id" target="_blank">
          <FaInstagram size={25} />
        </a>
        <a href="https://twitter.com/yahoomanik04" target="_blank">
          <FaTwitter size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

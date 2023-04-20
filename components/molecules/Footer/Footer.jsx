import Title from '@/components/atoms/Title/Title';
import { FaGithubSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer items-center px-14 py-4 text-neutral-content bg-[#9ca3af] fixed bottom-0">
      <div className="items-center grid-flow-col">
        <Title />
        <p>
          Made with <span className="text-primary font-semibold">daisy</span>
          <span className="text-gray-300 font-semibold">UI</span>
        </p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <FaGithubSquare size={25} />
        </a>
        <a>
          <FaInstagram size={25} />
        </a>
        <a>
          <FaTwitter size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

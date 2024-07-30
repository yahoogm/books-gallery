import Footer from '@/components/molecules/Footer/Footer.molecule';
import Header from '@/components/molecules/Header/Header.molecule';

const HeaderAndFooter = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between space-y-6 lg:space-y-10">
      <Header />
      <div className="px-4 lg:px-32 lg:space-y-32">{children}</div>
      <Footer />
    </div>
  );
};

export default HeaderAndFooter;

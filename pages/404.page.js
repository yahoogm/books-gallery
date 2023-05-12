import Head from 'next/head';
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div className="m-auto min-h-screen flex items-center justify-center">
      <Head>
        <title>Books Gallery - Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center space-y-8">
        <h1 className="text-[10rem] font-extrabold">Oops!</h1>
        <h1 className="text-3xl font-bold text-primary-400 uppercase">
          404 - page not found
        </h1>
        <p>
          The page you are looking for might have been removed <br /> had its
          name changed or is temporarily unavailable
        </p>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

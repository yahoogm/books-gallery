import Head from 'next/head';

export default function Custom500() {
  return (
    <div className="m-auto min-h-screen flex items-center justify-center">
      <Head>
        <title>Books Gallery - Server-side error</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center space-y-8">
        <h1 className="text-[10rem] font-extrabold">Oops!</h1>
        <h1 className="text-3xl font-bold text-primary-400 uppercase">
          500 - Server-side error occurred
        </h1>
        <p>The server maybe risk</p>
      </div>
    </div>
  );
}

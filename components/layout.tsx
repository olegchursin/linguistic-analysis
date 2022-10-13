import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Footer from './footer';
import Navbar from './navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Linguistic Analysis</title>
        <meta name="description" content="Linguistic Analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dark:bg-gray-900">
        <Navbar />
        <main className="container">{children}</main>
      </div>
      <div className="dark:bg-gray-900">
        <Footer />
      </div>
    </>
  );
};

export default Layout;

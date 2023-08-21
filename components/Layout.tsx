import { FunctionComponent, ReactNode } from 'react';
import PageHead from '../components/PageHead';
import Blur from '../components/Blur';
import Nav from '../components/Nav';
import Trail from '../components/Trail';
import Footer from './Footer';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
  data?: any;
  isNotHome?: boolean;
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  data,
  isNotHome = false,
}) => {
  return (
    <>
      <PageHead isNotHome={isNotHome} data={data} />
      <Blur />
      <main className='mx-auto relative'>
        <div className='main-grid'>
          {isNotHome ? (
            <div className='sticky whitespace-nowrap col-start-1'>
              <Link href='/'>
                <i className='ri-arrow-go-back-line text-fc mr-1'></i>
                <em>Index</em>
              </Link>
            </div>
          ) : (
            <>
              <Nav />
            </>
          )}

          <div>
            <Trail open={true}>{children}</Trail>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

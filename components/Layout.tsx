import { FunctionComponent, ReactNode } from 'react';
import PageHead from '../components/PageHead';
import Blur from '../components/Blur';
import Nav from '../components/Nav';
import Trail from '../components/Trail';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <PageHead />
      <Blur />
      <main className='mx-auto relative'>
        <div className='main-grid'>
          <Nav />
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

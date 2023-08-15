import { NextPage } from 'next';

import Project from '../components/Project';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <header className='mb-8'>
        <h2 className='text-base uppercase'>Torrence Cole</h2>
        <h3 className='text-sub text-fc uppercase'>Software Developer</h3>
      </header>
      <p className='mb-8'>
        Simplifying complex problems involves breaking them into manageable
        blocks. With consistent effort, these blocks can be methodically
        assembled over time to construct comprehensive solutions. The focus is
        on crafting digital experiences, designing intuitive user interfaces,
        and developing APIs that power them, all in the pursuit of effective
        problem-solving.
      </p>

      <aside>
        <h4 className='text-sm text-fc mb-4'>Projects</h4>
        <div className='grid grid-cols-5 grid-rows-2 gap-x-3 gap-y-3'>
          <Project title='Jan-Dell' link='#' image='portfolio-03.jpg' />
          <Project title='Jan-Dell' link='#' image='portfolio-03.jpg' />
          <Project title='Jan-Dell' link='#' image='portfolio-03.jpg' />
          <Project title='Jan-Dell' link='#' image='portfolio-03.jpg' />
          <Project title='Jan-Dell' link='#' image='portfolio-03.jpg' />
          <Project title='Jan-Dell' link='#' image='portfolio-03.jpg' />
          <Project title='Jan-Dell' link='#' image='portfolio-03.jpg' />
          <Project title='Jan-Dell' link='#' image='portfolio-03.jpg' />
          <Project title='Jan-Dell' link='#' image='portfolio-03.jpg' />
          <Project title='Jan-Dell' link='#' image='portfolio-03.jpg' />
        </div>
      </aside>
    </Layout>
  );
};

export default Home;

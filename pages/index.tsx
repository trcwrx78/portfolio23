import { NextPage } from 'next';

import Project from '../components/Project';
import Layout from '../components/Layout';
import { projectsMD } from '../lib/projects';
import { writingsMD } from '../lib/writings';
import Writing from '../components/Writing';

interface HomeProps {
  allProjectData: any;
  allWritingData: any;
}

const Home: NextPage<HomeProps> = ({ allProjectData, allWritingData }) => {
  const projects = allProjectData.map((project: any, i: number) => (
    <Project
      title={project.title}
      link={project.id}
      image={project.image ? project.image : `portfolio-03.jpg`}
      key={i}
    />
  ));

  const projectRows: number = Math.max(projects!.lenth / 5);

  let prevDate: string = '';

  const writings = allWritingData.map((writing: any, i: number) => {
    const year = writing.date.split('-')[0];

    let displayDate = year;
    if (year === prevDate) {
      // Don't display the year if it's the same as the previous writing
      displayDate = '';
    }
    // Update the previous date for the next iteration
    prevDate = year;

    return (
      <Writing
        title={writing.title}
        link={writing.id}
        date={displayDate}
        description={writing.description}
        key={i}
      />
    );
  });

  return (
    <Layout>
      <header className='mb-8'>
        <h2 className='text-base uppercase'>Torrence Cole</h2>
        <h3 className='text-sub text-fc uppercase'>Software Developer</h3>
      </header>
      <p className='mb-8 text-pc'>
        Simplifying complex problems involves breaking them into manageable
        blocks. With consistent effort, these blocks can be methodically
        assembled over time to construct comprehensive solutions. The focus is
        on crafting digital experiences, designing intuitive user interfaces,
        and developing APIs that power them, all in the pursuit of effective
        problem-solving.
      </p>

      <section className='mb-8'>
        <h4 className='text-base text-fg mb-4'>Projects</h4>
        <div
          className={`grid grid-cols-5 grid-rows-${projectRows} gap-x-3 gap-y-3`}
        >
          {projects}
        </div>
      </section>

      {writings.length > 0 && (
        <section className='mb-8'>
          <h4 className='text-base text-fg mb-4'>Writing</h4>
          {writings}
        </section>
      )}

      <section>
        <h4 className='text-base text-fg mb-4'>Current</h4>
        <p className='mb-4 text-pc'>
          At present, immersing myself in deep learning through hands-on
          projects and comprehensive courses. My latest exploration has taken me
          into the world of Java—a captivating journey, to say the least.
        </p>
        <p className='mb-4 text-pc'>
          Actively on the lookout for full-stack web development opportunities,
          I have a particular interest in projects that harness the power of
          React and Node.js.
        </p>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allProjectData = projectsMD.getAllData();
  const allWritingData = writingsMD.getAllData();
  return {
    props: {
      allProjectData,
      allWritingData,
    },
  };
}

export default Home;

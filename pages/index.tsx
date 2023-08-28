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
        oneLiner={writing.oneLiner}
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
        Driven by a passion for crafting digital excellence. With five years of
        experience, I specialize in breaking down complex problems into
        manageable components, constructing comprehensive solutions that
        seamlessly address challenges. From intuitive user interfaces to
        powerful APIs, I create impactful digital experiences. My expertise in
        React, React Native, Next.js, and Node.js empowers me to innovate, while
        my collaborative spirit thrives in diverse team environments. My work is
        more than code; it&apos;s about transforming ideas into functional
        solutions that inspire and empower. Join me in redefining digital
        possibilities.
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
          At present, I am diving deeper into my learning through hands-on
          projects and extensive courses. While I&apos;ve dabbled in Java in the
          past, my recent explorations have deepened my appreciation and
          understanding of its potential.
        </p>
        <p className='mb-4 text-pc'>
          Actively on the lookout for full-stack web development opportunities,
          I have a particular interest in projects that harness the power of
          React, Node.js, and Java.
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

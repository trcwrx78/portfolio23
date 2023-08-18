import { NextPage } from 'next';

import Project from '../components/Project';
import Layout from '../components/Layout';
import { projectsMD } from '../lib/projects';

interface HomeProps {
  allProjectData: any;
}

const Home: NextPage<HomeProps> = ({ allProjectData }) => {
  console.log(allProjectData);

  const projects = allProjectData.map((project: any, i: number) => (
    <>
      <Project
        title={project.title}
        link={project.id}
        image='portfolio-03.jpg'
        key={i}
      />
    </>
  ));

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
          {projects}
        </div>
      </aside>
    </Layout>
  );
};

export async function getStaticProps() {
  const allProjectData = projectsMD.getAllData();
  return {
    props: {
      allProjectData,
    },
  };
}

export default Home;

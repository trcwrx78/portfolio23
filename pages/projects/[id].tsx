import { FunctionComponent } from 'react';
import { projectsMD } from '../../lib/projects';
import Layout from '../../components/Layout';

interface ProjectProps {
  projectData: any;
}

const Project: FunctionComponent<ProjectProps> = ({ projectData }) => {
  const date = new Date(projectData.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Layout isNotHome data={projectData}>
      <h1 className='text-base mb-4'>{projectData.title}</h1>
      <h2 className='text-base text-fc mb-4'>{date}</h2>

      <div
        className='markdown'
        dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = projectsMD.getAllIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const projectData = await projectsMD.getData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export default Project;

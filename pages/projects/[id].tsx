import React, { FunctionComponent } from 'react';
import { projectsMD } from '../../lib/projects';
import Layout from '../../components/Layout';

interface ProjectProps {
  projectData: any;
}

const Project: FunctionComponent<ProjectProps> = ({ projectData }) => {
  return (
    <Layout isNotHome data={projectData}>
      <h1>{projectData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
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

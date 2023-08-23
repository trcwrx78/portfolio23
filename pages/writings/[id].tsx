import React, { FunctionComponent } from 'react';
import { writingsMD } from '../../lib/writings';
import Layout from '../../components/Layout';

interface WritingProps {
  writingData: any;
}

const Writing: FunctionComponent<WritingProps> = ({ writingData }) => {
  return (
    <Layout isNotHome data={writingData}>
      <h1 className='text-base mb-4'>{writingData.title}</h1>
      <div
        className='markdown'
        dangerouslySetInnerHTML={{ __html: writingData.contentHtml }}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = writingsMD.getAllIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const writingData = await writingsMD.getData(params.id);
  return {
    props: {
      writingData,
    },
  };
}

export default Writing;

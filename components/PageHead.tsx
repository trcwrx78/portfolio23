import Head from 'next/head';
import { FunctionComponent } from 'react';

interface PageHeadProps {
  title?: string;
  description?: string;
}

const PageHead: FunctionComponent<PageHeadProps> = ({
  title = 'Torrence Cole',
  description = 'I craft inventive software solutions using state-of-the-art technologies, applying my adept problem-solving skills. With expertise in designing, developing, and optimizing applications, I ensure smooth user experiences while meeting intricate business demands. Welcome to my digital domain of innovation and proficiency in the world of software engineering.',
}) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
        <title>{title}</title>
      </Head>
    </>
  );
};

export default PageHead;

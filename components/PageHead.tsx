import Head from 'next/head';
import Script from 'next/script';
import { FunctionComponent } from 'react';

interface PageHeadProps {
  title?: string;
  description?: string;
  isNotHome?: boolean;
  data?: any;
}

const PageHead: FunctionComponent<PageHeadProps> = ({
  title = 'Torrence Cole',
  description = 'I craft inventive software solutions using state-of-the-art technologies, applying my adept problem-solving skills. With expertise in designing, developing, and optimizing applications, I ensure smooth user experiences while meeting intricate business demands. Welcome to my digital domain of innovation and proficiency in the world of software engineering.',
  isNotHome = false,
  data,
}) => {
  const finalTitle = isNotHome ? `${data?.title}` : title;
  const finalDescription = isNotHome ? `${data?.description}` : description;

  return (
    <>
      {/* Google tag (gtag.js) - Google Analytics */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-P9K45FDWMG`}
      />
      <Script id='gtag-init'>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'G-P9K45FDWMG');`}
      </Script>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={finalDescription} />
        <title>{finalTitle}</title>
      </Head>
    </>
  );
};

export default PageHead;

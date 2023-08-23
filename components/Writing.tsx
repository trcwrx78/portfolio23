import Link from 'next/link';
import { FunctionComponent } from 'react';

interface WritingProps {
  title: string;
  link: string;
  date: string;
  description: string;
}

const Writing: FunctionComponent<WritingProps> = ({
  title,
  link,
  date,
  description,
}) => {
  return (
    <div className='grid grid-cols-[clamp(8em,20vw,6em),1fr] items-baseline mb-4'>
      <div className='text-fc'>{date}</div>
      <div>
        <h3 className='mb-2'>
          <Link
            href={`/writings/${link}`}
            className='border-b border-fc hover:border-text-color pb-[0.005rem]'
          >
            {title}
          </Link>
        </h3>
        <p className='my-3 text-pc'>{description}</p>
      </div>
    </div>
  );
};

export default Writing;

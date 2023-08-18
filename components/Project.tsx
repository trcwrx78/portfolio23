/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ProjectProps {
  title: string;
  link: string;
  image: string;
}

const Project: FunctionComponent<ProjectProps> = ({ title, link, image }) => {
  return (
    <div className='group col-span-1 row-span-1 bg-fc rounded-lg shadow-custom-black transform transition-transform duration-300 hover:scale-105'>
      <Link href={`projects/${link}`} className='relative block'>
        <img
          src={`/images/${image}`}
          alt={title}
          className='w-full h-full object-cover rounded-lg'
        />

        {/* Tooltip */}
        <span className='absolute z-10 bottom-0 w-full bg-black text-white text-xs px-2 py-1 rounded-t-none rounded-b transition-opacity duration-500 opacity-0 group-hover:opacity-100'>
          {title}
        </span>
      </Link>
    </div>
  );
};

export default Project;

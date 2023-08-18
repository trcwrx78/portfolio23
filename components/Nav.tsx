import { FunctionComponent } from 'react';
import Image from 'next/image';

const Nav: FunctionComponent = () => {
  return (
    <nav className='sticky whitespace-nowrap col-start-1'>
      <div className='w-28 h-28 rounded-full overflow-hidden filter grayscale'>
        <Image
          src='/images/dev-trc-01.jpg'
          alt='Torrence'
          width={120}
          height={120}
        />
      </div>
      <ul className='mt-8'>
        <li className='mb-4'>
          <i className='ri-twitter-x-line'></i>
        </li>
        <li className='mb-4'>
          <i className='ri-linkedin-fill'></i>
        </li>
        <li className='mb-4'>
          <i className='ri-github-fill'></i>
        </li>
        <li className='mb-4'>
          <i className='ri-mail-line'></i>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

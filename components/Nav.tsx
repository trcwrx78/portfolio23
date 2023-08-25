import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav: FunctionComponent = () => {
  return (
    <nav className='whitespace-nowrap col-start-1 p-4 order-last sm:sticky sm:col-span-1 sm:p-0 sm:order-first'>
      <div className='hidden sm:block sm:w-28 sm:h-28 rounded-full overflow-hidden filter grayscale'>
        <Image
          src='/images/dev-trc-01.jpg'
          alt='Torrence'
          width={120}
          height={120}
        />
      </div>
      <ul className='flex space-x-4 sm:mt-8 sm:flex-col sm:space-x-0'>
        <li className='mb-4 flex items-center'>
          <i className='ri-twitter-x-line pr-2 text-fc hidden sm:block'></i>
          <Link
            href='https://twitter.com/TRC_3'
            target='_blank'
            className='border-b border-fc hover:border-text-color pb-[0.005rem]'
          >
            twitter
          </Link>
          <i className='ri-arrow-right-up-line text-fc'></i>
        </li>
        <li className='mb-4 flex items-center'>
          <i className='ri-linkedin-fill pr-2 text-fc hidden sm:block'></i>
          <Link
            href='https://www.linkedin.com/in/torrencecole'
            target='_blank'
            className='border-b border-fc hover:border-text-color pb-[0.005rem]'
          >
            linkedin
          </Link>
          <i className='ri-arrow-right-up-line text-fc'></i>
        </li>
        <li className='mb-4 flex items-center'>
          <i className='ri-github-fill pr-2 text-fc hidden sm:block'></i>
          <Link
            href='https://github.com/trcwrx78'
            target='_blank'
            className='border-b border-fc hover:border-text-color pb-[0.005rem]'
          >
            github
          </Link>
          <i className='ri-arrow-right-up-line text-fc'></i>
        </li>
        <li className='mb-4 flex items-center'>
          <i className='ri-mail-line pr-2 text-fc hidden sm:block'></i>
          <Link
            href='mailto:trcole@gmail.com'
            target='_blank'
            className='border-b border-fc hover:border-text-color pb-[0.005rem]'
          >
            email
          </Link>
          <i className='ri-arrow-right-up-line text-fc'></i>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

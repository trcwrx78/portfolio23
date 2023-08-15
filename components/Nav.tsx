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
    </nav>
  );
};

export default Nav;

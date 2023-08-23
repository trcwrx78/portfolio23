import { FunctionComponent, useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../lib/dataFetcher';

const Footer: FunctionComponent = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    // Set the time imidiately once the component is mounted
    setTime(new Date().toLocaleTimeString());

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { data, error, isLoading } = useSWR('/api/location', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  // Don't render the footer until the time is set
  if (time === null) return null;

  return (
    <footer className='relative border-t border-fc h-12 w-[calc(100% + var(--body-margin-right) + var(--body-margin-left))]-left-body-margin-left bg-dark-gray z-10 px-body-margin-left font-mono'>
      <div className='max-w-content-width mx-auto flex justify-between items-center h-full whitespace-nowrap'>
        <p className='text-clock text-fc'>Last visit from {data?.location}</p>
        <div className='text-clock text-fc'>{time}</div>
      </div>
    </footer>
  );
};

export default Footer;

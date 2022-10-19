import React from 'react';
import { newsletterData } from '../data';

const Newsletter = () => {
  // destructure newsletter data
  const { title, subtitle, placeholder, btnText } = newsletterData;
  return (
    <div className='bg-none lg:bg-newsletter lg:bg-cover xl:bg-auto lg:bg-center lg:h-[220px] lg:px-24'>
      <div className='flex flex-col lg:flex-row justify-between items-center h-full'>
        <div>newsletter title</div>
        <form className='flex flex-col lg:flex-row lg:gap-x-[10px]'>
          <input className='input' type='text' />
          <button className='btn'>btn</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

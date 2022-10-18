import React from 'react';
import { newsletterData } from '../data';

const Newsletter = () => {
  // destructure newsletter data
  const { title, subtitle, placeholder, btnText } = newsletterData;
  return (
    <div className='w-full max-w-[1182px]'>
      <div className=' h-[210px] lg:bg-newsletter lg:bg-cover lg:bg-center'>
        <div className='h-full flex flex-col lg:flex-row items-center max-w-[890px] mx-auto text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <h3 className='text-[26px] font-primary font-extrabold italic capitalize text-white mb-2'>
              {title}
            </h3>
            <p className='capitalize text-white lg:text-white/30'>{subtitle}</p>
          </div>
          {/* form */}
          <form className='flex flex-col gap-y-4 items-center gap-x-[10px] lg:flex-row'>
            <input
              className='w-full bg-transparent input placeholder:text-white/80  lg:placeholder:text-white/30 placeholder:text-base placeholder:font-light text-white  border border-white/30'
              placeholder={placeholder}
              type='text'
            />
            <button className='btn capitalize mx-auto lg:mx-0 w-[304px]'>
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

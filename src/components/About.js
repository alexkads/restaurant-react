import React from 'react';
// import data
import { aboutData } from '../data';

const About = () => {
  // destructure about data
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section className='min-h-[680px]'>
      <div className='container mx-auto min-h-[680px]'>
        <div className='flex flex-col lg:flex-row items-center min-h-[680px]'>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-8 max-w-[560px]'>{subtitle}</p>
            {/* button */}
            <button className='btn capitalize mx-auto lg:mx-0'>
              {btnText}
            </button>
          </div>
          {/* image */}
          <div className='flex-1 -mb-[300px] -mr-[176px]'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

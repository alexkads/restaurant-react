import React from 'react';
// data
import { teamData } from '../data';

const Team = () => {
  const {
    pretitle,
    title,
    sub1,
    sub2,
    name,
    occupation,
    signatureImg,
    chefImg,
  } = teamData;
  return (
    <section className='relative z-10 top-96 lg:top-[480px]  min-h-[720px]'>
      <div className='container mx-auto'>
        {/* text & image wrapper */}
        <div className='flex flex-col lg:flex-row gap-x-[120px]'>
          {/* text */}
          <div className='flex-1 max-w-[540px] text-center lg:text-left pt-16'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-[60px]'>{sub1}</p>
            <p>{sub2}</p>
            <div className='my-[26px]'>
              <div className='text-2xl font-semibold capitalize text-accent'>
                {name}
              </div>
              <div className='text-[15px] font-semibold capitalize text-grey/70'>
                {occupation}
              </div>
            </div>
            <div className='mx-auto max-w-xs lg:max-w-none'>
              <img src={signatureImg} alt='' />
            </div>
          </div>
          {/* chef image */}
          <div className='flex-1'>
            <img src={chefImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

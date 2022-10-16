import React from 'react';
// import components
import TestimonialCarousel from './TestimonialCarousel';
// import data
import { testimonialData } from '../data';

const Testimonial = () => {
  // destructure testimonial data
  const { title, subtitle, modelImg, slider } = testimonialData;
  return (
    <div className='bg-testimonial bg-cover bg-no-repeat relative top-[340px] lg:top-[390px] z-10 h-[800px] pt-36'>
      <div className='container mx-auto h-full'>
        {/* text */}
        <div className='text-center capitalize flex flex-col items-center'>
          <h2 className='h2 text-white'>{title}</h2>
          <p className='text-white/70'>{subtitle}</p>
          <div>
            <img src={modelImg} alt='' />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <TestimonialCarousel slider={slider} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

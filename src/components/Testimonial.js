import React from 'react';
// import components
import TestimonialCarousel from './TestimonialCarousel';
// import data
import { testimonialData } from '../data';

const Testimonial = () => {
  // destructure testimonial data
  const { title, subtitle, modelImg, slider } = testimonialData;
  return (
    <div className=' bg-testimonial bg-cover bg-no-repeat relative top-[340px] lg:top-[390px] z-10 h-[800px]'>
      <div className='container mx-auto h-full'>
        {/* text */}
        <div>
          <h2></h2>
        </div>
        <div className='h-full flex justify-center items-center'>
          <TestimonialCarousel slider={slider} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

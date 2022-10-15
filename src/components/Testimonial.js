import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const Testimonial = () => {
  return (
    <div className=' bg-testimonial relative top-[390px] z-10 h-[800px]'>
      <div className='container mx-auto h-full'>
        <div className='bg-yellow-300 h-full flex justify-center items-center'>
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

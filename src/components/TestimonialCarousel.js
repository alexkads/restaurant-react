import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../slider.css';

const TestimonialCarousel = ({ slider }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={true}
      infiniteLoop={true}
      className='w-full max-w-[1024px] flex items-center justify-center'
    >
      {slider.map((item, index) => {
        return (
          <div
            className='max-w-[840px] mx-auto px-24 text-white text-2xl leading-snug font-normal'
            key={index}
          >
            {item.message}
          </div>
        );
      })}
    </Carousel>
  );
};

export default TestimonialCarousel;

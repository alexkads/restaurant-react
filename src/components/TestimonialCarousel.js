import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const sliderData = [
  {
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo provident culpa similique veritatis quidem aperiam nostrum minus quis nihil voluptatibus suscipit numquam.',
    image: '',
    name: 'Rick Thompson',
    occupation: 'CEO of Delightetn',
  },
  {
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo provident culpa similique veritatis quidem aperiam nostrum minus quis nihil voluptatibus suscipit numquam.',
    image: '',
    name: 'Rick Thompson',
    occupation: 'CEO of Delightetn',
  },
  {
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo provident culpa similique veritatis quidem aperiam nostrum minus quis nihil voluptatibus suscipit numquam.',
    image: '',
    name: 'Rick Thompson',
    occupation: 'CEO of Delightetn',
  },
];

const TestimonialCarousel = () => {
  return (
    <Carousel className='bg-blue-300 h-[500px] w-full max-w-[1024px] flex items-center justify-center'>
      {sliderData.map((item, index) => {
        return <div key={index}>{item.message}</div>;
      })}
    </Carousel>
  );
};

export default TestimonialCarousel;

import React from 'react';
// import data
import { aboutData } from '../data';
// import motion
import { motion } from 'framer-motion';

const plateVariants = {
  hidden: {
    x: 100 + '%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
};

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
            <p className='mb-8'>{subtitle}</p>
            {/* button */}
            <button className='btn capitalize mx-auto lg:mx-0'>
              {btnText}
            </button>
          </div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='flex-1 -mb-[300px] -mr-[176px]'
          >
            <img src={image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

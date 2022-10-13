import React from 'react';
// import data
import { aboutData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';

const plateVariants = {
  hidden: {
    x: '110%',
    rotate: 180,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring', // or tween
      duration: 2,
    },
  },
};

const About = () => {
  // destructure about data
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section className='min-h-[680px]'>
      <div className='container mx-auto min-h-[680px]'>
        <motion.div
          variants={staggerContainer(0.3, 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className='flex flex-col lg:flex-row items-center min-h-[680px]'
        >
          {/* text */}
          <motion.div
            variants={fadeIn('right', 1)}
            className='flex-1 text-center lg:text-left'
          >
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-8'>{subtitle}</p>
            {/* button */}
            <button className='btn capitalize mx-auto lg:mx-0'>
              {btnText}
            </button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className='flex-1 -mb-[300px] -mr-[176px]'
          >
            <img src={image} alt='' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

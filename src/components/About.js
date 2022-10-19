import React from 'react';
// import data
import { aboutData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { plateVariants, staggerContainer, fadeIn } from '../variants';

const About = () => {
  // destructure about data
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section className='min-h-[620px]'>
      <div className='container mx-auto min-h-[620px]'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className='flex flex-col lg:flex-row items-center min-h-[620px]'
        >
          {/* text */}
          <motion.div
            variants={fadeIn('right', 1.6)}
            className='flex-1 text-center lg:text-left'
          >
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-8 max-w-[560px]'>{subtitle}</p>
            {/* button */}
            <button className='btn capitalize mx-auto lg:mx-0'>
              {btnText}
            </button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className='-mb-[300px] -mr-[186px] z-10'
          >
            <img src={image} alt='' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

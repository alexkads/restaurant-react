import React, { useState } from 'react';
import NavMobile from './NavMobile';

// import motion
import { motion } from 'framer-motion';

const navMobileVariants = {
  hidden: {
    opacity: 0,
    clipPath: 'circle(30px at 40px 40px)',
  },
  show: {
    opacity: 1,
    clipPath: 'circle(1000px at 40px 40px)',
    transition: { duration: 0.4 },
  },
};

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header className='fixed w-full max-w-[1800px]'>
      <div className='container mx-auto'>
        <div className='text-white flex justify-between items-center py-[70px]'>
          {/* menu btn */}
          <div onClick={() => setNavMobile(!navMobile)}>menu btn</div>
          {/* logo */}
          <div>logo</div>
          {/* social icons */}
          <div>social icons</div>
          {/* nav mobile */}
          <motion.div
            variants={navMobileVariants}
            initial='hidden'
            animate={navMobile ? 'show' : ''}
            className='bg-accent w-[300px] absolute h-screen left-0 top-0 bottom-0'
          >
            <NavMobile />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;

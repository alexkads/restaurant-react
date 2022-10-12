import React, { useState } from 'react';
import NavMobile from './NavMobile';

// import motion
import { motion } from 'framer-motion';

const navMobileVariants = {
  hidden: {
    opacity: 0,
    clipPath: 'circle(9.8% at 51% 0)',
  },
  show: {
    opacity: 1,
    clipPath: 'circle(89.4% at 51% 0)',
    transition: { type: 'spring', damping: 20, stifness: 60 },
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
            className='bg-accent w-[300px] absolute h-[80vh] xl:left-[12%] top-[80%] bottom-0 -z-10 rounded-lg'
          >
            <NavMobile />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;

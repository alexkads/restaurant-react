import React, { useEffect, useState } from 'react';
// import components
import NavMobile from './NavMobile';
import Socials from './Socials';
// import images
import LogoWhite from '../assets/img/header/logo-white.png';
// import motion
import { motion } from 'framer-motion';
// import variants
import { staggerContainer, fadeIn } from '../variants';

const headerVariants = {
  hidden: {
    padding: '84px 0 84px 0',
    background: `none`,
  },
  show: {
    padding: '14px 0 14px 0',
    background: 'rgba(0, 0, 0, 0.92)',
    transition: {
      type: 'spring',
      // duration: 0.2,
    },
  },
};

export const navMobileVariants = {
  hidden: {
    clipPath: 'circle(6.2% at 1% 1%)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 40,
    },
  },
  show: {
    opacity: 1,
    clipPath: `circle(139.5% at 1% 2%)`,
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

const Header = () => {
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <motion.header
      className='fixed w-full max-w-[1800px] z-50 py-4'
      variants={headerVariants}
      initial='hidden'
      animate={isActive ? 'show' : ''}
    >
      {/* container */}
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial='hidden'
        animate={'show'}
        className='container mx-auto'
      >
        <div className='text-white flex justify-between items-center px-4 lg:px-0 relative'>
          {/* menu btn */}
          <motion.div
            variants={fadeIn('down', 'tween', 1, 1.8)}
            className={`${
              navMobile ? 'gap-y-0' : 'gap-y-2'
            } flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
            onClick={() => setNavMobile(!navMobile)}
          >
            {/* bar */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{
                rotate: navMobile ? -45 : 0,
                translateY: navMobile ? 2 : 0,
              }}
              className='w-full h-[2px] bg-white'
            ></motion.div>
            {/* bar */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{
                rotate: navMobile ? 45 : 0,
              }}
              className='w-full h-[2px] bg-white'
            ></motion.div>
          </motion.div>
          {/* logo */}
          <motion.div
            variants={fadeIn('down', 'tween', 1.2, 1.8)}
            className='order-1 lg:order-none lg:ml-[11rem]'
          >
            <a href='#'>
              <img
                src={LogoWhite}
                className={`${
                  isActive ? 'w-[90px] h-[90px]' : 'w-[107px] h-[107px]'
                } transition-all duration-200`}
                alt=''
              />
            </a>
          </motion.div>
          {/* social icons */}
          <motion.div
            variants={fadeIn('down', 'tween', 1.4, 1.8)}
            className='hidden lg:flex'
          >
            <Socials />
          </motion.div>
          {/* nav mobile */}
          <motion.div
            variants={navMobileVariants}
            initial='hidden'
            animate={navMobile ? 'show' : ''}
            className='absolute w-[310px] h-[50vh] bg-accent right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl'
          >
            <NavMobile />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;

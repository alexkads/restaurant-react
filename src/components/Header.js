import React, { useEffect, useState } from 'react';
// import components
import NavMobile from './NavMobile';
// import images
import LogoWhite from '../assets/img/header/logo-white.png';
// import motion
import { motion } from 'framer-motion';

const navMobileVariants = {
  hidden: {
    clipPath: 'circle(6.2% at 1% 1%)',
    opacity: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  show: {
    opacity: 1,
    clipPath: `circle(139.5% at 1% 2%)`,
    transition: {
      type: 'spring',
      stiffness: 40,
    },
  },
};

const menuBarRotateLeft = {
  hidden: { rotate: 0 },
  show: {
    rotate: -45,
    translateY: 2,
  },
};

const headerVariants = {
  hidden: {
    padding: '70px 0 70px 0',
    background: `none`,
  },
  show: {
    padding: '14px 0 14px 0',
    background: '#0B0D0F',
    dropShadow: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))',
    transition: {
      // type: 'tween',
      // duration: 0.3,
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
      className='fixed w-full max-w-[1800px]'
      variants={headerVariants}
      initial='hidden'
      animate={isActive ? 'show' : ''}
    >
      <div className='container mx-auto'>
        <div className='text-white flex justify-between items-center px-4 lg:px-0 relative'>
          {/* menu btn */}
          <div
            className={`${
              navMobile ? 'bg-accent gap-y-0' : 'bg-transparent gap-y-2'
            } flex flex-col items-center justify-center w-12 h-12 order-2 lg:order-none cursor-pointer`}
            onClick={() => setNavMobile(!navMobile)}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{
                rotate: navMobile ? -45 : 0,
                translateY: navMobile ? 2 : 0,
              }}
              className='w-10 h-[2px] bg-white'
            ></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{
                rotate: navMobile ? 45 : 0,
              }}
              className='w-10 h-[2px] bg-white'
            ></motion.div>
          </div>
          {/* logo */}
          <div className='order-1 lg:order-none'>
            <a href='#'>
              <img
                src={LogoWhite}
                className={`${isActive ? 'w-[90px] h-[90px]' : ''}`}
                alt=''
              />
            </a>
          </div>
          {/* social icons */}
          <div className='hidden lg:flex'>social icons</div>
          {/* nav mobile */}
          <motion.div
            variants={navMobileVariants}
            initial='hidden'
            animate={navMobile ? 'show' : ''}
            className='bg-accent w-[310px] absolute h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg'
          >
            <NavMobile />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

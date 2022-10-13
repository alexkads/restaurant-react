import React, { useEffect, useState } from 'react';
// import components
import NavMobile from './NavMobile';
import Socials from './Socials';
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

const headerVariants = {
  hidden: {
    padding: '84px 0 84px 0',
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
      className='fixed w-full max-w-[1800px] z-10'
      variants={headerVariants}
      initial='hidden'
      animate={isActive ? 'show' : ''}
    >
      <div className='container mx-auto'>
        <div className='text-white flex justify-between items-center px-4 lg:px-0 relative'>
          {/* menu btn */}
          <div
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
          </div>
          {/* logo */}
          <div className='order-1 lg:order-none lg:ml-[11rem]'>
            <a href='#'>
              <img
                src={LogoWhite}
                className={`${isActive ? 'w-[90px] h-[90px]' : ''}`}
                alt=''
              />
            </a>
          </div>
          {/* social icons */}
          <div className='hidden lg:flex'>
            <Socials />
          </div>
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

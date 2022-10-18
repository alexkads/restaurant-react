import React from 'react';
// components
import Newsletter from './Newsletter';
// import data
import { footerData } from '../data';

const Footer = () => {
  // destructure footer data
  const { contact, hours, social } = footerData;
  return (
    <footer className='relative top-96 z-20 lg:py-[80px] bg-footer bg-cover bg-no-repeat bg-center h-[620px]'>
      <div className='container mx-auto h-full flex w-full justify-center items-center'>
        <Newsletter />
      </div>
    </footer>
  );
};

export default Footer;

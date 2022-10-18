import React from 'react';
// components
import Newsletter from './Newsletter';
// import data
import { footerData } from '../data';

const Footer = () => {
  // destructure footer data
  const { contact, hours, social } = footerData;
  return (
    <footer className='relative top-96 z-20 pt-[80px] lg:pt-[120px] bg-footer bg-cover bg-no-repeat bg-center h-[620px]'>
      <div className='container mx-auto h-full flex flex-col items-center'>
        {/* neswletter */}
        <div className='w-full mb-[52px]'>
          <Newsletter />
        </div>
        {/* info */}
        <div className='flex flex-col lg:flex-row justify-between gap-x-[10px] text-white/40 capitalize w-full max-w-[1100px]'>
          {/* contact */}
          <div className='flex-1'>
            <div className='text-[26px] font-primary capitalize mb-4 text-white'>
              {contact.title}
            </div>
            <div className='text-base'>{contact.address}</div>
            <div className='text-base'>{contact.phone}</div>
          </div>
          {/* hours */}
          <div className='flex-1 w-full'>
            {/* title */}
            <div className='text-[26px] font-primary capitalize mb-4 text-white'>
              {hours.title}
            </div>
            {/* program */}
            <div className='flex gap-x-[26px]'>
              {hours.program.map((item, index) => {
                return (
                  <div key={index}>
                    <div>{item.days}</div>
                    <div className=''>{item.hours}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* social */}
          <div className='flex-1'>
            <div className='text-[26px] font-primary capitalize mb-4 text-white'>
              {social.title}
            </div>
            <div className='flex gap-x-[10px]'>
              {social.icons.map((item, index) => {
                return (
                  <a
                    href={item.href}
                    className='border border-white/30 p-2 rounded-full text-base w-9 h-9 flex justify-center items-center hover:text-accent hover:border-accent transition'
                    key={index}
                  >
                    <div>{item.icon}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
// components
import Newsletter from './Newsletter';
// import data
import { footerData } from '../data';

const Footer = () => {
  // destructure footer data
  const { contact, hours, social } = footerData;
  return (
    <footer className='relative top-96 z-20 py-[80px] xl:pt-[120px] bg-footer bg-cover bg-no-repeat bg-center lg:h-[620px]'>
      <div className='container mx-auto h-full flex flex-col items-center gap-y-12 lg:gap-y-0'>
        {/* neswletter */}
        <div className='w-full xl:mb-[52px]'>
          <Newsletter />
        </div>
        {/* info */}
        <div className='flex flex-col xl:flex-row text-white/40 capitalize w-full max-w-[1100px] text-center xl:text-left gap-y-12'>
          {/* contact */}
          <div className='flex-1'>
            <div className='text-[20px] lg:text-[24px] font-primary capitalize mb-4 text-white'>
              {contact.title}
            </div>
            <div className='max-w-[160px]'>
              <div className='text-base'>{contact.address}</div>
              <div className='text-base font-bold'>{contact.phone}</div>
            </div>
          </div>
          {/* hours */}
          <div className='w-full xl:w-[50%] flex flex-col xl:items-center'>
            <div>
              {/* title */}
              <div className='text-[20px] lg:text-[24px] font-primary capitalize mb-4 text-white self-start'>
                {hours.title}
              </div>
              {/* program */}
              <div className='flex flex-col lg:flex-row justify-center lg:gap-x-[24px]'>
                {hours.program.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className='mb-2'>{item.days}</div>
                      <div className='lg:text-[24px] text-accent'>
                        {item.hours}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* social */}
          <div className='flex-1'>
            <div className='text-[20px] lg:text-[24px] font-primary capitalize mb-4 text-white'>
              {social.title}
            </div>
            <div className='flex gap-x-[10px] justify-center xl:justify-start'>
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

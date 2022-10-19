import React from 'react';
// components
import Newsletter from './Newsletter';
import Copyright from './Copyright';
// import data
import { footerData } from '../data';

const Footer = () => {
  // destructure footer data
  const { contact, hours, social } = footerData;
  return (
    <footer className='relative top-96 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20'>
      <div className='container mx-auto h-full'>
        {/* newsletter & footer info */}
        <div className='h-full flex flex-col gap-y-12'>
          {/* newsletter */}
          <Newsletter />
          {/* info */}
          <div className='flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12'>
            {/* contact */}
            <div className='flex-1 lg:max-w-[170px]'>
              <div className='text-[20px] lg:text-[22px] font-normal  text-white font-primary capitalize mb-[22px]'>
                {contact.title}
              </div>
              <div className='capitalize'>{contact.address}</div>
              <div className='capitalize'>{contact.phone}</div>
            </div>
            {/* program */}
            <div className='flex-1'>
              <div className='text-[20px] lg:text-[22px] font-normal  text-white font-primary capitalize mb-[22px]'>
                {hours.title}
              </div>
              <div className='flex gap-x-[46px]'>
                {hours.program.map((item, index) => {
                  return (
                    <div className='capitalize' key={index}>
                      <div>
                        <div>{item.days}</div>
                        <div className='text-[20px] text-accent'>
                          {item.hours}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* social */}
            <div className='flex-1 lg:max-w-[280px] mb-12'>
              <div className='text-[20px] lg:text-[22px] font-normal  text-white font-primary capitalize mb-[22px]'>
                {social.title}
              </div>
              <div className='flex gap-x-[10px]'>
                {social.icons.map((icon, index) => {
                  return (
                    <a
                      href={icon.href}
                      className='border rounded-full border-white/20 w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all'
                      key={index}
                    >
                      {icon.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;

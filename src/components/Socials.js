import React from 'react';
// import data
import { socialData } from '../data';

const Socials = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {socialData.map((icon, index) => {
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
  );
};

export default Socials;

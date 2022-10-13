import React from 'react';
// import data
import { socialData } from '../data';

const Socials = () => {
  return (
    <ul className='flex gap-x-[10px]'>
      {socialData.map((item, index) => {
        // destructure item
        const { href, icon } = item;
        return (
          <li
            className='border rounded-full  w-9 h-9 flex items-center justify-center'
            key={index}
          >
            <a className='text-sm' href={href}>
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;

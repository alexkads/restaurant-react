import React from 'react';
// import data
import { navData } from '../data';

const NavMobile = () => {
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-4'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a
                className='text-[20px] capitalize font-secondary italic hover:text-dark transition-all duration-300'
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;

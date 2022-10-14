import React from 'react';
// import data
import { menuData } from '../data';

const Menu = () => {
  // destructure menu data
  const { title, subtitle, modelImg, menuItems } = menuData;
  return (
    <section className='bg-menu min-h-[720px] bg-center bg-cover bg-no-repeat pt-[300px] lg:pt-[145px]'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center capitalize flex flex-col items-center max-w-[400px] mx-auto'>
          {/* title */}
          <h2 className='h2 text-white'>{title}</h2>
          {/* subtitle */}
          <p className='text-white mb-10'>{subtitle}</p>
          {/* model */}
          <div className='mb-[60px]'>
            <img src={modelImg} alt='' />
          </div>
        </div>
        <div className=' relative flex justify-center max-w-[295px] mx-auto md:max-w-none'>
          {/* menu items */}
          <div className='absolute grid grid-cols-1 md:grid-cols-4'>
            {menuItems.map((item, index) => {
              // destructure item
              const { image, name, price, description } = item;
              return (
                <div className='text-center' key={index}>
                  <div className='flex flex-col'>
                    {/* image */}
                    <div
                      className={`${
                        // if index is equal to 0 (first item) or 2 (3rd item) add class
                        index === 0 || index === 2 ? 'order-2' : 'order-none'
                      }`}
                    >
                      <img src={image} alt='' />
                    </div>
                    {/* text */}
                    <div className='order-1 bg-[#fff3e4] p-4 xl:h-[295px]'>
                      <div>{item.name}</div>
                      <div>{item.price}</div>
                      <div>{item.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

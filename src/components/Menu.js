import React from 'react';
// import data
import { menuData } from '../data';

const Menu = () => {
  // destructure menu data
  const { title, subtitle, modelImg, menuItems } = menuData;
  return (
    <section className='bg-menu min-h-[720px] bg-center bg-cover bg-no-repeat pt-[300px] lg:pt-[180px]'>
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
        {/* menu items wrapper */}
        <div className=' relative flex justify-center max-w-[295px] mx-auto md:max-w-none'>
          {/* menu items grid */}
          <div className='absolute grid grid-cols-1 md:grid-cols-4 gap-y-12'>
            {menuItems.map((item, index) => {
              // destructure item
              const { image, name, price, description } = item;
              return (
                // item
                <div className='text-center' key={index}>
                  <div className='flex flex-col'>
                    {/* image */}
                    <div
                      className={`${
                        // inverse order for 1st and 3rd item
                        index === 0 || index === 2 ? 'order-2' : 'order-none'
                      }`}
                    >
                      <img src={image} alt='' />
                    </div>
                    {/* text */}
                    <div className='order-1 bg-[#fff3e4] p-12 md:p-4 lg:p-6 xl:p-12  lg:h-[251px] xl:h-[295px] flex flex-col items-center justify-center'>
                      {/* name */}
                      <div className='text-[26px] md:text-[20px] xl:text-[24px] text-dark font-semibold'>
                        {name}
                      </div>
                      {/* price */}
                      <div className='text-[40px] md:text-[24px] lg:text-[40px] font-bold text-accent my-6 md:my-2 lg:my-6'>
                        {price}
                      </div>
                      {/* description */}
                      <div>{description}</div>
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

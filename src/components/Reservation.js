import React, { useState } from 'react';
// import data
import { reservationData } from '../data';
// import datepicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import timepicker
import TimePicker from 'react-time-picker';
// import 'react-time-picker/dist/TimePicker.css';
import '../timepicker.css';

import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';

const Reservation = () => {
  // destructure reservation data
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState('10:00');
  return (
    <section className='relative top-96 z-30 lg:py-[100px]'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center'>
          {/* title */}
          <h2 className='h2 capitalize'>{title}</h2>
          {/* subtitle */}
          <p className='mb-8 text-dark'>{subtitle}</p>
          {/* model */}
          <div className='flex justify-center mb-8'>
            <img src={modelImg} alt='' />
          </div>
        </div>
        <form>
          <div className='flex flex-col lg:flex-row gap-y-4 items-center  justify-between mb-8'>
            {/* datepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaCalendar className='text-base text-dark/70' />
                <div>Choose Date</div>
              </div>
              <DatePicker
                className='input'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* timepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaClock className='text-base text-dark/70' />
                <div>Choose Time</div>
              </div>
              <TimePicker
                className='input'
                clearIcon={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
              />
            </div>
            {/* person number input */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaUsers className='text-lg text-dark/70' />
                <div>How many people?</div>
              </div>
              <input className='input' type='text' placeholder='1' />
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='btn capitalize'>{btnText}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;

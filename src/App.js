import React from 'react';
// import components
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='bg-red-300 h-full bg-pattern bg-repeat max-w-[1800px] mx-auto'>
      <Hero />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;

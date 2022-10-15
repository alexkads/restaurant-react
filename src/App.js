import React from 'react';
// import components
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';

const App = () => {
  return (
    <div className='bg-red-300 h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      <About />
      <Menu />
      <Team />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;

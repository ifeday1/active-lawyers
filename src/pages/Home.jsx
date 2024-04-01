import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../assests/landing1.jpg';

const Home = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img src={Landing} alt='landing' class='max-w-full h-auto' />

        <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <a
            href='/service'
            class='text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out'
          >
            Visit our website
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;

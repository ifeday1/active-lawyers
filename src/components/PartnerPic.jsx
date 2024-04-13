import React from 'react';
import path1 from '../assests/path1.jpg';

const PartnerPic = () => {
  return (
    <>
      <div class='flex justify-around flex-col md:flex-row items-center'>
        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={path1} alt='partner' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-white p-4'>
              <h2 class='text-lg font-bold mb-2'>Ifeoluwa Oladeni</h2>
              <p>Criminal Lawyer</p>
              <p>law123</p>
            </div>
          </div>
        </div>

        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={path1} alt=' partner1' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-white p-4'>
              <h2 class='text-lg font-bold mb-2'>Ifeoluwa Oladeni</h2>
              <p>Criminal Lawyer</p>
              <p>law123</p>
            </div>
          </div>
        </div>

        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={path1} alt='partner1' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-white p-4'>
              <h2 class='text-lg font-bold mb-2'>Ifeoluwa Oladeni</h2>
              <p>Criminal Lawyer</p>
              <p>law123</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerPic;

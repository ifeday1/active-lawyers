import React from 'react';

import law1 from '../assests/law1.jpg';
import law2 from '../assests/law2.jpg';
import law3 from '../assests/law3.jpg';

import law5 from '../assests/law5.jpg';
import law6 from '../assests/law6.jpg';
import law7 from '../assests/law7.jpg';

const PartnerPic = () => {
  return (
    <>
      <div class='flex justify-around flex-col md:flex-row items-center'>
        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={law1} alt='partner' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-white p-4'>
              <h2 class='text-lg font-bold mb-2'>IKOKWU CHINEKWU WINIFRED</h2>
              <p>SCN138613</p>
              <p>2022</p>
            </div>
          </div>
        </div>

        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={law2} alt='partner' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-white p-4'>
              <h2 class='text-lg font-bold mb-2'>AKPAN, UNYIME JOSEPH</h2>
              <p>SCN102262</p>
              <p>2015</p>
            </div>
          </div>
        </div>

        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={law3} alt=' partner1' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-white p-4'>
              <h2 class='text-lg font-bold mb-2'>DAVID, CHIDUBEM BAKWUNYE</h2>
              <p>SCN094376</p>
              <p>2014</p>
            </div>
          </div>
        </div>

        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={law5} alt='partner1' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-white p-4'>
              <h2 class='text-lg font-bold mb-2'>APUTAZIE, CHINYERE LAURA</h2>
              <p>SCN131546</p>
              <p>2021</p>
            </div>
          </div>
        </div>
      </div>

      {/* flex2 */}
      <div class='flex justify-around flex-col md:flex-row items-center'>
        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={law6} alt='partner' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-black p-4'>
              <h2 class='text-lg font-bold mb-2'>OGIDO HALIMAT SADIYA</h2>
              <p>SCN138843</p>
              <p>2022</p>
            </div>
          </div>
        </div>

        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={law7} alt='partner' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-white p-4'>
              <h2 class='text-lg font-bold mb-2'>
                OLALEYE, BODUNDE OLUWATOYIN
              </h2>
              <p>SCN098945</p>
              <p>2015</p>
            </div>
          </div>
        </div>

        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={law3} alt=' partner1' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-white p-4'>
              <h2 class='text-lg font-bold mb-2'>DAVID, CHIDUBEM BAKWUNYE</h2>
              <p>SCN094376</p>
              <p>2014</p>
            </div>
          </div>
        </div>

        <div class='flex flex-col justify-center items-center m-4'>
          <div class='relative'>
            <img src={law5} alt='partner1' class=' w-64 h-auto rounded-lg' />
            <div class='absolute top-48 left-0 text-white p-4'>
              <h2 class='text-lg font-bold mb-2'>APUTAZIE, CHINYERE LAURA</h2>
              <p>SCN131546</p>
              <p>2021</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerPic;

import React from 'react';

const Footer = () => {
  return (
    <>
      <div class='flex flex-col md:flex-row justify-around items-center bg-black'>
        <div class='flex flex-row gap-7 justify-center items-center m-4 text-white'>
          <p class='flex items-center justify-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-phone'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#ffffff'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
            </svg>
            +234 -----
          </p>
          <p class='flex items-center justify-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-mail'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#ffffff'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
              <path d='M3 7l9 6l9 -6' />
            </svg>
            activelawywers@gmail.com
          </p>
        </div>

        <div class='flex flex-col  items-left m-4 text-white'>
          <a href='/service'>
            <div class='  text-white text-sm  hover:text-yellow-600 transition duration-300 ease-in-out'>
              Policy for processing and protection of personal data
            </div>
          </a>
          <a href='/service'>
            <div class='  text-white text-sm  hover:text-yellow-600 transition duration-300 ease-in-out'>
              Cookie Policy
            </div>
          </a>
        </div>

        <div class='flex flex-col text-sm justify-center items-center m-4 text-white'>
          <p>INN: 3804116025, KPP: 380401001, OGRN: 1223800003129</p>
          <p>© 2024 Limited Liability Company "Wollman Law Company"</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

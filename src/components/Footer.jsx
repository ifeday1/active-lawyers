import React from 'react';

const Footer = () => {
  return (
    <>
      <div class='flex flex-col md:flex-row justify-around items-center bg-black'>
        <div class='flex flex-row gap-7 justify-center items-center m-4 text-white'>
          <div class='flex flex-col text-sm justify-left  text-white'>
            <p class='flex items-left justify-left gap-2'>
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
              +234 813 350 9462
            </p>
            <p class='flex items-center justify-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='icon icon-tabler icon-tabler-home-link'
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
                <path d='M20.085 11.085l-8.085 -8.085l-9 9h2v7a2 2 0 0 0 2 2h4.5' />
                <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.807 1.143' />
                <path d='M21 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
                <path d='M21 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
                <path d='M16 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
                <path d='M21 16l-5 3l5 2' />
              </svg>
              King Ogbuefi Steet, Abuja, Nigeria
            </p>
          </div>

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
            support@myactivelawyers.com
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
          <p>© 2024 Limited Liability Company "Active Lawyers"</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

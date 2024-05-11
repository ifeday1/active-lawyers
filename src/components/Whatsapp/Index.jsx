import React from 'react';

const WhatsappChat = () => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href='https://t.me/active_lawyers_help_bot'>
      <div class='fixed bottom-10 right-10 '>
        <button class='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='icon icon-tabler icon-tabler-brand-telegram '
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
            <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
          </svg>
          Chat with Us
        </button>
      </div>
    </a>
  );
};

export default WhatsappChat;

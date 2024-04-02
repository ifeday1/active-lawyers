import React from 'react';
import Navbar from '../components/Navbar';
import landing from '../assests/landing1.jpg';
import landing1 from '../assests/landing2.jpg';
import protect from '../assests/protect.png';
import bank from '../assests/bank.png';
import choose from '../assests/choose.jpg';
import protect1 from '../assests/protect1.png';
import challenge from '../assests/challenge.png';
import write from '../assests/write.png';
import accompany from '../assests/accompany.png';
import pri from '../assests/pri.jpg';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img src={landing} alt='landing' class='max-w-full h-auto' />

        <div class='absolute top-0 left-0 w-full h-full flex items-center flex-col pt-[100px] md:pt-[400px] text-center'>
          <a href='/service'>
            <div class=' px-5 flex items-center justify-center text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
              <img src={protect} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
              Legal protection of businesses and citizens
            </div>
          </a>

          <a href='/service'>
            <div class=' px-5 pt-6 flex  text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
              <img src={bank} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
              Bankruptcy
            </div>
          </a>
        </div>
      </div>

      <div class='flex flex-wrap justify-center items-center mt-20'>
        <div class='flex flex-col justify-center items-left m-4'>
          <h1 class='text-2xl font-bold mb-2'>
            Why do clients <br></br>choose Active Lawyers?
          </h1>
          <p class='text-gray-600 mb-4'>
            Protection is a complex process consisting of many different
            <br></br>
            aspects. If for a business it is optimizing costs, eliminating risks
            <br></br>
            and protecting assets, then for a citizen it is preserving freedom,
            <br></br>
            property, honor and dignity. For Wallman, this is a responsibility,
            <br></br>
            legal and moral. Wallman always stands for sincerity and transparent
            <br></br>
            relationships without false guarantees. Wallman for quality,
            <br></br>
            fulfillment of its obligations, efficiency and modern experience.
            <br></br>
            The ability to protect means protecting a business or person from
            <br></br>
            problems. Working with Wallman means being behind a stone wall.
            <br></br>
          </p>
          <button class=' bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>
            More about us
          </button>
        </div>

        <div class='flex justify-center items-center m-4'>
          <img
            src={choose}
            alt='choose'
            class='w-full max-w-sm h-auto rounded-lg'
          />
        </div>
      </div>

      <div class='relative pt-20'>
        <img src={landing1} alt='landing' class='w-full h-[400px] md:h-auto' />

        <div class='absolute top-0 left-0 w-full h-[auto] flex items-center flex-col pt-[100px] md:pt-[340px] text-center'>
          <a href='/service'>
            <div class=' px-5 pt-20 md:pt-0 flex items-center justify-center text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
              <img src={protect1} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
              Let's protect
            </div>
          </a>

          <a href='/service'>
            <div class=' px-5 pt-6 flex items-center justify-center  text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
              <img src={challenge} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
              Let's challenge
            </div>
            <a href='/service'>
              <div class=' px-5 pt-6 flex items-center justify-center text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
                <img src={write} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
                We'll write it off
              </div>
            </a>

            <a href='/service'>
              <div class=' px-5 pt-6 flex items-center justify-center  text-white text-2xl md:text-5xl hover:text-yellow-600 transition duration-300 ease-in-out'>
                <img src={accompany} alt='Icon' class='w-8 h-8 mr-3 md:mr-5 ' />
                We will accompany you
              </div>
            </a>
          </a>
        </div>
      </div>

      <div class='flex flex-wrap justify-evenly pt-16'>
        <div class='flex flex-col justify-center  m-4'>
          <h2 class='text-xl font-bold mb-2'>Active Lawyers</h2>
          <p class='text-gray-600 mb-4'>
            Get your Wallman Lawyers loyalty card
          </p>

          <div class='flex justify-center items-center mb-4 gap-10'>
            <div>
              <p class='text-gray-700 font-bold'>
                Cashback with bonus<br></br> points up to 3% of the<br></br>{' '}
                cost of services
              </p>

              <p class='text-gray-700'>
                Accumulative electronic<br></br> Cashback cardt
              </p>
            </div>
            <div>
              <p class='text-gray-700 font-bold'>
                Pay for services with points
              </p>

              <p class='text-gray-700'>
                1 point = 1 ruble. Pay up to 20% of <br></br>the cost of
                services
              </p>
            </div>
          </div>
          {/* second  */}
          <div class='flex justify-center items-center mb-4 gap-10'>
            <div>
              <p class='text-gray-700 font-bold'>10,000 points as a gift</p>

              <p class='text-gray-700'>
                To your bonus account for<br></br> registration
              </p>
            </div>
            <div>
              <p class='text-gray-700 font-bold'>
                10,000 rubles in cash for a<br></br> recommendation
              </p>

              <p class='text-gray-700'>
                We will pay you for each<br></br> recommendation of bankruptcy
                <br></br>
                services for individuals. persons
              </p>
            </div>
          </div>

          {/* Third  */}
          <div class='flex justify-center items-center mb-4 gap-10'>
            <div>
              <p class='text-gray-700 font-bold'>
                10,000 points <br></br>per recommendation
              </p>

              <p class='text-gray-700'>
                For a service provided to your <br></br> friend using a referral
                link
              </p>
            </div>
            <div>
              <p class='text-gray-700 font-bold'>1,000 points per review</p>

              <p class='text-gray-700'>
                We will pay you for each<br></br> recommendation of bankruptcy
                <br></br>
                Leave feedback after each<br></br> service provided
              </p>
            </div>
          </div>

          <button class=' bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>
            Button
          </button>
        </div>

        <div class='flex justify-center items-center m-4'>
          <img
            src={pri}
            alt='pri'
            class='max-w-xs md:max-w-lg h-auto rounded-lg'
          />
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default Home;
